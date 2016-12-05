<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header_min"); ?>
<style type="text/css">
    table.list tbody tr td{color: #555555;  line-height: 23px; font-weight: normal; font-size: 14px;}
    table.list tbody tr td a{color: #555555; font-weight: normal; line-height: 23px; font-size: 14px;}
</style>
<!--main-->
<div id="containerWrapAc" class="sub">
    <div class="visWrap">
        <div class="visCon">
            <div class="titleAc">
                <h3 class="o-navi-visual-menu-name"><span><?php echo $title;?></span></h3>
                <strong class="o-navi-visual-title"><span></span></strong>
                <p class="o-navi-visual-text"><span></span></p>
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
                        </p>
                    </div>
                    <div class="section event_list">
                            <table class="list">
                                <thead>
                                <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=6f8030ced4385b869c7b03a744380552&action=lists&catid=%24catid&num=4&order=id+DESC&page=%24page\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$pagesize = 4;$page = intval($page) ? intval($page) : 1;if($page<=0){$page=1;}$offset = ($page - 1) * $pagesize;$content_total = $content_tag->count(array('catid'=>$catid,'order'=>'id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));$pages_dhmm = pages_dhmm($content_total, $page, $pagesize, $urlrule);$data = $content_tag->lists(array('catid'=>$catid,'order'=>'id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));}?>
                                <tr class="thead last">
                                    <th scope="col" class="wStar" style="color: #ffffff; text-align: left; padding-left: 20px;">标题</th>
                                    <th scope="col" class="w90" style="color: #ffffff; width: 160px;">日期</th>
                                </tr>

                                </thead>
                                <!-- 상단고정 -->
                                <tbody>
                                <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
                                <tr>
                                    <td class="subj">
                                        <a href="<?php echo $r['url'];?>" target="_blank" title="<?php echo $r['title'];?>"><?php echo $r['title'];?></a>
                                    </td>
                                    <td><?php echo date('Y-m-d',$r[inputtime]);?></td>
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