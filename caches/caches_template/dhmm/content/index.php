<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header"); ?>
<!--main-->
<!-- //containerWrap -->
<div id="containerWrapAc">
    <div class="visWrap">
        <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=e06c5ff28a54b5dc5e0d118719babcfb&sql=SELECT+setting+FROM+dh_poster+WHERE+spaceid+%3D+11+AND+type%3D%27images%27+AND+disabled%3D0+ORDER+BY+listorder+ASC&num=4&return=ad_list\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT setting FROM dh_poster WHERE spaceid = 11 AND type='images' AND disabled=0 ORDER BY listorder ASC LIMIT 4");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$ad_list = $a;unset($a);?>
        <?php $n=1;if(is_array($ad_list)) foreach($ad_list AS $r) { ?>
        <?php $narray = json_decode($r['setting'],1);?>
        <?php var_dump($narray);?>
        <p class="visBg" data-theme="bright" style="background-image:url(<?php echo $narray['1']['imageurl'];?>);">666</p>
        <?php $n++;}unset($n); ?>
        <div class="visCon">

            <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
            <p class="titleAc">
                <a href="<?php echo $r['url'];?>"><img src="<?php echo $r['thumb'];?>" alt="<?php echo str_cut($r['title'],30);?>"/>333</a>
            </p>
            <?php $n++;}unset($n); ?>

            <div class="cirBtnWrap">
                <div class="cirBtn o-visual-paging"></div>
            </div>
        </div>
    </div>
    <!-- content and aside -->
    <div id="containerAc">
        <!-- content area -->
        <div class="conTake">
            <div class="takeText">
                <strong><img src="<?php echo IMG_PATH;?>text.png"/> </strong>
                <p>健康美味食材.全新味觉享受</p>
            </div>
            <div class="takeContent">
                <div class="takeStore" style="background-image:url('<?php echo IMG_PATH;?>banner/index_5.jpg')">
                    <a href="http://www.angelinus.com/Board/Board.asp?h_title=전체&Timestamp=2015111020151110&BoardIdx=1&Mode=VIEW&Page=1&PageSize=10&BlockSize=10&Idx=297&SearchCategory=0&SearchType=&SearchText=">
                            <span class="desc">
                                <span></span>
                                <strong></strong>
                            </span>
                    </a>
                </div>

                <div class="takeProduct" style="background-image:url('<?php echo IMG_PATH;?>banner/index_1.jpg')">
                    <a href="/Menu/HotProduct_List.asp">
                            <span class="desc">
                                <i> </i>
                                <strong></strong>
                            </span>
                    </a>
                </div>

                <div class="takeTv" style="background-image:url('<?php echo IMG_PATH;?>banner/index_2.jpg')">
                    <a href="/About/VideoAdvertise_List.asp">
                            <span class="desc">
                                <i></i>
                                <strong></strong>
                            </span>
                    </a>
                </div>

                <div class="takeMall" style="background-image:url('<?php echo IMG_PATH;?>banner/index_6.jpg')">
                    <a href="http://shop.angelinus.com" target="_blank" title="새창 열기">
                            <span class="desc">
                                <i></i>
                                <strong> </strong>
                            </span>
                    </a>
                </div>

                <div class="takeWithAc" style="background-image:url('<?php echo IMG_PATH;?>banner/index_3.jpg')">
                    <a href="/WholeBean/perfection.asp">
                            <span class="desc">
                                <i></i>
                                <strong></strong>
                            </span>
                    </a>
                </div>

                <div class="takeAcademy" style="background-image:url('<?php echo IMG_PATH;?>banner/index_4.jpg')">
                    <a href="http://www.angelinus.com/Event/Event_View.asp?Mode=VIEW&EventType=Event&Idx=361&SearchEventGubun=0">
                            <span class="desc">
                                <i></i>
                                <strong></strong>
                            </span>
                    </a>
                </div>


                <div class="takeNews">
                    <table>
                        <thead>
                        <tr>
                            <th class="fir"><strong>NEWS &amp; NOTICE</strong></th>
                            <th>
                                <a target="_blank" href="<?php echo APP_PATH;?>index.php?m=content&c=index&a=lists&catid=45">+ MORE</a>
                            </th>
                        </tr>
                        </thead>
                        <tbody>

                        <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=8adbf12887b6a04a90618d697e2ba985&action=lists&catid=45&num=4&order=id+DESC&return=info\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$info = $content_tag->lists(array('catid'=>'45','order'=>'id DESC','limit'=>'4',));}?>

                        <?php $n=1;if(is_array($info)) foreach($info AS $v) { ?>
                        <!--<li>·<a href="<?php echo $v['url'];?>" target="_blank" title="<?php echo $v['title'];?>" <?php echo title_style($v[style]);?>><?php echo str_cut($v['title'],40);?></a>  </li>-->
                        <tr>
                            <td class="fir">
                                <a href="<?php echo $v['url'];?>" target="_blank" title="<?php echo $v['title'];?>">・ <?php echo str_cut($v['title'],70);?></a>
                            </td>
                            <td>2016.10.11</td>
                        </tr>

                        <?php $n++;}unset($n); ?>
                        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>

                        </tbody>
                    </table>
                </div>

                <script type="text/javascript" language="javascript">
                    (function (factory) {
                        if (typeof define === 'function' && define.amd) {
                            define(['jquery'], factory)
                        } else {
                            factory(jQuery)
                        }
                    }(function ($) {
                        var pluses = /\+/g;

                        function raw(s) {
                            return s
                        }

                        function decoded(s) {
                            return decodeURIComponent(s.replace(pluses, ' '))
                        }

                        function converted(s) {
                            if (s.indexOf('"') === 0) {
                                s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\')
                            }
                            try {
                                return config.json ? JSON.parse(s) : s
                            } catch (er) {
                            }
                        }

                        var config = $.cookie = function (key, value, options) {
                            if (value !== undefined) {
                                options = $.extend({}, config.defaults, options);
                                if (typeof options.expires === 'number') {
                                    var days = options.expires, t = options.expires = new Date();
                                    t.setDate(t.getDate() + days)
                                }
                                value = config.json ? JSON.stringify(value) : String(value);
                                return (document.cookie = [config.raw ? key : encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''))
                            }
                            var decode = config.raw ? raw : decoded;
                            var cookies = document.cookie.split('; ');
                            var result = key ? undefined : {};
                            for (var i = 0, l = cookies.length; i < l; i++) {
                                var parts = cookies[i].split('=');
                                var name = decode(parts.shift());
                                var cookie = decode(parts.join('='));
                                if (key && key === name) {
                                    result = converted(cookie);
                                    break
                                }
                                if (!key) {
                                    result[name] = converted(cookie)
                                }
                            }
                            return result
                        };
                        config.defaults = {};
                        $.removeCookie = function (key, options) {
                            if ($.cookie(key) !== undefined) {
                                $.cookie(key, '', $.extend({}, options, {expires: -1}));
                                return true
                            }
                            return false
                        }
                    }));

                    $.fn.popupzoneSlide = function () {
                        return this.each(function () {
                            var dur = 3000,
                                    isAuto = true,
                                    timer,
                                    index = 0,
                                    $container = $(this).find("ul"),
                                    $item = $container.find("> li"),
                                    $btns = $item.find("> span > a"),
                                    max = $item.length;

                            function showBanner(number) {
                                $item.removeClass("on");
                                $item.eq(number).addClass("on");
                                index = number;
                                /*if(isAuto == true) {
                                 timer = setTimeout(function() {
                                 slide("right");
                                 }, dur);
                                 }*/
                            }

                            /*function slide(dir) {
                             if(dir =="left") {
                             var i = index - 1;
                             if(i < 0) {
                             i = max - 1;
                             }
                             } else if(dir =="right") {
                             var i = index + 1;
                             if(i == max) {
                             i = 0;
                             }
                             }
                             showBanner(i);
                             }*/
                            $btns.click(function () {
                                clearTimeout(timer);
                                var t = $btns.index($(this)[0]);
                                showBanner(t);
                                return false;
                            });

                            showBanner(0);
                        });
                    };

                    $.fn.popupzone = function () {
                        return this.each(function () {
                            var $popup = $(this),
                                    $closeBtn = $popup.find("div.ckeck > a"),
                                    $check = $popup.find("input#close"),
                                    $banner = $popup.find("> div > div");

                            function open() {
                                $popup.animate({
                                    "height": "214px"
                                }, {
                                    queue: false,
                                    duration: 300
                                });
                            }

                            function close() {
                                if ($check.is(":checked")) {
                                    $.cookie("popupzone", "disabled", {expires: 1, path: "/"});
                                }
                                $popup.animate({
                                    "height": "0px"
                                }, {
                                    queue: false,
                                    duration: 300,
                                    complete: function () {
                                        $popup.remove();
                                    }
                                });
                            }

                            $closeBtn.bind("click", function () {
                                close();
                                return false;
                            });
                            var pzCoockie = $.cookie("popupzone");
                            if (pzCoockie == "disabled") {
                            } else {
                                open();
                                $banner.popupzoneSlide();
                            }
                        });
                    };
                    $(".popup").popupzone();
                </script>
            </div><!-- //content -->
        </div><!-- //content and aside -->
    </div>
</div>
<!-- //containerWrap -->
<?php include template("content","footer"); ?>