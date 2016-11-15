<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header_page"); ?>
<!-- //containerWrap -->
<div id="containerWrapAc" class="sub">
    <div class="visWrap">
        <div class="visCon">
            <div class="titleAc">
                <h3 class="o-navi-visual-menu-name"></h3>
                <strong class="o-navi-visual-title"></strong>
                <p class="o-navi-visual-text"></p>
            </div>
            <div class="cirBtnWrap">
                <div class="cirBtn o-navi-visual-paging-area"></div>
            </div>
            <div class="btnWrap o-navi-visual-button-area"></div>
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
                <!-- content area -->
                <?php echo $content;?>
                <!-- //content area -->

            </div><!-- //content -->
        </div><!-- //content and aside -->
    </div>
</div><!-- //containerWrap -->
<?php include template("content","footer"); ?>