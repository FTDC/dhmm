<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header_min"); ?>
<div id="containerWrapAc" class="sub">
    <div class="visWrap">
        <div class="visCon">
            <div class="titleAc">
                <h3 class="o-navi-visual-menu-name"><span>엔제리너스 카드 앱 등록 /조회</span></h3>
                <strong class="o-navi-visual-title"><span>엔제리너스커피의 카드등록 /조회이용안내입니다.</span></strong>
                <p class="o-navi-visual-text"><span>엔제리너스 카드 앱 이용 방법이 궁금하시다구요?</span></p>
            </div>
            <div class="cirBtnWrap">
                <div class="cirBtn o-navi-visual-paging-area"><a href="/Card/Card.asp" target="_self"><span>엔제리너스 카드란</span></a><a href="/Card/Card_App.asp" target="_self"><span>엔제리너스 카드 앱</span></a><a class="selected" href="/Card/Card_Register.asp" target="_self"><span>엔제리너스 카드 앱 등록 /조회</span></a><a href="/Card/Card_qna.asp" target="_self"><span>카드 Q&amp;A 모아보기</span></a><a href="/Card/Estemp.asp" target="_self"><span>엔젤 E - 프로모션 스탬프</span></a></div>
            </div>
            <div class="btnWrap o-navi-visual-button-area"><a class="prevAc" href="/Card/Card_App.asp" target="_self">	<strong>CARD</strong>	<span>엔제리너스 카드 앱</span></a><a class="nextAc" href="/Card/Card_qna.asp" target="_self">	<strong>CARD</strong>	<span>카드 Q&amp;A 모아보기</span></a></div>
        </div>
        <div class="visBg o-navi-visual" style="background-image: url(/ImagesNew/gnb/visual/visual_hn_2.jpg);"></div>
    </div>
    <div class="lnbWrap">
        <div class="lnbAc o-navi-tab o-navi-tab-fixed"></div>
    </div>
    <!-- content and aside -->
    <div class="conWrap">
        <div id="containerAc">

            <!-- content area -->
            <div id="content">
                <div id="hn" class="hn2 sn3">
                    <div class="section ecard_register">
                        <div id="wrapeCard01">
                            <h1><?php echo $title;?></h1>
                            <div class="information">
                                <?php echo $content;?>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- content area -->
            </div><!-- //content -->
        </div><!-- //content and aside -->
    </div>
</div><!-- //containerWrap -->

<?php include template("content","footer"); ?>