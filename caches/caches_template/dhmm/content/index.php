<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header"); ?>
<!--main-->
<!-- //containerWrap -->
<div id="containerWrapAc">
    <div class="visWrap">

        <p class="visBg" data-theme="bright" style="background-image:url(/Data/MainTop/69/BannerImage.jpg);">ONE BITE MORE HAPPINESS</p>

        <p class="visBg" data-theme="bright" style="background-image:url(/Data/MainTop/68/BannerImage.jpg);">Let&#039;s Autumn with angels</p>

        <p class="visBg" data-theme="bright" style="background-image:url(/Data/MainTop/60/BannerImage.jpg);">아메리치노</p>

        <p class="visBg" data-theme="dark" style="background-image:url(/Data/MainTop/66/BannerImage.jpg);">L.POINT / L.pay 간편함 그이상의 결제 엘페이</p>


        <div class="visCon">

            <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=132335f99fcf4a0ddd78b4f4e1cd12b9&action=position&posid=1&order=listorder+DESC&thumb=1&num=5\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'position')) {$data = $content_tag->position(array('posid'=>'1','order'=>'listorder DESC','thumb'=>'1','limit'=>'5',));}?>
            <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
            <p class="titleAc">
                <a href="<?php echo $r['url'];?>"><img src="<?php echo thumb($r['thumb'],310,260);?>" alt="<?php echo str_cut($r['title'],30);?>"/></a>
            </p>
            <?php $n++;}unset($n); ?>


            <div class="cirBtnWrap">
                <div class="cirBtn o-visual-paging"></div>
            </div>
            <!--div class='layer_banner' style='z-index:2; position:absolute; top:130px; left:0;'>
                <img src='/Popup/images/20150709_bnr.jpg' alt='엔제리너스 15주년 이벤트' useMap="#Map"/>
                <map name="Map" id="Map">

                    <area shape="rect" coords="17,156,367,478" href="http://www.angelinus.com/Event/Event_View.asp?Mode=VIEW&EventType=Event&Idx=316&SearchEventGubun=0" target="_blank" alt="스탬프 쿠폰 아메리치노 5잔 구매시 1잔 증정 이벤트" />
                    <area shape="rect" coords="383,156,733,478" href="http://www.angelinus.com/Event/Event_View.asp?Mode=VIEW&EventType=Event&Idx=319&SearchEventGubun=0" target="_blank" alt="한정판 기프트백을 만나보세요" />
                    <area shape="rect" coords="749,156,1099,478" href="http://www.angelinus.com/Event/Event_View.asp?Mode=VIEW&EventType=Event&Idx=317&SearchEventGubun=0" target="_blank" alt="10,000원 이상 구매시 에코머그 증정 이벤트" />

                    <area shape="rect" coords="559,501,821,550" href="https://www.facebook.com/angelinustime/photos/a.285822351493240.67154.282560198486122/911276102281192/?type=1" target="_blank" alt="페이스북 이벤트 참여하기" />
                    <area shape="rect" coords="837,501,1099,550" href="http://www.ticketmonster.co.kr/fromadmin/199165181" target="_blank" alt="브랜드런칭 15주년 카드 이벤트 참여하기" />

                    <area shape="rect" coords="1084,10,1106,31" href="#" target="_blank" onClick='javascript:bannerClose();return false;' alt="이벤트 배너 닫기 버튼" />
                </map>
                <script>
                    function bannerClose()
                    {
                        $( ".layer_banner" ).click(function() {
                          $( this ).css({display: 'none'});

                        });
                    }
                </script>
            </div-->
        </div>
    </div>
    <!-- content and aside -->
    <div id="containerAc" >
        <!-- content area -->
        <div class="conShare" style=" display: none;"><!-- class 추가 facebook - fb, twitter - twi, kakao - ka, Instagram - insta -->
            <div class="calendar">
                <em class="day">14</em>
                <em class="year">2016 .</em><em class="month">&nbsp;October</em>
                <i>ANGELINUS SHARE</i>
            </div>
            <!-- facebook -->
            <div class="fbLike">
                <a class="bg richscript-preload o-sns-counter-facebook" href="https://www.facebook.com/angelinustime" target="_blank" title="새창 열기">
                    <strong class="ready">Angel-in-us Coffee</strong>
                    <span>페이스북 바로가기</span>
                </a>
                <a class="close" href="#">close</a>
            </div>
            <!-- facebook end-->
            <!-- twitter -->
            <div class="twiLike">
                <a class="bg richscript-preload o-sns-counter-twitter" href="https://twitter.com/Angelinustime" target="_blank" title="새창 열기">
                    <strong class="ready">Angel-in-us Coffee</strong>
                    <span>트위터 바로가기</span>
                </a>
                <a class="close" href="#">close</a>
            </div>
            <!-- twitter end-->
            <!-- kakao -->
            <div class="kaLike richscript-preload">
                <a class="close" href="#">close</a>
            </div>
            <!-- kakao end-->
            <!-- Instagram -->
            <div class="instaLike richscript-preload">
                <a class="close" href="#">close</a>
            </div>
            <!-- Instagram end-->
            <div class="snsAc">
                <a class="facebook" href="https://www.facebook.com/angelinustime">Facebook</a>
                <a class="twitter" href="https://twitter.com/Angelinustime">Twitter</a>
                <a class="kakao" href="#">Kakao talk</a>
                <a class="Instagram" href="#">Instagram</a>
            </div>

            <div class="newProduct fbContentsEmpty twiContentsEmpty o-sns-contents-empty">
                <a href="http://www.angelinus.com/About/specialty.asp" class="banner"><img src="/Data/MainMid/81/BannerImage.jpg" alt="엔제리너스, 한국 커피 프랜차이즈 최초로 &amp;#039;국제 스페셜티 커피 폅회&amp;#039; 가입"/></a><a href="http://www.angelinus.com/Event/Event_View.asp?Mode=VIEW&EventType=Event&Idx=427&SearchEventGubun=0" class="banner"><img src="/Data/MainMid/75/BannerImage.jpg" alt="http://www.angelinus.com/Event/Event_View.asp?Mode=VIEW&amp;amp;EventType=Event&amp;amp;Idx=427&amp;amp;SearchEventGubun=0"/></a><a href="http://www.angelinus.com/Event/Event_View.asp?Mode=VIEW&EventType=Event&Idx=434&SearchEventGubun=0" class="banner"><img src="/Data/MainMid/78/BannerImage.jpg" alt="엔제리너스 카드 2만원 이상 충전하면 영수증 음료 쿠폰을 드립니다."/></a><a href="http://www.angelinus.com/Event/Event_View.asp?Mode=VIEW&EventType=Event&Idx=433&SearchEventGubun=0" class="banner"><img src="/Data/MainMid/80/BannerImage.jpg" alt="열두가지 맛있는 행복"/></a><a href="http://www.angelinus.com/Event/Event_View.asp?Mode=VIEW&EventType=Event&Idx=435&SearchEventGubun=0" class="banner"><img src="/Data/MainMid/79/BannerImage.jpg" alt="엔제리너스 카드 2만원 이상 충전하면 영수증 음료 쿠폰을 드립니다."/></a>
                <div class="cirBtn o-banner-paging"></div>
            </div>
            <!-- facebook -->
            <div class="fbCon fbContentsLoading o-sns-contents-facebook"></div>
            <!-- facebook end-->
            <!-- twitter -->
            <div class="twiCon twiContentsLoading o-sns-contents-twitter"></div>
            <!-- twitter end-->
        </div>
        <div class="conTake">
            <div class="takeText">
                <strong>Take Your Time Angel-in-us</strong>
                <p>당신을 미소 짓게 하는 천사의 커피</p>
            </div>
            <div class="takeContent">
                <div class="takeStore" style="background-image:url('/Data/MainLink/1/BannerImage.jpg')">
                    <a href="http://www.angelinus.com/Board/Board.asp?h_title=전체&Timestamp=2015111020151110&BoardIdx=1&Mode=VIEW&Page=1&PageSize=10&BlockSize=10&Idx=297&SearchCategory=0&SearchType=&SearchText=">
                            <span class="desc">
                                <span>가맹점모집</span>
                                <strong>성공을 위한 수호천사가 되겠습니다.</strong>
                            </span>
                    </a>
                </div>

                <div class="takeProduct" style="background-image:url('/Data/MainLink/2/BannerImage.jpg')">
                    <a href="/Menu/HotProduct_List.asp">
                            <span class="desc">
                                <i>NEW MENU</i>
                                <strong>엔제리너스의 새로운 소식</strong>
                            </span>
                    </a>
                </div>

                <div class="takeTv" style="background-image:url('/Data/MainLink/3/BannerImage.jpg')">
                    <a href="/About/VideoAdvertise_List.asp">
                            <span class="desc">
                                <i>TV/CF</i>
                                <strong>광고 속에서 엔제리너스 커피를 만나보세요.</strong>
                            </span>
                    </a>
                </div>

                <div class="takeMall" style="background-image:url('/Data/MainLink/4/BannerImage.jpg')">
                    <a href="http://shop.angelinus.com" target="_blank" title="새창 열기">
                            <span class="desc">
                                <i>ANGEL’S MALL</i>
                                <strong> </strong>
                            </span>
                    </a>
                </div>

                <div class="takeWithAc" style="background-image:url('/Data/MainLink/5/BannerImage.jpg')">
                    <a href="/WholeBean/perfection.asp">
                            <span class="desc">
                                <i>WITH ANGELS</i>
                                <strong>커피의 맛과 향이 살아있는 엔제리너스<br/> 커피의 비밀</strong>
                            </span>
                    </a>
                </div>

                <div class="takeAcademy" style="background-image:url('/Data/MainLink/6/BannerImage.jpg')">
                    <a href="http://www.angelinus.com/Event/Event_View.asp?Mode=VIEW&EventType=Event&Idx=361&SearchEventGubun=0">
                            <span class="desc">
                                <i>Q-Grader Coffee Class</i>
                                <strong>큐그레이더와 함께하는 커피클래스!</strong>
                            </span>
                    </a>
                </div>


                <div class="takeNews">
                    <table>
                        <thead>
                        <tr>
                            <th class="fir"><strong>NEWS &amp; NOTICE</strong></th>
                            <th><a target="_blank" href="<?php echo APP_PATH;?>index.php?m=content&c=index&a=lists&catid=45">+ MORE</a></th>
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
                            /*	$("span.baPrev a", this).click(function () {
                             clearTimeout(timer);
                             slide("left");
                             return false;
                             });

                             $("span.baNext a", this).click(function () {
                             clearTimeout(timer);
                             slide("right");
                             return false;
                             });
                             $("span.popBtn a", this).click(function() {
                             if(isAuto == true) {
                             $(this).text("자동재생시작").addClass("on");
                             clearTimeout(timer);
                             isAuto = false;
                             return false;
                             } else {
                             $(this).text("자동재생정지").removeClass("on");
                             timer = setTimeout(function() {
                             slide("right");
                             }, dur);
                             isAuto = true;
                             return false;
                             }

                             });*/
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


                <div id="debug" style="width:0;height:0;">
                    <iframe id="ifrmProc" name="ifrmProc" width="0" height="0" title="빈프레임"></iframe>
                </div>
            </div><!-- //content -->
        </div><!-- //content and aside -->
    </div>
</div><!-- //containerWrap -->
<?php include template("content","footer"); ?>