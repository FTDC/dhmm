var oEditors = [];

var checkLogin	= function (strReturnUrl, strQueryStr) {
	if (confirm("로그인 후 이용해 주세요.")) {
		if (strQueryStr == "")
		{
			document.location.href='/Member/Login.asp?returnUrl=' + strReturnUrl;
		} else {
			document.location.href='/Member/Login.asp?returnurl=' + strReturnUrl + '?'+strQueryStr;
		}
	}	
}


function setSelected(strSelector, varValue) {
	$(strSelector + " option").each(function () {
		if (typeof(varValue) == "object"){
			
			for (var i=0; i < varValue.length; i++) {
				if ($(this).val() == varValue[i]) {
					$(this).attr("selected", "selected");
					break;
				}
			}
		}
		else {
			if ($(this).val() == varValue) {
				$(this).attr("selected", "selected");
			}
		}
	});
}
function setChecked(strSelector, varValue) {
	$(strSelector).each(function () {
		if (typeof(varValue) == "object"){
			for (var i=0; i < varValue.length; i++) {
				if ($(this).val() == varValue[i]) {
					$(this).attr("checked", "checked");
					break;
				}
			}
		}
		else {
			if ($(this).val() == varValue) {
				$(this).attr("checked", "checked");
			}
		}
	});
}

/* 글자수체크 2010-11-16 */
function cutByteContents(objSelector, objBytesText, intBytes) {
	if (objSelector.lengthByte() > intBytes){
		alert("" + intBytes + "byte 이상은 입력 하실수 없습니다. 작성하신 내용중 " + intBytes + "Byte가 초과된 부분은 자동 삭제됩니다.");
		objSelector.val(objSelector.cutByte(intBytes));
	}
	objBytesText.text(objSelector.lengthByte());
}

$.prototype.lengthByte = function() {
	var strValue = this.val();
	var strTemp;
	var intTempCount=0;
	var strTempChar;
	var intTotalCount = 0;
	strTemp = new String(strValue);
	intTempCount = strTemp.length;

	for (var i = 0; i < intTempCount; i++)	{
		strTempChar = strTemp.charAt(i);
		//onechar이  Enter경우 escape(onechar) ==> IE는 '%0D', '%0A' 2번 입력되고, 파폭의 경우 '%0A' 1변 입력 됨
		if (escape(strTempChar) =='%0D') {continue;} else if(escape(strTempChar) == '%0A'){intTotalCount += 2;} else if (escape(strTempChar).length > 4) {intTotalCount += 2; } else {intTotalCount++;}
	}
	return intTotalCount;
}

$.prototype.cutByte = function(intLength) {
	var strValue = this.val();
	var strTemp;
	var intTempCount=0;
	var strTempChar;
	var intTotalCount = 0;
	strTemp = new String(strValue);
	intTempCount = strTemp.length;
	//onechar이  Enter경우 escape(onechar) ==> IE는 '%0D', '%0A' 2번 입력되고, 파폭의 경우 '%0A' 1변 입력 됨
	for (var i = 0; i < intTempCount; i++)	{
		strTempChar = strTemp.charAt(i);
		if (escape(strTempChar) =='%0D') {continue;} else if(escape(strTempChar) == '%0A'){intTotalCount += 2;} else if (escape(strTempChar).length > 4) {intTotalCount += 2; } else {intTotalCount++;}
		if (intTotalCount > intLength){break;}
	}
	return strValue.substring(0, i);
}

// 셀렉트 컨트롤
$.fn.emptySelect = function(index) {return this.each(function(){if (this.tagName=='SELECT') this.options.length = index;});}
$.fn.loadSelect = function(optionsDataArray, selectCode) {
	return this.emptySelect().each(function(){
		if (this.tagName=='SELECT') {
			var selectElement = this;
			$.each(optionsDataArray,function(index,optionData){
				var option = new Option(optionData.caption,optionData.value,true, optionData.value==selectCode);
				if ($.browser.msie) {selectElement.add(option);}
				else {selectElement.add(option,null);}
			})
		}
	});
}

// 윈도우 오픈
function openWindow(strUrl, strName, strWidth, strHeight, strOption) {
	var objPopup = window.open(strUrl, strName,'width=' + strWidth + ',height=' + strHeight + ', scrollbars=no');
	objPopup.focus();
}

