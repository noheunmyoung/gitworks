var treeClickTime;

// 추가 펑션
$.fn.extend(
{
	// 테이블 TR 소트 가능하도록 
	makeSortTable: function (moveChk) 
	{
		var _tblId = "#" + $(this).attr("id");
		$(_tblId + " tbody tr").find("td:last").each(function() {
			if ($(this).parent().attr("noSort") == undefined && $(this).parent().attr("noEdit") == undefined) {
				if ($(this).find(".btnUp").length == 0) {
					$(this).find("div").append("<span style=' display:block; position:absolute; right:2px; top:50%; margin-top:-12px;'> "
											 + "	<button type='button' class='selec rowSel btnUp'>⇧</button> "
											 + "	<button type='button' class='selec rowSel btnDown'>⇩</button> "
											 + "</span>");
				}
			}
		});

		$(_tblId + " tbody tr").addClass("cursor-pointer");
		$(_tblId + " .btnUp").unbind("click");
		$(_tblId + " .btnUp").click(function() {
			var moveOk = true;
			if(moveChk) { moveOk = moveChk('up', $(this)); }
			if(moveOk) {
				var row = $(this).parents("tr:first");
				row.insertBefore(row.prev());
				$(_tblId + " tbody tr").each(function(index) {
					$(this).find('td.sortNo').html(index + 1);
				});
			}
		});
		$(_tblId + " .btnDown").unbind( "click" );
		$(_tblId + " .btnDown").click(function() {
			var moveOk = true;
			if(moveChk) { moveOk = moveChk('down', $(this)); }
			if(moveOk) {
				var row = $(this).parents("tr:first");
				row.insertAfter(row.next());
				$(_tblId + " tbody tr").each(function(index) {
					$(this).find('td.sortNo').html(index + 1);
				});
			}
		});
		
		$( _tblId + " tbody" ).sortable( {
			items : "> tr:not([noSort])",
			update: function( event, ui ) {
				$(_tblId + " tbody tr").each(function(index) {
					$(this).find('td.sortNo').html(index + 1);
				});
		  }
		});
	},
	
	makeSortTableReverse: function (moveChk) 
	{
		var _tblId = "#" + $(this).attr("id");
		$(_tblId + " tbody tr").find("td:last").each(function() {
			if($(this).parent().attr("noSort") == undefined && $(this).parent().attr("noEdit") == undefined) {
				if($(this).find(".btnUp").length == 0) {
					$(this).find("div").append("<span style=' display:block; position:absolute; right:2px; top:50%; margin-top:-12px;'> "
										 	 + "	<button type='button' class='selec rowSel btnUp'>⇧</button> "
											 + "	<button type='button' class='selec rowSel btnDown'>⇩</button> "
											 + "</span>");
				}
			}
		});

		$(_tblId + " tbody tr").addClass("cursor-pointer");
		$(_tblId + " .btnUp").unbind("click");
		$(_tblId + " .btnUp").click(function() {
			var moveOk = true;
			if(moveChk) { moveOk = moveChk('up', $(this)); }
			if(moveOk) {
				var row = $(this).parents("tr:first");
				row.insertBefore(row.prev());
				$(_tblId + " tbody tr").each(function(index) {
					$(this).find('td.sortNo').html($( _tblId + " tbody tr").length -index);
				});
				if(typeof setDefaultSignKind != "undefined") { setDefaultSignKind(); }
			}
		});
		$(_tblId + " .btnDown").unbind( "click" );
		$(_tblId + " .btnDown").click(function() {
			var moveOk = true;
			if(moveChk) { moveOk = moveChk('down', $(this)); }
			if(moveOk) {
				var row = $(this).parents("tr:first");
				row.insertAfter(row.next());
				$(_tblId + " tbody tr").each(function(index) {
					$(this).find('td.sortNo').html($( _tblId + " tbody tr").length -index);
				});
				if(typeof setDefaultSignKind != "undefined") { setDefaultSignKind(); }
			}
		});
		
		$( _tblId + " tbody" ).sortable( {
			items : "> tr:not([noSort])",
			update: function( event, ui ) {
				$(_tblId + " tbody tr").each(function(index) {
					$(this).find('td.sortNo').html($( _tblId + " tbody tr").length -index);
				});
		  }
		});
	},

	// 부서/직원 트리
	makeDeptEmplTree : function(defaultId, doubleClickFunction, completeFunction) {
		var _treeId = "#" + $(this).attr("id");
		var initLoopCnt = 0;
		$(_treeId).bind('loaded.jstree', function(e, data) {
			if(defaultId != "") {
				$(_treeId).jstree('select_node', defaultId );
			}else {
				$(_treeId).jstree('open_node', 'ul > li:first');
			}
			if(completeFunction) {
				completeFunction(initLoopCnt);
				initLoopCnt++;
			}
		}).jstree({
			'core' : {
				"check_callback" : true,
				"dblclick_toggle" : false,
				'data' : {
					"url" : "kia03001_orgchart.do?upper_cd=ROOT",
					"dataType" : "json" // needed only if you do not supply JSON headers
				}
			}
		});
		
		$(_treeId).on("changed.jstree", function (e, data) {
			if($(_treeId).jstree()) {
				var selectedDeptId = data.selected[0];
				if(treeClickTime){
					clearTimeout(treeClickTime);
					treeClickTime = null;
				}
				treeClickTime = setTimeout(function() {
					var snode = $(_treeId).jstree().get_selected(true);
					if(snode.length > 0 && snode[0].children.length > 0) { $(_treeId).jstree("open_node", snode[0]);  return; }
					if(snode && snode.length > 0 && snode[0].original.type == "dept") {
						ajaxJson("kia03001_orgchart.do?upper_cd=" + selectedDeptId, "", function(rtn) {
							if(rtn.length == 0) { toastPop1("해당 부서에 등록된 직원이 없습니다."); }
							for(var i=0; i < rtn.length; i++) {
								$(_treeId).jstree().create_node(selectedDeptId, rtn[i], "last"); 
							}
							$(_treeId).jstree("open_node", $("#" + selectedDeptId));

							if(completeFunction) {
								completeFunction(initLoopCnt);
								initLoopCnt++;
							}
						});
					}
				},300);
			}
		});
		
		$(_treeId).on("dblclick.jstree", function (e, data) {
			clearTimeout(treeClickTime);
			treeClickTime = null;
			var data= $(_treeId).jstree().get_selected(true);
			if(doubleClickFunction) {
				doubleClickFunction(e, data);
			}
		});
	},

	// 부서 트리
	makeDeptTree : function(defaultId, doubleClickFunction) {
		var _treeId = "#" + $(this).attr("id");
		$(_treeId).bind('loaded.jstree', function(e, data) {
			if(defaultId != "") {
				$(_treeId).jstree('select_node', defaultId );
			}else {
				$(_treeId).jstree('open_node', 'ul > li:first');
			}
			
		}).jstree({
			'core' : {
				"check_callback" : true,
				"dblclick_toggle" : false,
				'data' : {
					"url" : "kia04001_orgchart.do?only_dept_yn=Y&upper_cd=ROOT",
					"dataType" : "json" // needed only if you do not supply JSON headers
				}
			}
		});
		
		$(_treeId).on("changed.jstree", function (e, data) {
			  if($(_treeId).jstree()) {
				  var selectedDeptId = data.selected[0];
				  if(treeClickTime) {
					clearTimeout(treeClickTime);
					treeClickTime = null;
				  }
				  treeClickTime = setTimeout(function() {
					  var snode = $(_treeId).jstree().get_selected(true);
					  if(snode[0].children.length > 0) { $(_treeId).jstree("open_node", snode[0]);  return; }
				  },300);
			  }
		 });
		
		 $(_treeId).on("dblclick.jstree", function (e, data) {
			clearTimeout(treeClickTime);
			treeClickTime = null;
			var data = $(_treeId).jstree().get_selected(true);
			//console.log("dblclick",data);
			if(data[0].children.length > 0) {
				toastPop1("수신처는 팀단위로 선택하여 주십시오."); 
			}else {
				if(doubleClickFunction) {
					doubleClickFunction(e, data);
				}
			}
		 });
	},

	// 대외기관(LDAP) 트리
	makeLDapTree : function(defaultId, doubleClickFunction) {
		var _treeId = "#" + $(this).attr("id");
		$(_treeId).bind('loaded.jstree', function(e, data) {
			if(defaultId != "") {
				$(_treeId).jstree('select_node', defaultId );
			}else {
				$(_treeId).jstree('open_node', 'ul > li:first');
			}
			
		}).jstree({
			'core' : {
				"check_callback" : true,
				"dblclick_toggle" : false,
				'data' : {
					"url" : "kia04001_ldap_chart.do?parentoucode=0000000",
					"dataType" : "json" // needed only if you do not supply JSON headers
				}
			}
		});
		
		$(_treeId).on("changed.jstree", function (e, data) {
			if($(_treeId).jstree()) {
				console.log("time 0:" + treeClickTime);
				var selectedOuCode = data.selected[0];
				if(treeClickTime){
					clearTimeout(treeClickTime);
					treeClickTime = null;
				}
				treeClickTime = setTimeout(function() {
					if($(_treeId).length > 0) {
						var snode = $(_treeId).jstree().get_selected(true);
						if(snode[0].children.length > 0) { $(_treeId).jstree("open_node", snode[0]);  return; }
						if(snode && snode.length > 0 && snode[0].original.type == "org") {
							console.log("changed:" + selectedOuCode);
							ajaxJson("kia04001_ldap_chart.do" , {'parentoucode' : selectedOuCode, 'base_dn' : snode[0].original.dn}, function(rtn) {
								//if(rtn.length == 0) { toastPop1("하위에 등록된 부서가 없습니다."); }
								for(var i=0; i < rtn.length; i++) {
									console.log(selectedOuCode + ":" + JSON.stringify(rtn[i]));
									$(_treeId).jstree().create_node(selectedOuCode, rtn[i], "last"); 
								}
								$(_treeId).jstree("open_node", $("#" + selectedOuCode));
							});
						}
					}
				},300);
			}
		 });
		
		 $(_treeId).on("dblclick.jstree", function (e, data) {
			clearTimeout(treeClickTime);
			treeClickTime = null;
			var data= $(_treeId).jstree().get_selected(true);
			console.log("dblclick" + JSON.stringify(data));
			if(doubleClickFunction) {
				doubleClickFunction(e, data);
			}
		 });
	},

	// 대외기관(기타) 트리
	makeCrmCorpTree : function(defaultId, doubleClickFunction) {
		var _treeId = "#" + $(this).attr("id");
		$(_treeId).bind('loaded.jstree', function(e, data) {
			if(defaultId != "") {
				$(_treeId).jstree('select_node', defaultId );
			}else {
				$(_treeId).jstree('open_node', 'ul > li:first');
			}
		}).jstree({
			'core' : {
				"check_callback" : true,
				"dblclick_toggle" : false,
				'data' : {
					"url" : "kia04001_crmchart.do?upper_cd=ROOT",
					"dataType" : "json" // needed only if you do not supply JSON headers
				}
			}
		});

		$(_treeId).on("changed.jstree", function (e, data) {
			if($(_treeId).jstree()) {
				console.log("time 0:" + treeClickTime);
				var selectedCorpId = data.selected[0];
				if(treeClickTime){
					clearTimeout(treeClickTime);
					treeClickTime = null;
				}
				treeClickTime = setTimeout(function() {
					var snode = $(_treeId).jstree().get_selected(true);
					if(snode[0].children.length > 0) { $(_treeId).jstree("open_node", snode[0]);  return; }
					if(snode && snode.length > 0 && snode[0].original.type == "corp") {
						if(snode[0].original.member_cnt == 0) {
							//toastPop1("하위에 등록된 고객정보가 없습니다.");
						}else {
							/*
							ajaxJson("kia04001_crmchart.do?corp_cd=" + selectedCorpId, "", function(rtn) {
								if(rtn.length == 0) { toastPop1("하위에 등록된 고객정보가 없습니다."); }
								for(var i=0; i < rtn.length; i++) {
									console.log(selectedCorpId + ":" + JSON.stringify(rtn[i]));
									$(_treeId).jstree().create_node(selectedCorpId, rtn[i], "last"); 
								}
								$(_treeId).jstree("open_node", $("#" + selectedCorpId));
							});
							*/
						}
					}
				},300);
			}
		});
		
		$(_treeId).on("dblclick.jstree", function (e, data) {
			clearTimeout(treeClickTime);
			treeClickTime = null;
			var data= $(_treeId).jstree().get_selected(true);
			console.log("dblclick" + JSON.stringify(data));
			if(doubleClickFunction) {
				doubleClickFunction(e, data);
			}
		});
	},
	
	// 특정 포맷 형태를 변경 처리하여 serialize
	serializeCustom :function() {
		var _formId = "#" + $(this).attr("id");
		$(_formId + " .tYMD").each(function(idx) { $(this).val($(this).val().replaceAll("-", "")); });
		var _serializeVal = $(this).serialize();
		$(_formId + " .tYMD").trigger("blur");
		//console.log("serialize Custom val : " + _serializeVal);
		 
		return _serializeVal;
	}
});

