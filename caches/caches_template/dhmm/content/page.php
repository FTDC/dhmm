<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header_min"); ?>
<!-- //containerWrap -->
<div id="containerWrapAc" class="sub">
    <div class="visWrap" style="display: ;">

        <div class="visCon">
            <div class="titleAc">
                <h3 class="o-navi-visual-menu-name"><span><?php echo $title;?></span></h3>
                <strong class="o-navi-visual-title"><span></span></strong>
                <p class="o-navi-visual-text"><span></span></p>
            </div>
            <div class="cirBtnWrap">
                <div class="cirBtn o-navi-visual-paging-area">
                    <?php $n=1;if(is_array($page_list)) foreach($page_list AS $item) { ?>
                    <a href="<?php echo $item['url'];?>" <?php if($item['catid']==$catid) { ?> class="selected" <?php } ?> target="_self"><span><?php echo $item['catname'];?></span></a>
                    <?php $n++;}unset($n); ?>
                </div>
            </div>
            <div class="btnWrap o-navi-visual-button-area">
                <?php if($previous_page['catname'] != '') { ?><a class="prevAc" href="<?php echo $previous_page['url'];?>" target="_self"> <strong><?php echo $previous_page['catname'];?></strong><span>上一篇</span></a><?php } ?>
                <?php if($next_page['catname'] != '') { ?><a class="nextAc" href="<?php echo $next_page['url'];?>" target="_self"><strong><?php echo $next_page['catname'];?></strong> <span>下一篇</span></a><?php } ?>
            </div>
        </div>
        <?php if(empty($CAT['image'])) { ?>
        <div class="visBg o-navi-visual" style="background-image: url(<?php echo IMG_PATH;?>banner/visual_hn_4.jpg);"></div>
        <?php } else { ?>
        <div class="visBg o-navi-visual" style="background-image: url(<?php echo $CAT['image'];?>);"></div>
        <?php } ?>

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