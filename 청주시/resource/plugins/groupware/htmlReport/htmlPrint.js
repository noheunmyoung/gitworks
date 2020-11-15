	function getPrintHtml(htmlContent) {	
		var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	    var isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
	    
		var printHtml = "";
		printHtml +='<html><head><title>인쇄</title>';
		printHtml +="<head>";
		printHtml +="<style>";
		printHtml +="@page { size:A4;margin:0mm;}";
		if (isChrome) {
		    printHtml +="body{-webkit-print-color-adjust: exact; margin:20mm;}";
		    printHtml +=".divBottom { position:absolute; bottom:10mm; left:5mm;}";  
		} else if (isIE) { 
		    printHtml +="body{-webkit-print-color-adjust: exact; margin:20mm;}";
		    printHtml +=".divBottom { position:absolute; bottom:10mm; left:5mm;}";
		}
		printHtml +="</style>";
		printHtml +="<link rel='stylesheet' type='text/css' href='/esign/htmlReport/htmlPrint.css'>";
		printHtml +='</head><body >';
		printHtml +='<div id="divHtml">';
		printHtml +=htmlContent;
		printHtml +='</div>';
		if (isIE) { 
		 printHtml +="<OBJECT id=IEPageSetupX classid='clsid:41C5BC45-1BE8-42C5-AD9F-495D6C8D7586' codebase='/com/viewer/htmlReport/IEPageSetupX.cab#version=1,4,0,3' width=0 height=0> ";	
		 printHtml +="<param name='copyright' value='http://isulnara.com'> ";
		 printHtml +="<div style='position:absolute;top:200;left:220;width:350;height:80;border:solid 1 #99B3A0;background:#D8D7C4;overflow:hidden;z-index:1;visibility:visible;'><FONT style='font-family: '굴림', 'Verdana'; font-size: 9pt; font-style: normal;'> ";
		 printHtml +="<BR>  인쇄 여백제어 컨트롤이 설치되지 않았습니다.  <BR>  <a href='/com/viewer/htmlReport/IEPageSetupX.exe'><font color=red>이곳</font></a>을 클릭하여 수동으로 설치하시기 바랍니다.  </FONT> ";
		 printHtml +="</div> ";
		 printHtml +="</OBJECT> ";
		 printHtml +='<' + 'script  type=\"text/javascript\" ' + '>\n'
		   + 'function goIEPrt() { \n'
		   + 'IEPageSetupX.header="";\n'
		   + 'IEPageSetupX.footer="";\n'
		   + 'IEPageSetupX.PrintBackground=true;\n'
		   + 'IEPageSetupX.print(true);\n'
		   + ' } \n'
		   + 'function Installed()  { \n'
		   + '	try { \n'
		   + '		return (new ActiveXObject("IEPageSetupX.IEPageSetup"));\n'
		   + '	} catch (e) { \n'
		   + '		return false; \n'
		   + '	} \n'
		   + '} \n'
		   + 'setTimeout(function() { goIEPrt(); } , 500); \n'
		   + '<' + '/script' + '>';
		 
		}  else {
			printHtml +='<' + 'script  type=\"text/javascript\" ' + '>'
					   + 'window.print(); '
					   + '<' + '/script' + '>';
		}
		printHtml +='</body></html>';
		return printHtml;
	}