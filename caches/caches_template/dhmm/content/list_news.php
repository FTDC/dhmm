<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header_min"); ?>
<!--main-->
<div class="main" style="display: none;">
    <div class="col-left">
        <div class="crumbs"><a href="<?php echo siteurl($siteid);?>">首页</a><span> > </span><?php echo catpos($catid);?> 列表</div>
        <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=5ab4b05e97fd14c3ed386604ee1a9399&action=lists&catid=%24catid&num=25&order=id+DESC&page=%24page\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$pagesize = 25;$page = intval($page) ? intval($page) : 1;if($page<=0){$page=1;}$offset = ($page - 1) * $pagesize;$content_total = $content_tag->count(array('catid'=>$catid,'order'=>'id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));$pages = pages($content_total, $page, $pagesize, $urlrule);$data = $content_tag->lists(array('catid'=>$catid,'order'=>'id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));}?>
        <ul class="list lh24 f14">
            <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
            <li>
                <span class="rt"><?php echo date('Y-m-d H:i:s',$r[inputtime]);?></span>·<a href="<?php echo $r['url'];?>" target="_blank" <?php echo title_style($r[style]);?>><?php echo $r['title'];?></a>
            </li>
            <?php if($n%5==0) { ?>
            <li class="bk20 hr"></li>
            <?php } ?>
            <?php $n++;}unset($n); ?>
        </ul>
        <div id="pages" class="text-c"><?php echo $pages;?></div>
        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
    </div>
</div>
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
                                <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=5ab4b05e97fd14c3ed386604ee1a9399&action=lists&catid=%24catid&num=25&order=id+DESC&page=%24page\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$pagesize = 25;$page = intval($page) ? intval($page) : 1;if($page<=0){$page=1;}$offset = ($page - 1) * $pagesize;$content_total = $content_tag->count(array('catid'=>$catid,'order'=>'id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));$pages = pages($content_total, $page, $pagesize, $urlrule);$data = $content_tag->lists(array('catid'=>$catid,'order'=>'id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));}?>
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
                            <div id="pages" class="text-c"><?php echo $pages;?></div>

                            <div class="paging">
                                <div class="left"></div>
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
                                <div class="right"></div>
                            </div>
                            <!-- //paging -->

                    </div>
                </div><!-- 임시 2013-07-11 -->

                <div id="debug" style="width:0;height:0;">
                    <iframe id="ifrmProc" name="ifrmProc" width="0" height="0" title="빈프레임"></iframe>
                </div>
            </div><!-- //content -->
        </div><!-- //content and aside -->
    </div>
</div>


<?php include template("content","footer"); ?>