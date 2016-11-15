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

    <script>var $G_SERVER_URL = "http://www.angelinus.com";</script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/jquery-1.5.1.min.js" charset="utf-8"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/jquery.easing.min.js" charset="utf-8"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/plugin/jquery.ui.core.js" charset="utf-8"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/plugin/jquery.ui.datepicker.js" charset="utf-8"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/plugin/jquery.ui.datepicker-ko-user.js" charset="utf-8"></script>
    <!--<script src="<?php echo JS_PATH;?>dhmm/library/js/plugin/selectbox/jquery.selectbox.js" charset="utf-8"></script>-->
    <script src="<?php echo JS_PATH;?>dhmm/library/js/plugin/jquery.validate.js" charset="utf-8"></script>
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
    <script src="<?php echo JS_PATH;?>dhmm/library/js/richscript/richscript.angelinus.menu.js" charset="utf-8"></script>
    <script src="<?php echo JS_PATH;?>dhmm/library/js/richscript/richscript.angelinus.home.js"></script>

    <style type="text/css">
        #content{  background-color: #fff; height: auto; position: relative;  width: 100%; margin: auto; padding: 14px 0 0 0;}
        .left-nav{width:210px; height:399px; padding-top:10px}
        .left-nav h1,.left-nav .content li,.left-nav .content li.cur a,.left-nav .bottom{background: url(<?php echo IMG_PATH;?>v9/about_left.png) no-repeat right top}
        .left-nav h1{display:block; height:40px; text-indent:-999px; overflow:hidden}
        .left-nav .content{background: url(<?php echo IMG_PATH;?>v9/about_left_bg.png) repeat-y right top; padding-left:44px}
        .left-nav .content li{background-position: right -102px; display:block; height:30px; line-height:30px; font-size:14px}
        .left-nav .content li a{display:block; height:25px; line-height:25px; padding-left:14px; color:#6f6f6f}
        .left-nav .content li.cur a{background-position: left -72px;  font-weight:700; color:#0d4b9b}
        .left-nav .bottom{background-position: right -168px; height:216px}
        .col-auto{ padding:0 25px}
        .col-auto .title{font-size:25px;padding:5px 0 0;background: url(<?php echo IMG_PATH;?>uline.gif) repeat-x left bottom; margin-bottom:15px}
        .col-auto .content p{ margin-bottom:15px; font-size:14px; line-height:25px; color:#6f6f6f}
    </style>

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
    <a href="#content">豆花妈妈</a>
</div>

<!-- header -->
<div id="headerAc">
    <div class="gnb o-navi-fixed">
        <div class="gnbWrap">
            <div class="logoAc"><h1><a href="/index.asp">豆花妈妈</a></h1></div>
            <div class="gnbTop">
				<span>
                    <a href="http://www.angelinus.com/Member/Login.asp">111</a> ㅣ
                    <a href="https://member.lpoint.com/door/user/login_common.jsp?sid=ANGELINUS">2222</a> ㅣ

					<a href="/Voc/Voc_Write.asp">3333</a> ㅣ
					<a href="http://www.lotteria.com/Campaign/Management/Ethics_report.asp?sitecode=002" target="_blank" title="새창열림">4444</a> ㅣ
					<a href="/About/SpecialityAngelinus.asp" class="bf">555</a>ㅣ
					<a href="http://shop.angelinus.com/" title="새창열림" target="_blank" class="bf">6666</a>
				</span>

                <!-- 언어선택 -->
                <div class="langWrap" style="display:none;">
                    <a href="#" class="langOpen">Language</a>
                    <div class="langList">
                        <ul>
                            <li><a href="/index.asp">한국어</a></li>
                            <li><a href="/eng/index.asp">English</a></li>
                            <!-- <li><a href="/cn/index.asp">中國語</a></li>-->
                        </ul>
                    </div>
                </div>
                <!-- //언어선택 -->
                <!-- 회원 등급안내 레이어팝업 -->
                <!-- 2016-03-31 추가 및 수정 -->
                <div class="popup_grade" style="display:none;">
                    <div>
                        <h2><img src="/Images/main/img_tit_popup_level.jpg" alt="L.POINT 회원 등급 안내"></h2>
                        <ul class="grade_info">
                            <li><p>33333</p></li>
                            <li><p>L.POINT 취소, 환불 및 사용한 건은 반영되지 않습니다.</p></li>
                            <li><p>회원 등급은 1년간 유지 됩니다.</p></li>
                            <li><p>등급 산정은 매년 3월 1일부터 적용 됩니다.</p>
                                <p class="bgnone">ex) 15년 실적 기준 → 16년 3월 1일 ~ 17년 2월 28일 등급 적용</p></li>
                            <li><p>등급별 혜택</p>
                                <table summary="L.POINT 등급별 혜택을 안내합니다." class="grade_benefit">
                                    <caption>L.POINT 등급별 혜택</caption>
                                    <colgroup>
                                        <col width="50%">
                                        <col width="*">
                                    </colgroup>
                                    <thead>
                                    <tr>
                                        <th scope="col">구분</th>
                                        <th scrop="col">헤택</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>우수회원</td>
                                        <td>결제금액의 0.5% 적립</td>
                                    </tr>
                                    <tr>
                                        <td>일반회원</td>
                                        <td>결제금액의 0.3% 적립</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </li>
                        </ul>
                    </div>
                    <a href="#" class="close_popup_grade"><img src="/Images/main/btn_close_popup.gif"></a>
                </div>
                <!-- // 2016-03-31 추가 및 수정 -->
                <!-- // 회원 등급안내 레이어팝업 -->
            </div>
            <div class="depthWrap">
                <ul class="depth1 o-navi-html"></ul>
            </div>
        </div>
    </div>
</div>
<!-- //header -->