<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><html>
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
    <script type="text/javascript">
        <?php $j = 0?>
        $angelinus
        <?php $n=1; if(is_array($nav_cate)) foreach($nav_cate AS $k => $v) { ?>
        <?php $j++?>
        .hn(<?php echo $j;?>, "<?php echo $v['catname'];?>")
        <?php $n=1;if(is_array($v['child_nav'])) foreach($v['child_nav'] AS $child) { ?>
        .sn("<?php echo $n;?>", "<?php echo $child['catname'];?>", "<?php echo $child['url'];?>", {title: "<?php echo $child['catname'];?>", text:""})
        <?php $n++;}unset($n); ?>
        <?php $n++;}unset($n); ?>
        ;
    </script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/richscript/richscript.angelinus.home.js"></script>

</head>
<body class="main">
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
            <div class="logoAc"><h1><a href="<?php echo APP_PATH;?>">豆花妈妈</a></h1></div>
            <div class="gnbTop">
				<span>
                    <a target="_blank" href="http://weibo.com">官方微博</a> ㅣ
                    <a href="/index.php?m=content&c=index&a=lists&catid=45">新闻动态</a>
                     <i class="icon icon-wx"></i>
                    <a href="http://weibo.com" target="_blank"><i class="icon icon-wb"></i></a>
				</span>
                <div class="top-wx fn-hide" style="left: 960px; display: none;">
                    <span class="top-arrow"></span>
                    <span class="wx-qrcode"></span>
                    <h5 style="font-size: 12px;">扫码关注“豆花妈妈”微信</h5>
                </div>
            </div>
            <div class="depthWrap">
                <ul class="depth1 o-navi-html"></ul>
            </div>
        </div>
    </div>
</div>
<!-- //header -->