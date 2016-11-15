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
    <link href="<?php echo CSS_PATH;?>dhmm/base.css" rel="stylesheet" type="text/css" media="all">
    <link href="<?php echo CSS_PATH;?>dhmm/jquery.ui.theme.css" rel="stylesheet" type="text/css" media="all">
    <link href="<?php echo CSS_PATH;?>dhmm/jquery.ui.datepicker.css" rel="stylesheet" type="text/css" media="all">
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