//dom 로드시 적용할 속성
//포커스
var $globalFocusLocation;
function openFocus(obj) {
	$globalFocusLocation = $(obj);
}
function moveFocus(targetObjId) {
	$("#" + targetObjId).find("*").each(function() {
		var $tag = $(this),
			tn = this.tagName.toLowerCase();
		if(tn == "input" || tn == "a" || tn == "select") {
			if($tag.attr("type") != "hidden") {
				$tag.focus();
				return false;
			}
		}
	});
}
function closeFocus() {
	$globalFocusLocation.focus();
} 

$(function(){

	//게시판 last tr 스타일 적용
	var listLast = $("table.list tr:last-child");
	var faqListLast = $("#listFaq ul li:last-child");
	var popResultLast = $("#popResultBx ul li:last-child");
	listLast.addClass("last");
	faqListLast.addClass("last");
	popResultLast.addClass("last");

	//파일찾기 스타일 적용
	$("input.fileStyle").filestyle({ 
		image: "/images/common/btn_search_file.gif",
		imageheight : 20,
		imagewidth : 50,
		width : 205
	});

	//천사의 앨범 파일찾기 스타일 적용
	$("input.fileAlbum").filestyle({ 
		image: "/images/event/btn_file_album.gif",
		imageheight : 22,
		imagewidth : 69,
		width : 231
	});

	// 스크롤페인 처리
	//$(function(){$('.scroll_pane').jScrollPane({showArrows: true});}); 매장찾기 스크롤 jquery.jScrollPane.min.js
	$(function(){$('.scroll_album').jScrollPane({showArrows: false});});
	
	// 좌측 검색 포커스 bg 처리
	var sLeft = $("#searchLeft #inpLeftShopText");
	var clsOn = "input focus";
	sLeft.focus(function(){
		$(this).attr("class",clsOn);
	});
	sLeft.blur(function(){
		if($(this).val() == ""){
			$(this).attr("class","input");
		}else{
			$(this).attr("class",clsOn);
		}
	});

	// 트위터 리스트 스타일 처리
//	var twtLast = $(".twtter li:last-child");
//	twtLast.addClass("last");

	// 페이스북, 트위터 탭
	$(".social h3 a").click(function(){
		$(".socialBox").removeClass("on");
		$(this).parent().next().addClass("on");

		$(".social h3 a img").each(function() {
			$(this).attr("src", $(this).attr("src").replace("_on.gif","_off.gif"));
		});
		$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_off.gif","_on.gif"));
		return false;
	});

	// 패밀리사이트
	//m4one 시작
	$(".family a.btn_famOpen").bind("click", function(){
		$(".familyWrap").addClass("on");
		return false;
	});
	$(".family a.btn_famClose").bind("click", function(){
		$(".familyWrap").removeClass("on");
		$(".family a.btn_famOpen").focus();
		return false;
	});
	//m4one 끝

	// 플레이어
	$(".player a.player_open").bind("click", function(){
		$(".playerList").show();
		return false;
	});
	$(".playerList a.player_close").bind("click", function(){
		$(".playerList").hide();
		$(".player a.player_open").focus();
		return false;
	});

	// 회원 등급 레이어팝업
	$(".open_popup_grade").bind("click", function(e){
		$(".popup_grade").show();
		return false;
	});
	$(".close_popup_grade").bind("click", function(e){
		$(".popup_grade").hide();
		return false;
	});

});


