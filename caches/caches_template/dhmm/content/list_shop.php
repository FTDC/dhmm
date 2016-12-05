<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header_min"); ?>
<!--main-->
<div id="containerWrapAc" class="sub">
    <div class="visWrap" style="display: ;">

        <div class="visCon">
            <div class="titleAc">
                <h3 class="o-navi-visual-menu-name"><span>Taro Dumpling</span></h3>
                <strong class="o-navi-visual-title"><span><?php echo $CAT['catname'];?></span></strong>
                <p class="o-navi-visual-text"><span> The dessert tastes real good</span></p>
            </div>
            <div class="cirBtnWrap">
                <div class="cirBtn o-navi-visual-paging-area">
                    <?php $n=1;if(is_array($page_list)) foreach($page_list AS $item) { ?>
                    <a href="<?php echo $item['url'];?>" <?php if($item['catid']==$catid) { ?> class="selected" <?php } ?> target="_self"><span><?php echo $item['catname'];?></span></a>
                    <?php $n++;}unset($n); ?>
                </div>
            </div>
            <div class="btnWrap o-navi-visual-button-area">
                <?php if($previous_page['catname'] != '') { ?><a class="prevAc" href="<?php echo $previous_page['url'];?>" target="_self">
                <strong><?php echo $previous_page['catname'];?></strong><span>LAST</span></a><?php } ?>
                <?php if($next_page['catname'] != '') { ?><a class="nextAc" href="<?php echo $next_page['url'];?>" target="_self"><strong><?php echo $next_page['catname'];?></strong>
                <span>NEXT</span></a><?php } ?>
            </div>
        </div>
        <?php if(empty($CAT['image'])) { ?>
        <div class="visBg o-navi-visual" style="background-image: url(<?php echo IMG_PATH;?>banner/ph1980.png);"></div>
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
                <div id="hn" class="hn1 sn2">
                    <div class="section memu_list">
                        <div class="tab_basic">
                            <ul class="clfix">
                                <li><h4>
                                    店铺列表
                                </h4></li>
                            </ul>
                        </div>
                        <!-- 2015-11-05 커피 탭 추가 -->
                        <div id="menuList" class="list espresso"><!-- 에스프레소 -->
                            <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=5ab4b05e97fd14c3ed386604ee1a9399&action=lists&catid=%24catid&num=25&order=id+DESC&page=%24page\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$pagesize = 25;$page = intval($page) ? intval($page) : 1;if($page<=0){$page=1;}$offset = ($page - 1) * $pagesize;$content_total = $content_tag->count(array('catid'=>$catid,'order'=>'id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));$pages_dhmm = pages_dhmm($content_total, $page, $pagesize, $urlrule);$data = $content_tag->lists(array('catid'=>$catid,'order'=>'id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));}?>
                            <ul id="ulMenuList">
                                <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
                                <li>
                                    <span class="label"><?php if($n<3) { ?><span class="new"></span><?php } ?></span>
                                    <div>
                                        <a href="javascript:void(0);" onclick="goView(this);return false;" style="cursor:pointer; _cursor:hand;">
                                            <img src="<?php echo $r['thumb'];?>" alt="<?php echo $r['title'];?>" width="130" height="145">
                                            <p><?php echo $r['title'];?></p>
                                            <input type="hidden" value="<?php echo $r['description'];?>">
                                        </a>
                                    </div>
                                </li>
                                <?php $n++;}unset($n); ?>
                            </ul>
                        </div>
                        <!-- paging -->
                        <div class="paging"><?php echo $pages_dhmm;?></div>
                        <!-- //paging -->
                        <!--<div class="comment">-->
                            <!--<img src="<?php echo IMG_PATH;?>banner/footbanner.jpg" alt="">-->
                        <!--</div>-->
                        <div id="popMenuVeiw" class="pop_layer_menu pop_espresso" style="display:none;">
                            <div id="divMenuView">

                                <div class="inner">
                                    <div class="cont" style="padding: 13px 40px; min-height: 343px;">
                                        <div class="left">
                                            <div class="goods">
                                                <img class="img_big" src="" alt="" width="341" height="302">
                                            </div>
                                            <!--<div class="icon">-->
                                                <!--<span class="new">NEW</span>-->
                                            <!--</div>-->
                                        </div>
                                        <div class="right">
                                            <!-- 제품명 및 설명 -->
                                            <p class="detail"></p>
                                        </div>
                                        <a href="#" onclick="goClose();return false;" class="pop_close">关闭</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- 에스프레소 -->
                    </div>
                </div>

            </div><!-- //content -->
        </div><!-- //content and aside -->
    </div>
</div><!-- //containerWrap -->
<script type="text/javascript">
    function goClose() {
        $("#popMenuVeiw").hide();
    }

    function goView(obj) {
//        $("#popMenuVeiw h3").html($(obj).find('p').html());
        $("#popMenuVeiw .img_big").attr('src', $(obj).find('img').attr('src'));
        $("#popMenuVeiw .detail").html($(obj).find('input').val());
        $("#popMenuVeiw").show();
    }
</script>
<?php include template("content","footer"); ?>