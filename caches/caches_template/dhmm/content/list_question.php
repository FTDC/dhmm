<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header_min"); ?>
<style type="text/css">
    table.list tbody tr td{color: #555555; font-family: microsoft yahei;font-weight: normal; line-height: 30px; font-size: 18px;}
</style>
<!--main-->
<div id="containerWrapAc" class="sub">
    <div class="visWrap">
        <div class="visCon">
            <div class="titleAc">
                <h3 class="o-navi-visual-menu-name"><span><?php echo $CAT['catname'];?></span></h3>
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
                <?php if($previous_page['catname'] != '') { ?><a class="prevAc" href="<?php echo $previous_page['url'];?>" target="_self">
                <strong><?php echo $previous_page['catname'];?></strong><span>LAST</span></a><?php } ?>
                <?php if($next_page['catname'] != '') { ?><a class="nextAc" href="<?php echo $next_page['url'];?>" target="_self"><strong><?php echo $next_page['catname'];?></strong>
                <span>NEXT</span></a><?php } ?>
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
            <div id="content" style="width: 690px;">
                <div id="hn" class="hn5 sn6">
                    <div class="title">
                        <h3><?php echo catpos($catid);?></h3>
                    </div>
                    <div class="section event_list">
                        <table class="list">
                            <thead>
                            <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=e5701e930ef5d2c678d16093354d37e3&action=lists&catid=%24catid&num=25&order=listorder+DESC&moreinfo=1&page=%24page\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$pagesize = 25;$page = intval($page) ? intval($page) : 1;if($page<=0){$page=1;}$offset = ($page - 1) * $pagesize;$content_total = $content_tag->count(array('catid'=>$catid,'order'=>'listorder DESC','moreinfo'=>'1','limit'=>$offset.",".$pagesize,'action'=>'lists',));$pages_dhmm = pages_dhmm($content_total, $page, $pagesize, $urlrule);$data = $content_tag->lists(array('catid'=>$catid,'order'=>'listorder DESC','moreinfo'=>'1','limit'=>$offset.",".$pagesize,'action'=>'lists',));}?>
                            <tr class="thead last">
                                <th scope="col" class="wStar" style="color: #ffffff; text-align: left; padding-left: 20px; width: 50px; font-size: 18px;">序号</th>
                                <th scope="col" class="w90" style="color: #ffffff; width: 500px; float: left; text-align: left; margin-left: 100px; line-height: 32px; font-size: 18px;">问答</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
                            <tr bgcolor="#fefaf4">
                                <td class="subj" style="padding-left: 30px;"><?php echo $n;?></td>
                                <td style="text-align:left;"><?php echo $r['title'];?>
                                </td>
                            </tr>
                            <tr bgcolor="#f5f0ea">
                                <td colspan="2" class="subj" style="padding-left: 70px;"><?php echo $r['content'];?></td>
                            </tr>
                            <?php $n++;}unset($n); ?>
                            </tbody>
                        </table>
                        <!-- paging -->
                      <div class="paging"><?php echo $pages_dhmm;?></div>
                        <!-- //paging -->

                    </div>
                </div><!-- 임시 2013-07-11 -->
            </div><!-- //content -->
        </div><!-- //content and aside -->
    </div>
</div>


<?php include template("content","footer"); ?>