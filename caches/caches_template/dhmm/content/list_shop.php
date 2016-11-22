<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header_min"); ?>
<!--main-->
<div id="containerWrapAc" class="sub">
	<div class="visWrap" style="display: ;">

		<div class="visCon">
			<div class="titleAc">
				<h3 class="o-navi-visual-menu-name"><span>Taro Dumpling</span></h3>
				<strong class="o-navi-visual-title"><span>手工芋圆</span></strong>
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
				<strong><?php echo $previous_page['catname'];?></strong><span>上一篇</span></a><?php } ?>
				<?php if($next_page['catname'] != '') { ?><a class="nextAc" href="<?php echo $next_page['url'];?>" target="_self"><strong><?php echo $next_page['catname'];?></strong>
				<span>下一篇</span></a><?php } ?>
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
					<!-- 20110630 수정 : 디저트 메뉴 bg 세분화로 인해 분기 추가 -->

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
										<a href="#" onclick="goView(351);openFocus(this);return false;" style="cursor:pointer; _cursor:hand;"><img src="<?php echo $r['thumb'];?>" alt="<?php echo $r['title'];?>" width="130" height="145">
											<p><?php echo $r['title'];?></p></a>
									</div>

								</li>
								<?php $n++;}unset($n); ?>

							</ul>

						</div>


						<div id="popMenuVeiw" class="pop_layer_menu pop_espresso" style="display:none"><div id="divMenuView">

							<div class="inner">
								<div class="cont">
									<div class="left">
										<div class="goods">

											<img class="img_big" src="/Data/Goods/348/DetailImage.png" alt="오르조 라떼 (디카페인) 제품 사진" width="175" height="272">

										</div>
										<div class="icon">

											<span class="new">NEW</span>

										</div>
									</div>
									<div class="right">
										<!-- 제품명 및 설명 -->
										<div class="h3">
											<h3>오르조 라떼 (디카페인)</h3>
											<p class="hotniced">

												<img class="hot" src="/images/menu/label_hot.gif" alt="hot">

												<img class="iced" src="/images/menu/label_iced.gif" alt="iced">

											</p>
										</div>
										<p class="detail">볶은 보리의 고소함과 달콤한 메이플 향이 어우러져 고소한 맛의 달콤한 100% 디카페인 라떼</p>
										<!-- //제품명 및 설명 -->

										<!-- 재료 아이콘 영역 -->

										<!-- //재료 아이콘 영역 -->

										<!-- 영양성분 -->

										<table class="nutrition">
											<caption>항목별(영양성분, 열량, 단백질, 탄수화물, 지방, 나트륨) 영양성분 안내</caption>
											<colgroup>
												<col>
												<col>
												<col>
												<col>
												<col>
												<col>
											</colgroup>

											<thead>
											<tr>
												<th scope="col" class="w13">구분</th>
												<th scope="col" class="w13">중량(g)</th>
												<th scope="col" class="w13">열량 <br>(kcal)</th>
												<th scope="col" class="w20">탄수화물(당류)<br>g(%)</th>
												<th scope="col" class="w13">단백질<br>g(%)</th>
												<th scope="col" class="w13">포화지방<br>g(%)</th>
												<th scope="col" class="w13">나트륨<br>mg(%)</th>
											</tr>
											</thead>

											<tbody>
											<tr>
												<td>HOT</td> <!-- hot, ice 추가부분입니다 -->
												<td>266</td>
												<td>201</td>
												<td>28(22)(8)</td>
												<td>6(11)</td>
												<td>3.8(25)</td>
												<td class="end">115(6)</td>
											</tr>
											</tbody>

											<tbody>
											<tr>
												<td>ICE</td> <!-- hot, ice 추가부분입니다 -->
												<td>371</td>
												<td>175</td>
												<td>26(20)(8)</td>
												<td>5(9)</td>
												<td>3(20)</td>
												<td class="end">95(5)</td>
											</tr>
											</tbody>

										</table>

										<!-- //영양성분 -->

										<!-- 천사가 전하는 비밀 -->

										<!-- //천사가 전하는 비밀 -->
									</div>
									<a href="#" onclick="goClose();closeFocus();return false;" class="pop_close">팝업닫기</a>
								</div>
							</div>

						</div></div>

						<!-- //리스트 하단 텍스트 영역 -->
						<!-- 상품 상세 레이어 -->
						<!-- 에스프레소 -->
						<div id="popMenuVeiw" class="pop_layer_menu pop_espresso" style="display:none">
							<div id="divMenuView"></div>
						</div>


						<!-- //상품 상세 레이어 -->
					</div>
				</div>

			</div><!-- //content -->
		</div><!-- //content and aside -->
	</div>
</div><!-- //containerWrap -->
<?php include template("content","footer"); ?>