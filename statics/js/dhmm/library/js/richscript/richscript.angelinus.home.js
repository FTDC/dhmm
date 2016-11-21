/**
 * $angelhome 객체
 * 메인페이지 UI 제어
 *
 * Lee Won-Gyoon (richscript@gmail.com) <@richscript>
 *
 * D.FY Inc.
 * - http://www.dfy.co.kr/
 * - (richscript@dfy.co.kr)
 *
 */

(function() {
var o = "$angelhome";
window[o] = {
	e: new $.EventEmitter(),
	
	conf: {
		
	},
	
	scale: {
		
	},
	
	vars: {
		  visualLength: 0
		, visualIdx: 0
		, bannerLength: 0
		, bannerIdx: 0
	},
	
	duration: {
		  visualBgPrev: 1100
		, visualBgCur: 1100
		, visualPrev: 1400
		, visualCur: 1300
	},
	
	status: {
		  onVisualMove: false
		, autoNextVisual: true
		, autoNextBanner: true
	},
	
	timer: {
		  changeTheme: null
		, showNextVisual: null
		, showNextBanner: null
	},
	
	delay: {
		showNextVisual: 5000
		, showNextBanner: 5000
	},
	
	showVisual: function(idx, dir) {
		if (this.vars.visualIdx!=idx&&!this.status.onVisualMove) {
			clearTimeout(this.timer.showNextVisual);
			this.status.onVisualMove = true;
			var viewportWidth = $(this.id.visualViewport).width();
			var screenWidth = $(this.id.visualScreen).width();
			var viewportMargin = (screenWidth - viewportWidth)/2;
			var prevIdx = this.vars.visualIdx;
			if (dir==undefined) {
				dir = (prevIdx<idx) ? "R" : "L";
			} else {
				dir = "R";
			}
			var isR = (dir=="R") ? true : false;
			
			var prevBgToX = (isR?-1:1) * screenWidth;
			var prevVisualToX = (isR?-1:1) * (viewportWidth+viewportMargin);
			var bgFromX = isR? screenWidth-10 : 10-screenWidth;
			var bgToX = 0;
			var visualFromX = (isR?1:-1) *(viewportWidth + viewportMargin);
			var visualToX = 0;
			
			var $bgs = $(this.all.visualBgs);
			var $visuals = $(this.all.visuals);
			var $pagingButtons = $(this.all.visualPagingButtons);
			
			var $prevBg = $bgs.eq(prevIdx);
			var $prevVisual = $visuals.eq(prevIdx);
			var $bg = $bgs.eq(idx);
			var $visual = $visuals.eq(idx);
			
			var easing = "easeInOutQuad";
			
			clearTimeout(this.timer.changeTheme);
			this.timer.changeTheme = setTimeout(function() {
				var theme = $(o.all.visualBgs).eq(idx).data("theme");
				$("body")[(theme=="dark")?"addClass":"removeClass"]("white");
			}, this.duration.visualBgCur/2);
			
			$bg.stop().css({zIndex:1,left:bgFromX,display:"block"}).animate({left:bgToX}, this.duration.visualBgCur, easing);
			$prevBg.stop().css({zIndex:2}).animate({left:prevBgToX}, this.duration.visualBgPrev, easing, function() {
				$(this).css({display:"none"});
			});
			
			$visual.stop().css({left:visualFromX,display:"block"}).animate({left:visualToX}, this.duration.visualCur, easing);
			$prevVisual.stop().animate({left:prevVisualToX}, this.duration.visualPrev, easing, function() {
				$(this).css({display:"none"});
				if (o.status.autoNextVisual) {
					o.runNextVisualTimer();
				}
				o.status.onVisualMove = false;
			});
			
			$pagingButtons.eq(prevIdx).removeClass("selected");
			$pagingButtons.eq(idx).addClass("selected");
			
			this.vars.visualIdx = idx;
			
			$bgs = $visuals 
			= $prevBg = $prevVisual 
			= $bg = $visual 
			= $pagingButtons = null;
		}
		return this;
	},
	
	showNextVisual: function() {
		var idx = this.vars.visualIdx + 1;
		if (idx >= this.vars.visualLength) {
			idx = 0;
		}
		this.showVisual(idx, "R");
		return this;
	},
	
	runNextVisualTimer: function() {
		clearTimeout(this.timer.showNextVisual);
		this.timer.showNextVisual = setTimeout(function() {
			o.showNextVisual();
		}, this.delay.showNextVisual);
		return this;
	},
	
	stopNextVisualTimer: function() {
		this.status.autoNextVisual = false;
		clearTimeout(this.timer.showNextVisual);
		$(this.id.visualPlayButton).css({display:"inline-block"});
		$(this.id.visualStopButton).css({display:"none"});
		return false;
	},
	
	playNextVisualTimer: function() {
		this.status.autoNextVisual = true;
		this.showNextVisual();
		$(this.id.visualStopButton).css({display:"inline-block"});
		$(this.id.visualPlayButton).css({display:"none"});
		return false;
	},
	
	showBanner: function(idx) {
		if (this.vars.bannerIdx!=idx) {
			clearTimeout(this.timer.showNextBanner);
			var prevIdx = this.vars.bannerIdx;
			var $banners = $(this.all.banners);
			var $pagingButtons = $(this.all.bannerPagingButtons);
			
			$banners.eq(prevIdx).css({display:"none"});
			$banners.eq(idx).css({display:"block"});
			
			$pagingButtons.eq(prevIdx).removeClass("selected");
			$pagingButtons.eq(idx).addClass("selected");
			
			if (this.status.autoNextBanner) {
				this.runNextBannerTimer();
			}
			
			this.vars.bannerIdx = idx;
			
			$banners = $pagingButtons = null;
		}
		return this;
	},
	
	showNextBanner: function() {
		var idx = this.vars.bannerIdx + 1;
		if (idx >= this.vars.bannerLength) {
			idx = 0;
		}
		this.showBanner(idx);
		return this;
	},
	
	runNextBannerTimer: function() {
		clearTimeout(this.timer.showNextBanner);
		this.timer.showNextBanner = setTimeout(function() {
			o.showNextBanner();
		}, this.delay.showNextBanner);
		return this;
	},
	
	stopNextBannerTimer: function() {
		this.status.autoNextBanner = false;
		clearTimeout(this.timer.showNextBanner);
		$(this.id.bannerPlayButton).css({display:"inline-block"});
		$(this.id.bannerStopButton).css({display:"none"});
		return false;
	},
	
	playNextBannerTimer: function() {
		this.status.autoNextBanner = true;
		this.showNextBanner();
		$(this.id.bannerStopButton).css({display:"inline-block"});
		$(this.id.bannerPlayButton).css({display:"none"});
		return false;
	},

	active: function() {
		
		$(this.all.visualPagingButtons).each(function(i) {
			$(this).bind("click", function(e) {
				e.preventDefault();
				o.showVisual(i);
				return false;
			});
			if (!$.browser.isMobile) {
				$(this).bind("mouseenter", function(e) {
					$(this).addClass("hover");
				}).bind("mouseleave", function(e) {
					$(this).removeClass("hover");
				});
			}
		});
		$(this.id.visualStopButton).bind("click", function(e) {
			e.preventDefault();
			o.stopNextVisualTimer();
			return false;
		});
		$(this.id.visualPlayButton).bind("click", function(e) {
			e.preventDefault();
			o.playNextVisualTimer();
			return false;
		});
		
		$(this.all.bannerPagingButtons).each(function(i) {
			$(this).bind("click", function(e) {
				e.preventDefault();
				o.showBanner(i);
				return false;
			});
			if (!$.browser.isMobile) {
				$(this).bind("mouseenter", function(e) {
					$(this).addClass("hover");
				}).bind("mouseleave", function(e) {
					$(this).removeClass("hover");
				});
			}
		});
		$(this.id.bannerStopButton).bind("click", function(e) {
			e.preventDefault();
			o.stopNextBannerTimer();
			return false;
		});
		$(this.id.bannerPlayButton).bind("click", function(e) {
			e.preventDefault();
			o.playNextBannerTimer();
			return false;
		});
		
		$(this.id.snsFacebookButton).bind("click", function(e) {
			e.preventDefault();
			$(o.id.snsBox).removeClass("twi ka insta").addClass("fb");
			return false;
		});
		$(this.id.snsTwitterButton).bind("click", function(e) {
			e.preventDefault();
			$(o.id.snsBox).removeClass("fb ka insta").addClass("twi");
			return false;
		});
		$(this.id.snsKakaoButton).bind("click", function(e) {
			e.preventDefault();
			$(o.id.snsBox).removeClass("fb twi insta").addClass("ka");
			return false;
		});
		$(this.id.snsInstagramButton).bind("click", function(e) {
			e.preventDefault();
			$(o.id.snsBox).removeClass("fb twi ka").addClass("insta");
			return false;
		});
		$(this.id.snsCloseButton).bind("click", function(e) {
			e.preventDefault();
			$(o.id.snsBox).removeClass("fb twi ka insta");
			return false;
		});
		if (!$.browser.isMobile) {
			$(([this.id.snsFacebookButton,this.id.snsTwitterButton,this.id.snsKakaoButton,this.id.snsInstagramButton]).join(",")).bind("mouseenter", function(e) {
				$(this).addClass("hover");
			}).bind("mouseleave", function(e) {
				$(this).removeClass("hover");
			});
		}
		
		return this;
	},
	
	initialize: function() {
		this.name = o;
		o = this;
		
		this.id = {
			  visualPagingArea: ".o-visual-paging"
			, visualViewport: "#containerWrapAc .visCon"
			, visualScreen: "#containerWrapAc .visWrap"
			, visualStopButton: "#containerWrapAc .visCon .cirBtn .autoPlay a.stop"
			, visualPlayButton: "#containerWrapAc .visCon .cirBtn .autoPlay a.play"
			, bannerPagingArea: ".o-banner-paging"
			, bannerStopButton: ".conShare .newProduct .cirBtn .autoPlay a.stop"
			, bannerPlayButton: ".conShare .newProduct .cirBtn .autoPlay a.play"
			, snsBox: "#containerAc .conShare"
			, snsFacebookButton: ".conShare .snsAc a.facebook"
			, snsTwitterButton: ".conShare .snsAc a.twitter"
			, snsKakaoButton: ".conShare .snsAc a.kakao"
			, snsInstagramButton: ".conShare .snsAc a.Instagram"
			, snsCloseButton: ".conShare a.close"
			, snsContentsFacebook: ".o-sns-contents-facebook"
			, snsContentsTwitter: ".o-sns-contents-twitter"
			, snsContentsEmpty: ".o-sns-contents-empty"
			, snsCounterFacebook: ".o-sns-counter-facebook"
			, snsCounterTwitter: ".o-sns-counter-twitter"
		};
		
		this.all = {
			  visualBgs: "#containerWrapAc .visBg"
			, visuals: "#containerWrapAc .visCon .titleAc"
			, visualPagingButtons: ".o-visual-paging .o-btn-paging"
			, banners: ".conShare .newProduct a.banner"
			, bannerPagingButtons: ".o-banner-paging .o-btn-paging"
		};
		
		var s = '';
		var visualLength = this.vars.visualLength = $(this.all.visualBgs).length;
		/*if (visualLength>1) {
			this.vars.visualIdx = Math.toInt(Math.random() * visualLength);
		}*/
		var $visualPagingArea = $(this.id.visualPagingArea);
		$(this.all.visuals).each(function(i) {
			var selected = (o.vars.visualIdx==i) ? true : false;
			//$(this).css({display:selected?"block":"none",top:106});
		});
		$(this.all.visualBgs).each(function(i) {
			var selected = (o.vars.visualIdx==i) ? true : false;
			if (visualLength>1) {
				$visualPagingArea.append('<a href="#" class="o-btn-paging '+(selected?'selected':'')+'"><span>'+(i+1)+'번째 이미지'+'</span></a>');
			}
			$(this).css({display:selected?"block":"none",top:0});
			if (selected) {
				var theme = $(this).data("theme");
				$("body")[(theme=="dark")?"addClass":"removeClass"]("white");
			}
		});
		if (visualLength>1) {
			s = '';
			s += '<div class="autoPlay">';
			s += '<a class="stop" href="#"><span>정지</span></a>';
			s += '<a class="play" href="#"><span>재생</span></a>';
			s += '</div>';
			$visualPagingArea.append(s);
		}
		
		var bannerLength = this.vars.bannerLength = $(this.all.banners).length;
		if (bannerLength>1) {
			this.vars.bannerIdx = Math.toInt(Math.random() * bannerLength);
		}
		var $bannerPagingArea = $(this.id.bannerPagingArea);
		if (bannerLength>1) {
			$(this.all.banners).each(function(i) {
				var selected = (o.vars.bannerIdx==i) ? true : false;
				$bannerPagingArea.append('<a href="#" class="o-btn-paging '+(selected?'selected':'')+'"><span>'+(i+1)+'번째 이미지'+'</span></a>');
				$(this).css({display:selected?"block":"none"});
			});
			s = '';
			s += '<div class="autoPlay">';
			s += '<a class="stop" href="#"><span>정지</span></a>';
			s += '<a class="play" href="#"><span>재생</span></a>';
			s += '</div>';
			$bannerPagingArea.append(s);
		}
		
		this.active();
		
		if (visualLength>1) {
			this.runNextVisualTimer();
		}
		if (bannerLength>1) {
			this.runNextBannerTimer();
		}
		
		// Load Facebook Contents
		window.fbAsyncInit = function() {
			o.loadFacebook();
		};
		
		//load Twitter Contents
		return this;
	}
};
$(function() {
	//window[o].initialize();
});
})();
