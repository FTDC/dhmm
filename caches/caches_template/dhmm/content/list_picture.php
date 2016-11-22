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
        <div class="visBg o-navi-visual" style="background-image: url(<?php echo IMG_PATH;?>banner/ph1980.png);"></div>

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
                                    产品列表
                                </h4></li>
                            </ul>
                        </div>
                        <!-- 2015-11-05 커피 탭 추가 -->
                        <div id="menuList" class="list espresso"><!-- 에스프레소 -->
                            <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=5ab4b05e97fd14c3ed386604ee1a9399&action=lists&catid=%24catid&num=25&order=id+DESC&page=%24page\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$pagesize = 25;$page = intval($page) ? intval($page) : 1;if($page<=0){$page=1;}$offset = ($page - 1) * $pagesize;$content_total = $content_tag->count(array('catid'=>$catid,'order'=>'id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));$pages = pages($content_total, $page, $pagesize, $urlrule);$data = $content_tag->lists(array('catid'=>$catid,'order'=>'id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));}?>
                            <ul id="ulMenuList">
                                <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
                                <li>
                                <span class="label"><?php if($n<3) { ?><span class="new"></span><?php } ?></span>
                                    <div>
                                        <a href="javascript:void(0);" onclick="goView(this);return false;" style="cursor:pointer; _cursor:hand;"><img src="<?php echo $r['thumb'];?>" alt="<?php echo $r['title'];?>" width="130" height="145">
                                            <p><?php echo $r['title'];?></p></a>
                                    </div>
                                </li>
                                <?php $n++;}unset($n); ?>
                            </ul>
                        </div>
                        <div class="paging">
                            <div class="left">
                            </div>
					<span class="wrap">
<a href="#" onclick="goPage(1);return false;" class="go prev"><img src="/images/common/btn_page_prev.gif" alt="이전"></a>


<strong>1</strong>
<a href="#" onclick="goPage(2);return false;">2</a>
<a href="#" onclick="goPage(3);return false;">3</a>
<a href="#" onclick="goPage(4);return false;">4</a>
<a href="#" onclick="goPage(5);return false;">5</a>
<a href="#" onclick="goPage(6);return false;">6</a>
<a href="#" onclick="goPage(7);return false;">7</a>
<a href="#" onclick="goPage(8);return false;">8</a>
<a href="#" onclick="goPage(9);return false;">9</a>
<a href="#" onclick="goPage(10);return false;">10</a>


<a href="#" onclick="goPage(11);return false;" class="go next"><img src="/images/common/btn_page_next.gif" alt="다음"></a>

</span>
                            <div class="right">
                            </div>
                        </div>
                        <!-- 리스트 하단 텍스트 영역 -->
                        <div class="comment">
                            <img src="<?php echo IMG_PATH;?>banner/footbanner.jpg" alt="">
                        </div>

                        <div id="popMenuVeiw" class="pop_layer_menu pop_espresso" style="display:"><div id="divMenuView">

                            <div class="inner">
                                <div class="cont">
                                    <div class="left">
                                        <div class="goods">
                                            <img class="img_big" src="http://www.dhmm.com/uploadfile/2016/1121/20161121032650624.png" alt="오르조 라떼 (디카페인) 제품 사진" width="" height="">
                                        </div>
                                        <div class="icon">
                                            <span class="new">NEW</span>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <!-- 제품명 및 설명 -->
                                        <div class="h3">
                                            <h3></h3>
                                            <p class="hotniced">
                                                <img class="hot" src="<?php echo IMG_PATH;?>icon/label_hot.gif" alt="hot">
                                            </p>
                                        </div>
                                        <p class="detail">볶은 보리의 고소함과 달콤한 메이플 향이 어우러져 고소한 맛의 달콤한 100% 디카페인 라떼</p>

                                    </div>
                                    <a href="javascript:void(0);" onclick="goClose();return false;" class="pop_close">关闭</a>
                                </div>
                            </div>
                        </div></div>
                        <!-- 에스프레소 -->
                        <div id="popMenuVeiw" class="pop_layer_menu pop_espresso" style="display:none">
                            <div id="divMenuView"></div>
                        </div>
                    </div>
                </div>

            </div><!-- //content -->
        </div><!-- //content and aside -->
    </div>
</div><!-- //containerWrap -->
<script type="text/javascript">
    function goClose(){
        $("#popMenuVeiw").hide();
    }

    function goView(obj){

        $("#popMenuVeiw h3").html($(obj).find('p').html());
        $("#popMenuVeiw .img_big").attr('src',$(obj).find('img').attr('src'));
        $("#popMenuVeiw").show();
    }
</script>
<?php include template("content","footer"); ?>