// 2013-06-14 GNB
function setPage(arg) { //navigation hn:1depth, sn:2depth 를 받음
	page = jQuery.extend({
		hn : "",
		sn : ""
	}, arg || {});
	var convertObj = function(obj) {
		$.each(obj, function(key, val) {
			if(val == "") {
				var value = -1;
			} else {
				var value = Number(val);
			}
			eval("obj." + key+"=" + value);
		});
	}
	convertObj(arg);
	if(window.console){console.log(arg)};

	
//	alert(page.hn +","+ page.sn);	

	var $depth1 = $("#gnb > .gnbInner > .depth1 > li >  a");
	var $depth2 = $("#gnb > .gnbInner > .depth1 > li > .depth2 > ul > li > a");
	var $cur1 = $("#gnb > .gnbInner > .depth1 > li.hn" + page.hn + " > a");
	var $cur2 = $("#gnb > .gnbInner > .depth1 > li.hn" + page.hn + " .depth2 > ul > li.sn" + page.sn + " > a");
	var $lnbDepth1 = $("#lnb");
	var $lnbDepth2 = $lnbDepth1.find(" > .depth2 > ul > li.sn" + page.sn + " > a");
 
	$cur1.addClass("selected");
	$cur2.addClass("selected");
	$lnbDepth1.removeAttr("class");
	$lnbDepth1.addClass("hn" + page.hn); 
	$lnbDepth2.addClass("selected"); 

	//m4one 시작
	//$depth1.bind("mouseenter focus click", function() {
	$depth1.bind("mouseenter focus", function() {
		$("#gnb").addClass("active");
		$("#gnb.active").stop().animate({"height":"246px"},500);
		$depth1.removeClass("selected"); 
		$(this).addClass("selected"); 
		return false;
	});

	$depth2.bind("mouseenter", function() {
		$cur1.addClass("selected");
		$depth1.removeClass("selected");
		$(this).parentsUntil(".depth2").parent().prev("a").addClass("selected"); 
		//$(this).parentsUntil(".depth2").parent().prev().find(" > a").addClass("selected"); 
		return false;
	});
		
	$("#gnb").bind("mouseleave", function() {
		$("#gnb.active").stop().animate({"height":"40px"},500,function(){
			$("#gnb").removeClass("active");
			$depth1.removeClass("selected");
			$cur1.addClass("selected");
			
		});
		return false;
	});

	$("#gnb .gnbClose").bind("click", function() {		
		$("#gnb.active").stop().animate({"height":"40px"},500,function(){
			$("#gnb").removeClass("active");
			$depth1.removeClass("selected");
			$cur1.addClass("selected");
			
		});
		return false;
	});

	$(".playnstop a").bind("focus", function() {
		$("#gnb.active").stop().animate({"height":"40px"},500,function(){
			$("#gnb").removeClass("active");
			$depth1.removeClass("selected");
			$cur1.addClass("selected");
			
		});
		return false;
	});

	$("#lnb .depth2 ul li a").bind("focus", function() {
		$("#gnb.active").stop().animate({"height":"40px"},500,function(){
			$("#gnb").removeClass("active");
			$depth1.removeClass("selected");
			$cur1.addClass("selected");
			
		});
		return false;
	});

}



























//ie6 min-width bug fix
function minWidth(){
    var dWidth = $(document).width();
    if(dWidth < 980){
        $("body").addClass("min");
    }else{
        $("body").removeClass("min");
    }
}
//온로드, 브라우저 리사이즈시 실행
function uiRefresh(){
	if($("body").hasClass("pop")){
		return;
	}else{
		if( navigator.appName.indexOf("Microsoft") > -1 ){
			if( navigator.appVersion.indexOf("MSIE 6") > -1){
				minWidth();
		   }
		}
	}
}

//아이프레임 팝업 레이어 중앙에 띄우기
function iFrameLayer(i,w,h,src){
	if(i==1){
		var layerPop = '<div class="layer_blank"><iframe id="layerFrame" name="" src="' + src + '" frameborder="0" width="' + w + '" height="' + h +'" scrolling="no" style="border:0"></iframe></div>';
		$("body").append(layerPop);
		//var docHeight = $(document).height()
		//var sHeight = $(document).scroll.height;
		var layerML = ($(window).scrollLeft() + ($(window).width() - w)/2 + 145); 
		var layerMT = ($(window).scrollTop() + ($(window).height() - h)/2);
		$(".layer_blank").css("left",layerML)
		$(".layer_blank").css("top",layerMT)
	}else if(i==0){
		$(".layer_blank").remove();
	}else{
		return;	
	}
	//컨텐츠의 가운데 뜨도록 조정
}

//팝업 
function openPopup(url,w,h,scroll){
	window.open(url,"Popup", "width=" + w + ",height=" +  h + ",toolbar=no,location=no,status=no,menubar=no,scrollbars=" + scroll + ",resizable=no");
}

//팝업 
function openPopup2(url,w,h){
	window.open(url,"Popup", "width=" + w + ",height=" +  h + ",toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no");
}

