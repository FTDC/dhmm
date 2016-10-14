$(document).ready(function () {
	/*============================================================================================
			Event Handler	
	============================================================================================*/
	/*	엔터 */
	$("#frmNavi input").keypress(function (event) {if (event.keyCode == 13){goList();}})
	/*	검색	*/
	$("#btnSearch").click(function () {
		goList();
		return false;
	});
	/*	검색취소	*/
	$("#btnSearchCancel").click(function () {
		$("#frmNavi input[name='Mode']").val("");
		$("#frmNavi div.search_option input").val("");
		$("#frmNavi div.search_option select option:first").attr("selected", "selected");
		$("#frmNavi").attr({"method": "get", "target": "", "action": ""}).submit();
		return false;
	});
	/*	목록	*/
	$("#btnList").click(function () {
		goList();
		return false;
	});
	/*	쓰기	*/
	$("#btnWrite").click(function () {
		goWrite();
		return false;
	});
	/*	수정	*/
	$("#btnModify").click(function () {
		goModify();
		return false;
	});
	/*	등록/수정	*/
	$("#btnSave").click(function () {
		saveContents();
		return false;
	});

	/*	삭제	*/
	$("#btnDelete").click(function () {
		deleteContents();
		return false;
	});
});


var goPage	= function (intPage) {
	$("#frmNavi input[name='Page']").val(intPage);
	goList();
	return false;
}

var goList			= function () {
	$("#frmNavi input[name='Mode']").val("");
	$("#frmNavi").attr({"method": "get", "target": "", "action": "Board.asp"}).submit();
}

var goWrite			= function () {
	$("#frmNavi input[name='Mode']").val("WRITE");
	$("#frmNavi").attr({"method": "get", "target": "", "action": "Board.asp"}).submit();
}

var goReply			= function () {
	$("#frmNavi input[name='Mode']").val("REPLY");
	$("#frmNavi").attr({"method": "get", "target": "", "action": "Board.asp"}).submit();
}

var goModify		= function () {
	$("#frmNavi input[name='Mode']").val("MODIFY");
	$("#frmNavi").attr({"method": "get", "target": "", "action": "Board.asp"}).submit();
}

var goView			= function (intIdx) {
	$("#frmNavi input[name='Idx']").val(intIdx);
	$("#frmNavi input[name='Mode']").val("VIEW");
	$("#frmNavi").attr({"method": "get", "target": "", "action": "Board.asp"}).submit();
}
var saveContents	= function () {
	// validate
	if ($("#frmDefault select[name='CategoryIdx']").length > 0){
		if ($("#frmDefault select[name='CategoryIdx']").val() == ""){
			alert("카테고리를 선택하세요.");
			return;
		}
	}
	if ($("#frmDefault input[name='Subject']").val().length < 1){
		$("#frmDefault input[name='Subject']").focus();
		alert("제목을 입력하세요.");
		return;
	}

	//oEditors.getById["txtContents"].exec("UPDATE_IR_FIELD", []);
	if ($("#frmDefault textarea[name='Contents']").val().length < 1){
		$("#frmDefault textarea[name='Contents']").focus();
		alert("내용을 입력하세요.");
		return;
	}
	$("#frmDefault").attr({"method": "post", "target": "ifrmProc", "action": "Board_Proc.asp"}).submit();
}

var deleteContents	= function () {
	if(confirm("삭제하시겠습니까?")) {
		$("#frmDefault input[name='Mode']").val("DELETE");
		$("#frmDefault").attr({"method": "post", "target": "ifrmProc", "action": "Board_Proc.asp"}).submit();
	}
}

var addAttach		= function () {
	window.open("Attach.asp?mode=ATTACH&BoardIdx=" + $("#frmNavi input[name='BoardIdx']").val() + "&idx=" + $("#frmNavi input[name='Idx']").val(), "Popup_Board_Attach", "toolbar=no,location=0,directory=no,status=no,menubar=0,scrollbars=no,resizable=yes,width=450,height=250,left=250,top=65");
}


var getFileList		= function (strMode) {
	$.post("Attach_Ajax.asp", {"Mode": strMode, "BoardIdx": $("#frmNavi input[name='BoardIdx']").val(), "Idx": $("#frmNavi input[name='Idx']").val()}, function (objReturn) {
		$("div.file").html(objReturn);
	});
}

var downFile		= function (intIdx) {
	document.ifrmProc.location.href = "Attach_Down.asp?BoardIdx=" + $("#frmNavi input[name='BoardIdx']").val() + "&Idx=" + intIdx;
}

var deleteFile		= function (intIdx) {
	if (confirm("해당파일을 삭제하시겠습니까?")){
		$.post("Attach_Ajax.asp", {"Mode": "DELETE", "BoardIdx": $("#frmNavi input[name='BoardIdx']").val(), "Idx": intIdx}, function (objReturn) {
			getFileList();
		});
	}
}

var getCommentList	= function () {
	$.get("Board_Comment.asp", {"Mode": "LIST", "BoardIdx": $("#frmNavi input[name='BoardIdx']").val(), "Idx": $("#frmNavi input[name='Idx']").val()}, function (objReturn) {
		$("td.comment").html(objReturn);
	});
}

var saveComment		= function () {
	if ($.trim($("#frmDefault textarea[name='CommentContents']").val()).length < 1){
		$("#frmDefault textarea[name='CommentContents']").focus();
		$("#frmDefault textarea[name='CommentContents']").val($.trim($("#frmDefault textarea[name='CommentContents']").val()))
		alert("댓글내용을 입력하세요.");
		return;
	}
	$.post("Board_Comment.asp", {
		"Mode": "WRITE"
		, "BoardIdx": $("#frmDefault input[name='BoardIdx']").val()
		, "Idx": $("#frmDefault input[name='Idx']").val()
		, "Contents": $("#frmDefault textarea[name='CommentContents']").val()
	}, function (objReturn) {
		getCommentList("LIST");
	});
}


var deleteComment	=	function (intIdx) {
	if(confirm("댓글을 삭제하시겠습니까?")) {
		$.post("Board_Comment.asp", {"Mode": "DELETE", "BoardIdx": $("#frmNavi input[name='BoardIdx']").val(), "Idx": intIdx}, function (objReturn) {
			getCommentList("LIST");
		});
	}
}