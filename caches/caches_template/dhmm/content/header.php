<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=7"/>
    <title><?php if(isset($SEO['title']) && !empty($SEO['title'])) { ?><?php echo $SEO['title'];?><?php } ?><?php echo $SEO['site_title'];?></title>
    <meta name="keywords" content="<?php echo $SEO['keyword'];?>">
    <meta name="description" content="<?php echo $SEO['description'];?>">
    <!--<link href="<?php echo CSS_PATH;?>reset.css" rel="stylesheet" type="text/css"/>-->
    <!--<link href="<?php echo CSS_PATH;?>default_blue.css" rel="stylesheet" type="text/css"/>-->
    <link href="<?php echo CSS_PATH;?>dhmm/base_1.css" rel="stylesheet" type="text/css" media="all">
    <link href="<?php echo CSS_PATH;?>dhmm/jquery.ui.theme_1.css" rel="stylesheet" type="text/css" media="all">
    <link href="<?php echo CSS_PATH;?>dhmm/jquery.ui.datepicker_1.css" rel="stylesheet" type="text/css" media="all">
    <link href="<?php echo CSS_PATH;?>dhmm/reset_ac.css" rel="stylesheet" type="text/css" media="all">

    <!--
    <link href="<?php echo JS_PATH;?>dhmm/library/css/base.css?rnd=B8BDC3" rel="stylesheet" type="text/css" media="all">
    <link href="<?php echo JS_PATH;?>dhmm/library/css/jquery.ui.theme.css?rnd=B8BDC3" rel="stylesheet" type="text/css" media="all">
    <link href="<?php echo JS_PATH;?>dhmm/library/css/jquery.ui.datepicker.css?rnd=B8BDC3" rel="stylesheet" type="text/css" media="all">
    -->

    <script src="<?php echo JS_PATH;?>dhmm/library/js/jquery-1.5.1.min.js" charset="utf-8"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/jquery.easing.min.js" charset="utf-8"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/plugin/jquery.ui.core.js" charset="utf-8"></script>
    <!--<script src="<?php echo JS_PATH;?>dhmm/library/js/plugin/selectbox/jquery.selectbox.js" charset="utf-8"></script>-->
    <script src="<?php echo JS_PATH;?>dhmm/library/js/jquery.mousewheel.js" charset="utf-8"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/jquery.jscrollpane.min.js" charset="utf-8"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/editor/SE/js/HuskyEZCreator.js" charset="utf-8"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/function.js" charset="utf-8"></script>
    <!--<script src="<?php echo JS_PATH;?>dhmm/library/js/select.js"></script>-->
    <script src="<?php echo JS_PATH;?>dhmm/library/js/file.style.js"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/iePngFix.js"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/swfobject.js"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/ui.js"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/jquery.func.js"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/richscript/richscript.js" charset="utf-8"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/richscript/richscript.angelinus.js" charset="utf-8"></script>

    <script src="<?php echo JS_PATH;?>dhmm/library/js/richscript/richscript.angelinus.menu.js"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/richscript/richscript.angelinus.home.js"></script>

</head>
<body class="main">

<!-- 상단배너
<div class="popup" id="main_pop1" >
<div class="pop">
    <div id="bannerZone"> -->
<!-- <span class="popBtn"><a href="#">자동재생정지</a></span>
<span class="baPrev"><a href="#"><img src="/images/main/baPrev.gif" alt="이전 팝업보기"></a></span>-->
<!-- <ul>
    <li class="on">
        <a href="/card/card.asp" class="bn"><img src="/images/main/banner/popup160912.jpg" alt="추석 연휴 택배사 마감으로 인해 마지막 배송날짜는 9월 9일이오며, 택배사 사정으로 인해 배송이 지연 될 수 있습니다. 또한 추석 연휴 기간 중 택배사 휴무 일정에 따라 9월 10일 ~ 9월 18일은 발송이 이루어지지 않으니, 고객님들의 양해 부탁드리겠습니다. 해당 기간 중 접수된 건은 택배사 정상 근무 일자인 9월 19일부터 순차적으로 발송됩니다. "></a>
    </li>
</ul>-->
<!-- <span class="baNext"><a href="#"><img src="/images/main/baNext.gif" alt="다음 팝업보기"></a></span>
<div class="ckeck">
    <input type="checkbox" id="close" value="" name="pclose" >
    <label for="close"><img src="/images/main/oneDay.gif" alt="1일 동안 열지 않기"></label>
    <a href="#"><img src="/images/main/popClose.gif" alt="팝업창닫기"></a>
</div>
</div>
</div>
</div>-->
<!-- //상단배너 -->


<!-- header -->
<!--

-->
<div id="skipnavi">
    <a href="#content">22222</a>
</div>

<!-- header -->
<div id="headerAc">
    <div class="gnb o-navi-fixed">
        <div class="gnbWrap">
            <div class="logoAc"><h1><a href="/index.asp">豆花妈妈</a></h1></div>
            <div class="gnbTop">
				<span>
                    <a target="_blank" href="http://www.angelinus.com/Member/Login.asp">官方微博</a> ㅣ
                    <a href="https://member.lpoint.com/door/user/login_common.jsp?sid=ANGELINUS">联系我们</a>
                    <!--<a href="/Voc/Voc_Write.asp">3333</a> ㅣ-->
                    <!--<a href="http://www.lotteria.com/Campaign/Management/Ethics_report.asp?sitecode=002" target="_blank" title="새창열림">4444</a> ㅣ-->
                    <!--<a href="/About/SpecialityAngelinus.asp" class="bf">555</a>ㅣ-->
                    <!--<a href="http://shop.angelinus.com/" title="새창열림" target="_blank" class="bf">6666</a>-->
				</span>
            </div>
            <div class="depthWrap">
                <ul class="depth1 o-navi-html"></ul>
            </div>
        </div>
    </div>
</div>
<!-- //header -->