function openWindow2(strUrl, strName, strWidth, strHeight, strOption) {
	var objPopup = window.open(strUrl, strName,'width=' + strWidth + ',height=' + strHeight + ', ' + strOption);
	objPopup.focus();
}


function getCookie(sName) {
  var aCookie = document.cookie.split("; ");

  for (var i=0; i < aCookie.length; i++) {
    var aCrumb = aCookie[i].split("=");

    if (sName == aCrumb[0]) {
        return unescape(aCrumb[1]);
    }
  }
  return null;
}

function setCookie(name, value, expiredays) {
   var todayDate = new Date();
   todayDate.setDate( todayDate.getDate() + expiredays );
   document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function fnPopupClose(strID) {
	//alert($("#chkPopup_" + strID + ":checked").length);
	if ($("#chkPopup_" + strID + ":checked").length > 0) {
		setCookie("Popup_" + strID, "done" , 1);
		
	}
	$("#divPopup_" + strID).hide();
}

// 에디터 처리
$.fn.editor = function(strSkinUrl) {
	if (typeof(nhn) == "undefined"){
		alert("에디터가 정의되지 않았습니다.");
		return;
	}
	if(this.is(":visible")) {
		nhn.husky.EZCreator.createInIFrame({
			oAppRef: oEditors,
			elPlaceHolder: this.attr("id"),
			sSkinURI: strSkinUrl + '?id=' + this.attr("id"),
			fCreator: "createSEditorInIFrame"
		});
	}	
	this.parent("form").children("input:first").focus();
}

//숫자만 입력
function onlyNumber(element){
	element.keydown(function(){	
        //숫자열 0 ~ 9 : 48 ~ 57, 키패드 0 ~ 9 : 96 ~ 105 ,8 : backspace ,9 : Tab, 46 : delete
        if(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46){
			return true;
		}
        else{
            return false;
		}
	});	
}

//전화번호, 팩스번호, ~포함
function onlyTelFax(element){
	element.keydown(function(){	
        //숫자열 0 ~ 9 : 48 ~ 57, 키패드 0 ~ 9 : 96 ~ 105 ,8 : backspace ,9 : Tab, 46 : delete
        if(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46 || event.keyCode == 109 || event.keyCode == 189 || event.keyCode == 192){
			return true;
		}
        else{
            return false;
		}
	});	
}

//주민등록번호 유효성 체크
function jumincheck(jumin1, jumin2) {
	// 주민등록번호 앞 부분에서 생년월일을 알아냄
	var year = jumin1.substring(0,2);
	var month = jumin1.substring(2,4);
	var day = jumin1.substring(4,6);
	// 주민등록번호 뒷 부분에서 남녀 성별 정보 찾아냄
	var sex = jumin2.substring(0,1);

	// 주민등록번호 앞 부분 체크하기

	if ((year <25 || month<1 || month>12 ||day<1) || (jumin1.length != 6 ) ) {
		alert ("잘못된 주민등록번호입니다");
		return false;
	}

	// 주빈등록번호 뒷 부분 체크하기
	if ( (sex != 1 && sex != 2 ) || (jumin2.length != 7 ) ) {
		alert("주민등록번호를 바로 입력하여 주십시오.");
		form.Jumin2.focus();
		return false;
	}

	var val = 0;
	for (var i = 0; i <=5 ; i++){ 
		val = val + ((i%8+2) * parseInt(jumin1.substring(i,i+1)))
	}

	for (var i = 6; i <=11 ; i++){ 
		val = val + ((i%8+2) * parseInt(jumin2.substring(i-6,i-5)))
	}

	val = 11 - (val %11)
	val = val % 10

	if (val != jumin2.substring(6,7)) {
		alert ("잘못된 주민등록번호 입니다.");
		return false;
	}

	return true;
}

//이메일 체크
function emailcheck(semail){
	if (semail == "")
	{
		alert('이메일을 입력해주세요.'); 
        return false;
	}

	var chk_email = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(semail);

	if (!chk_email)
	{
		alert('이메일을 정확히 입력해주세요.'); 
        return false;
	}

	return true;
}
/*  2014-05-14  */
function popStore(){
	window.open("http://www.angelinus.com/Popup/pop_store_view20140513.asp","Popup", "width=450,height=510,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no");
		return false;
}