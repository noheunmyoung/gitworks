//JavaScript Document
$(document).ready(function () {

	//데이터 테이블
	DataTable1();

	//개수
	var totalNum = $('#table1, #table2').find('td.finishD span.ico').length;
	var ingNum   = $('#table1 span.ico.ing, #table2 span.ico.ing').length;
	var doneNum  = $('#table1 span.ico.done, #table2 span.ico.done').length;
	var editNum  = $('#table1 span.ico.edit, #table2 span.ico.edit').length;
	var prdtNum  = $('#table2').find('td.finishD span.ico').length; /* 제품상세 */
	var noneNum   = totalNum - (ingNum+doneNum); /*미진행*/

	$('.currentState .total>div em').text(totalNum);
	$('.currentState .ing>div em').text(ingNum);
	$('.currentState .done>div em').text(doneNum);
	$('.currentState .edit>div em').text(editNum);
	$('.currentState .none>div em').text(noneNum);
	$('.currentState .prdt>div em').text(prdtNum);
	$('#prdtTotalTab>em').text(prdtNum); /* 제품상세:목록Tab */

	//비율
	$('#totalRate').text(Math.floor( (( (ingNum+doneNum+noneNum) /totalNum)*100)) + '%');
	$('#ingRate').text(Math.floor( ((ingNum/totalNum)*100)) + '%');
	$('#doneRate').text(Math.floor( ((doneNum/totalNum)*100)) + '%');
	$('#editRate').text(Math.floor( ((editNum/totalNum)*100)) + '%');
	$('#noneRate').text(Math.floor( ((noneNum/totalNum)*100)) + '%');
	$('#prdtRate').text(Math.floor( ((prdtNum/totalNum)*100)) + '%');


	//위로이동
	var scrollDiv = document.createElement('div');
	$(scrollDiv).attr('id', 'toTop').html('<a href="#none">위로 이동</a>').appendTo('body');
	$(window).scroll(function(){
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function(){
		$('body,html').animate({scrollTop: 0}, 'fast');
		return false;
	});

	//텝메뉴
	//$('.tbMenu').tabMENU();
});

function DataTable1(){
	var $table = $('table#table1');
	var $tableBody = $table.find('tbody');
	var $SelDepth1 = $table.find('#depth1');
	var $SelDepth2 = $table.find('#depth2');
	var $tableTr = $tableBody.find('tr');
	var depth1Str = undefined;
	var depth1Seq = undefined;
	var depth2Str = undefined;
	var depth2Seq = undefined;
	var menuObj = {};

	//넘버링을 위한 태그 추가
	$table.find('colgroup').prepend('<col style="width:38px" />');
	$table.find('thead').find('tr').eq(0).prepend('<th scope="col">No</th>');

	//대메뉴 메뉴 데이터 생성
	$tableTr.each(function (idx) {
		var $depth1 = $(this).find('td').eq(0);
		var $depth2 = $(this).find('td').eq(1);

		if ($.trim($depth1.text()) != ''){
		//if ($depth1.text().trim() != '') {
			depth1Str = $depth1.text();
			depth1Seq = idx;
			if (!menuObj[idx]) { menuObj[idx] = {}; }
			menuObj[idx].menuNm = $depth1.text();
		}
		if ($.trim($depth2.text()) != ''){
		//if ($depth2.text().trim() != '') {
			depth2Str = $depth2.text();
			depth2Seq = idx;
		}
		$(this).attr('data-seq1', depth1Seq).attr('data-depth1', depth1Str).attr('data-depth2', depth2Str).attr('data-seq2', depth2Seq);

		//넘버링
		$(this).prepend('<td class="no">'+ (idx + 1)+ '</td>');
	});

	//대메뉴 메뉴 데이터 생성
	$tableTr.each(function (idx) {
		if (!menuObj[$(this).attr('data-seq1')].lowerMenu) {
			menuObj[$(this).attr('data-seq1')].lowerMenu = {};
		}
		menuObj[$(this).attr('data-seq1')].lowerMenu[$(this).attr('data-seq2')] = $(this).attr('data-depth2');
	});

	//대메뉴 Option 태그 생성
	var arrHtmlStr = new Array();
	arrHtmlStr.push('<option value=""> 전체</option>');
	for (var name in menuObj) {
		arrHtmlStr.push('<option value="' + name + '">' + menuObj[name].menuNm + '</option>');
	}
	$SelDepth1.html(arrHtmlStr.join(''));

	//대메뉴 이벤트 바인딩
	$SelDepth1.on('change', function () {
		$owner.val(0);
	//	$stDate.val(0);
		$finishDate.val(0);
		$edDate.val(0);

		if($SelDepth1.val()){
			$tableTr.hide();
			$tableTr.filter('[data-seq1="' + $SelDepth1.val() + '"]').show();
		} else {
			$tableTr.show();
		}

		//중메뉴 Option 태그 생성
		if(menuObj[$SelDepth1.val()]){
			var lowerMenu = menuObj[$SelDepth1.val()].lowerMenu;
			arrHtmlStr.length = 0;
			arrHtmlStr.push('<option value="">전체</option>');
			for (var name2 in lowerMenu) {
				if (lowerMenu[name2]) {
					arrHtmlStr.push('<option value="' + name2 + '">' + lowerMenu[name2] + '</option>');
				}
			}
			$SelDepth2.html(arrHtmlStr.join(''));
		}
	});

	//중메뉴 이벤트 바인딩
	$SelDepth2.on('change', function () {
		$owner.val(0);
	//	$stDate.val(0);
		$finishDate.val(0);
		$edDate.val(0);

		if($SelDepth2.val()){
			$tableTr.hide();
			$tableTr.filter('[data-seq2="' + $SelDepth2.val() + '"]').show();
		} else {
			$SelDepth1.trigger('change');
		}
	});

	//작업자 셀렉트 박스 생성을 위한 데이터 생성
	var $owner = $table.find('#owner');
	var arrOwnerList = new Array();
	$tableTr.each(function (idx) {
		//var owner = $(this).find('td[class=owner]').text().trim();
		var owner = $.trim($(this).find('td[class=owner]').text())
		var flag = true;
		for(var i=0; i<arrOwnerList.length;i++){
			if(arrOwnerList[i] == owner){ flag = false; }
		}
		if(flag){ arrOwnerList.push(owner);}
		$(this).attr('data-owner', owner);
	});

	//작업자 셀렉트 박스 Option태그 생성
	arrOwnerList = arrOwnerList.sort();
	arrHtmlStr.length = 0;
	arrHtmlStr.push('<option value="0">전체 </option>');
	for (var i=1; i<arrOwnerList.length;i++) {
		arrHtmlStr.push('<option value="' + arrOwnerList[i] + '">' + arrOwnerList[i] + '</option>');
	}
	$owner.html(arrHtmlStr.join(''));

	//작업자 셀렉트 박스 이벤트 바인딩
	$owner.on('change', function(){
		$SelDepth1.val('');
		$SelDepth2.val('');
	//	$stDate.val(0);
		$finishDate.val(0);
		$edDate.val(0);

		if($owner.val() == '0'){
			$tableTr.show();
		} else {
			$tableTr.hide();
			$tableTr.filter('[data-owner="' + $owner.val() +'"]').show();
			$tableTr.filter('[class="depth1Tr"]').show();
		}
		return false;
	});

	//완료일 셀렉트 박스 생성을 위한 데이터 생성
	var $finishDate = $table.find('#finishDate');
	var arrFinishDateList = new Array();
	$tableTr.each(function (idx) {
	//	var finishDate = $(this).find('td[class=finishD]').text().trim();
		var finishDate = $.trim( $(this).find('td[class=finishD]').text());
		var flag = true;
		for(var i=0; i<arrFinishDateList.length;i++){
			if(arrFinishDateList[i] == finishDate){ flag = false; }
		}
		if(flag){ arrFinishDateList.push(finishDate); }
		$(this).attr('data-finishDate', finishDate);
	});

	//완료일 셀렉트 박스 Option태그 생성
	arrFinishDateList = arrFinishDateList.sort();
	arrHtmlStr.length = 0;
	arrHtmlStr.push('<option value="0">전체</option>');
	for (var i=1; i<arrFinishDateList.length;i++) {
		arrHtmlStr.push('<option value="' + arrFinishDateList[i] + '">' + arrFinishDateList[i] + '</option>');
	}
	$finishDate.html(arrHtmlStr.join(''));

	//완료일 셀렉트 박스 이벤트 바인딩
	$finishDate.on('change', function(){
		$SelDepth1.val('');
		$SelDepth2.val('');
		$owner.val(0);
	//	$stDate.val(0);
		$edDate.val(0);

		if($finishDate.val() == '0'){
			$tableTr.show();
		} else {
			$tableTr.hide();
			$tableTr.filter('[data-finishDate="' + $finishDate.val() +'"]').show();
			$tableTr.filter('[class="depth1Tr"]').show();
		}
	});

	//수정일 셀렉트 박스 생성을 위한 데이터 생성
	var $edDate = $table.find('#editDate');
	var arrEdDateList = new Array();
	$tableTr.each(function (idx) {
	//	var edDate = $(this).find('td[class=editD]').text().trim();
		var edDate = $.trim($(this).find('td[class=editD]').text());
		var flag = true;
		for(var i=0; i<arrEdDateList.length;i++){
			if(arrEdDateList[i] == edDate){ flag = false; }
		}
		if(flag){ arrEdDateList.push(edDate); }
		$(this).attr('data-edDate', edDate);
	});
	//수정일 셀렉트 박스 Option태그 생성
	arrEdDateList = arrEdDateList.sort();
	arrHtmlStr.length = 0;
	arrHtmlStr.push('<option value="0">전체</option>');
	for (var i=1; i<arrEdDateList.length;i++) {
		arrHtmlStr.push('<option value="' + arrEdDateList[i] + '">' + arrEdDateList[i] + '</option>');
	}
	$edDate.html(arrHtmlStr.join(''));
	//수정일 셀렉트 박스 이벤트 바인딩
	$edDate.on('change', function(){
		$SelDepth1.val('');
		$SelDepth2.val('');
		$owner.val(0);
		//$stDate.val(0);
		$finishDate.val(0);

		if($edDate.val() == '0'){
			$tableTr.show();
		} else {
			$tableTr.hide();
			$tableTr.filter('[data-edDate="' + $edDate.val() +'"]').show();
			$tableTr.filter('[class="depth1Tr"]').show();
		}
	});
}
$.fn.tabMENU = function(){
	return this.each(function(){
		var tAnchor  = $(this).find('>li>a');
		var tWrapper = $(this).parent('div');
		var tConts   = tWrapper.find('.tbMenuContent');

		$(tConts).hide();

		//로딩 후 활성화
		var currentMenu = $(this).find('>li.on a').attr('href');
		$(currentMenu).show();

		//클릭 시
		$(tAnchor).each(function(){
			$(this).click(tbMenu);

			function tbMenu(){
				var obj = $(this).parent();
				obj.addClass('on').siblings().removeClass('on');

				var clickedHref = $(this).attr('href');
				if( obj.is('.on') == true ){
					$(tConts).hide();
					$(clickedHref).show();
				} else {
					$(clickedHref).hide();
				}
				return false;
			}
		});
	});
};