//팝업 v,h 중앙
function posPopup(){ 
    var x,y; 
    if (self.innerHeight) { // IE 외 모든 브라우저 
        x = (screen.availWidth - self.innerWidth) / 2; 
        y = (screen.availHeight - self.innerHeight) / 2; 
    }else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict 모드 
        x = (screen.availWidth - document.documentElement.clientWidth) / 2; 
        y = (screen.availHeight - document.documentElement.clientHeight) / 2; 
    }else if (document.body) { // 다른 IE 브라우저( IE < 6) 
        x = (screen.availWidth - document.body.clientWidth) / 2; 
        y = (screen.availHeight - document.body.clientHeight) / 2; 
    } 
    window.moveTo(x,y); 
}

function layerPop(i,id){
	if(i == 0){
		document.getElementById(id).style.display = "none";
		return false;
	}else if(i == 1){
		document.getElementById(id).style.display = "block";
		return false;
	}else{
		alert();
		return false;
	}
}

//GNB resize 
function swf_resizing(h){
	if(h == 1){
		$("#gnb").height(300);
		$("#gnbSwf").height(300);
	}else if(h == 2){
		$("#gnb").height(600);
		$("#gnbSwf").height(600);
	}else{
		$("#gnb").height(200);
		$("#gnbSwf").height(200);
	}
}

//gnb 리모콘의 버튼값 전달
function playBtn(b){
	//alert(b);
	top.topFrame.sendBtn(b);
}
//gnb 리모콘의 플레이리스트 넘버 전달
function playList(n){
	//alert(n);
	top.topFrame.sendList(n);
}
//리모콘 리사이즈
function resizeRMT(n){
	if(n == 1){
		$("#playerRemote").height(260);
		$("#remoteSwf").height(260);
		$("#playerRemote").width(980);
		$("#remoteSwf").width(980);
		$("#playerRemote").css("marginLeft","-490px");
	}else{
		$("#playerRemote").height(40);
		$("#remoteSwf").height(40);
		$("#playerRemote").width(360);
		$("#remoteSwf").width(360);
		$("#playerRemote").css("marginLeft","130px");
	}
}

function tabList(ele, active){
	var ele = document.getElementById(ele);
	if(active === undefined) active = 0;						
	
	// tabtit를 포함하는 제목 노드들 수집 
	var btn = ele.getElementsByTagName("*");
	for(var i=0; i<btn.length; i++){
		if(btn[i].className.indexOf('tabtit') != -1){
			btn = btn[i].nodeName;
			btn = ele.getElementsByTagName(btn);
			break;
		}
	}
	
	// 타이틀의 타겟 레이어 이름중 숫자만 뺀 영문만 tab1 중 tab만
	var layerName = btn[0].getElementsByTagName("A")[0].href.split("#")[1];
	layerName = layerName.slice(0, layerName.length-1);
	
	for(var i=0; i<btn.length; i++){
		ele["target" + i] = document.getElementById(layerName + (i+1)); // 노드저장 예) tab1, tab2, tab3
		ele["a" + i] = btn[i].getElementsByTagName("A")[0]; // 탭링크
		ele["img" + i] = btn[i].getElementsByTagName("IMG")[0]; // 이미지노드 저장
		btn[i].style.position = "absolute"; // 제목레이어 적용
	
	}

	/* 사회공헌 탭 */
	var oldActive = active

	for(var i=0; i<btn.length; i++){
		if (typeof(ele["a" + i]) !== "undefined"){
			ele["a" + i].cnt = i;
			ele["a" + i].onclick = function menuActive(){
				ele["target" + oldActive].style.display = "none";
				ele["img" + oldActive].src = ele["img" + oldActive].src.replace("_over", "_out");
				
				ele["target" + this.cnt].style.display = "block";
				ele["img" + this.cnt].src = ele["img" + this.cnt].src.replace("_out", "_over");
				oldActive = this.cnt;
				return false;
			}
			
			if(active == i) continue; // 초기 활성화
			ele["target" + i].style.display = "none";
			ele["img" + i].src = ele["img" + i].src.replace("_over", "_out");
		}
	}
}

function logout() {
	//top.location.href="/SSO/logout.asp";

	top.location.href="http://member.lpoint.com/door/sso/logout.jsp?sid=ANGELINUS";
}


function mp3play() {
	
}

//언어선택 2015-03-03
$(function() {
	$(".langOpen").click(function() {
		$(this).toggleClass("selected");
		$(".langList").toggle();
		return false;
	});
});