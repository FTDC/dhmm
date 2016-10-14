/**
 * $angelinus 객체
 * 공통영역 UI 제어
 *
 * Lee Won-Gyoon (richscript@gmail.com) <@richscript>
 *
 * D.FY Inc.
 * - http://www.dfy.co.kr/
 * - (richscript@dfy.co.kr)
 *
 */

(function() {
var o = "$angelinus";
window[o] = {
	e: new $.EventEmitter(),
	
	conf: {
		  DEFAULT_TITLE: "엔제리너스"
		, naviMaxLengthForUI: 6/* 메뉴추가 card 후 메뉴 순서 조정 */
	},
	
	scale: {
		  naviMinHeight: 46
		, naviMaxHeight: 0
		, naviMinWidth: 1116
		, naviFixedPoint: 62
		, naviTabFixedPoint: 304
	},
	
	vars: {
		
	},
	
	temp: {
		  hn: 1
	},
	
	duration: {
		
	},
	
	status: {
		  naviOpened: false
		, naviFixed: false
		, naviTabFixed: true
	},
	
	timer: {
		closeNavi: null
	},
	
	delay: {
		closeNavi: 300
	},
	
	menu: [],
	menuCodeMap: {},
	skinCodeMap: {},
	
	currentMenu: null,
	currentMenuCode: "",
	
	/**
	* 메뉴코드 값으로 메뉴 Array의 Index 정보를 리턴한다.
	* @param _menuCode 메뉴코드
	* @return String
	*/
	getMenuIndexFromMenuCode: function(_menuCode) {
		return this.menuCodeMap[_menuCode];
	},

	/**
	* 스킨코드 값으로 메뉴 Array의 Index 정보를 리턴한다.
	* @param _skinCode 스킨코드
	* @return String
	*/
	getMenuIndexFromSkinCode: function(_skinCode) {
		return this.skinCodeMap[_skinCode];
	},

	/**
	* 메뉴코드 값으로 메뉴 객체를 리턴한다.
	* @param _menuCode 메뉴코드
	* @return Object
	*/
	getMenuFromMenuCode: function(_menuCode) {
		return this.getMenuFromMenuIndex(this.getMenuIndexFromMenuCode(_menuCode));
	},

	/**
	* 스킨코드 값으로 메뉴 객체를 리턴한다.
	* @param _skinCode 스킨코드
	* @return Object
	*/
	getMenuFromSkinCode: function(_skinCode) {
		return this.getMenuFromMenuIndex(this.getMenuIndexFromSkinCode(_skinCode));
	},

	/**
	* 메뉴인덱스 값으로 메뉴 객체를 리턴한다.
	* @param _menuIndex 메뉴인덱스
	* @return Object
	*/
	getMenuFromMenuIndex: function(_menuIndex) {
		var menu = null;
		try {
			if (_menuIndex!=undefined) {
				menu = eval("this.menu["+_menuIndex.replace(/,/g,"].childMenu[")+"]");
			}
		} catch(e) {
			menu = null;
		}
		return menu;
	},
	
	/**
	* menu()할때 depth정보로 상위메뉴의 메뉴코드를 가져온다.
	* @param _depth 메뉴뎁스
	* @return Array
	*/
	getParentMenuCodes: function(_depth) {
		var menuCodes = [];
		var menuDepth = (_depth==undefined) ? 0 : parseInt(_depth,10);
		if (menuDepth>1) {
			var parentMenu = this.menu;
			var lastIndex = 0;
			for (var i=1; i<menuDepth; i++) {
				lastIndex = parentMenu.length-1;
				menuCodes.push(parentMenu[lastIndex].menuCode);
				if (i<menuDepth-1) {
					parentMenu = parentMenu[lastIndex].childMenu;
				}
			}
			parentMenu = null;
		}
		return menuCodes;
	},

	/**
	* 하위메뉴를 탐색하여 URL이 존재하는 메뉴가 나올면 리턴한다.
	* @param _menu 메뉴객체
	* @return Menu 메뉴객체
	*/
	getValidMenu: function(_menu) {
		if (_menu==undefined) {
			return null;
		}
		if (_menu.url!="") {
			return _menu;
		} else {
			if (_menu.childMenu!=null) {
				for (var i=0; i<_menu.childMenu.length; i++) {
					var _tempMenu = this.getValidMenu(_menu.childMenu[i]);
					if (_tempMenu!=null) {
						return _tempMenu;
					}
				}
				return null;
			} else {
				return null;
			}
		}
	},
	
	/**
	* @param depth 메뉴뎁스
	* @param menuCode 메뉴코드
	* @param title 메뉴명
	* @param url 링크
	* @param option 옵션 {target:"_blank", title:"비주얼타이틀", text:"비주얼텍스트"}
	*/
	addMenu: function(depth, menuCode, title, url, option) {
		if (url==undefined) {
			url = "";
		}
		if (option==undefined) {
			option = {};
		}
		var target = option.target;
		
		var parentMenuCodes = this.getParentMenuCodes(depth);
		var allMenuCodes = this.getParentMenuCodes(depth);
		allMenuCodes.push(menuCode);
		
		/* Menu Class */
		var menu = {
			depth : depth,
			skinCode : "",
			sectionCode : "",
			menuCode : menuCode,
			title : title.replace(/\\n/g, ""),
			pureTitle : title,
			brTitle : title.replace(/\\n/g, "<br/>"),
			url : url,
			target : (target==undefined) ? "_self" : target,
			visualTitle : (option.title==undefined) ? "" : option.title,
			visualText : (option.text==undefined) ? "" : option.text,
			hn: (option.hn==undefined) ? "" : option.hn,
			sn: (option.sn==undefined) ? "" : option.sn,
			parentMenuCodes : parentMenuCodes,
			allMenuCodes : allMenuCodes,
			childMenu : null,
			showProperty : function() {
				var s = "";
				var i = 0;
				for (prop in this ){
					if (""+typeof(this[prop])!="function") {
						if (i++>0) s += "\n";
						s += "- " + prop + " : ";
						if (prop+""=="childMenu") {
							try {
								s += this[prop].toString().split(",").length + "개";
							} catch(e) {
								s += "없음";
							}
						} else {
							s += this[prop];
						}
					}
				}
				return s;
			}
		};
		
		/* Add Menu */
		var menuIndex = "";
		var menuLastDepthIndex = "";
		var skinCode = "";
		var menuDepth = parseInt(menu.depth,10);
		if (menuDepth>1) {
			var parentMenuCode = menu.parentMenuCodes[menuDepth-2];
			var parentMenu = this.getMenuFromMenuCode(parentMenuCode);
			if (parentMenu) {
				if (parentMenu.childMenu==null) {
					parentMenu.childMenu = [];
				}
				menuLastDepthIndex = parentMenu.childMenu.length;
				menu.skinCode = parentMenu.skinCode + ((menuLastDepthIndex<10) ? "0"+menuLastDepthIndex : ""+menuLastDepthIndex);
				menu.sectionCode = menu.skinCode.substring(0,2);
				menuIndex = this.menuCodeMap[parentMenuCode] + "," + menuLastDepthIndex;
				parentMenu.childMenu.push(menu);
			}
			parentMenu = null;
		} else {
			menuLastDepthIndex = this.menu.length;
			menu.skinCode = (menuLastDepthIndex<10) ? "0"+menuLastDepthIndex : ""+menuLastDepthIndex;
			menu.sectionCode = menu.skinCode.substring(0,2);
			menuIndex = ""+menuLastDepthIndex;
			this.menu.push(menu);
		}
		this.menuCodeMap[menu.menuCode] = menuIndex;
		
		/* Skin Code Map setting. */
		if (menu.skinCode!="") {
			this.skinCodeMap[menu.skinCode] = menuIndex;
		}
		
		menu = null;
		parentMenuCodes = null;
		
		return this;
	},
	hn: function(hn, title, url, option) {
		var menuCode = this.temp.hn = ""+hn;
		if (option==undefined) {
			option = {};
		}
		option.hn = ""+hn;
		option.sn = "";
		return this.addMenu(1, menuCode, title, url, option);
	},
	sn: function(sn, title, url, option) {
		var menuCode = this.temp.hn + "_" + sn;
		if (option==undefined) {
			option = {};
		}
		option.hn = ""+this.temp.hn;
		option.sn = ""+sn;
		return this.addMenu(2, menuCode, title, url, option);
	},
	
	openMenu: function() {
		
		return this;
	},

    printDocumentTitle: function() {
        var s = '';
        if (this.currentMenu) {
        	s += this.currentMenu.title + " | ";
        }
        s += this.conf.DEFAULT_TITLE;
        document.title = s;
        return this;
    },
	
	getNaviHtml: function() {
		var s = '';
		
		var menu1, menu2, url, menuV, hasKR;
		if (this.menu.length>0) {
			for(var i=0; i<Math.min(this.menu.length, this.conf.naviMaxLengthForUI); i++) {
				menu1 = this.menu[i];
				menuV = this.getValidMenu(menu1);
				url = (menuV&&menuV.url) ? menuV.url : "#";
				s += '<li class="hn'+menu1.hn+'">\n';
				s += '	<h2><a';
				s += '	 href="'+url.escapeXml()+'"';
				s += '	 target="'+menu1.target.escapeXml()+'"';
				s += '	 class="M-'+menu1.menuCode.escapeXml()+'"';
				s += '	>'+menu1.title.escapeXml()+'</a></h2>\n';
				s += '	<div class="depth2Wrap">\n';
				s += '		<ul class="depth2">\n';
				if (menu1.childMenu&&menu1.childMenu.length>0) {
					for (var j=0; j<menu1.childMenu.length; j++) {
						menu2 = menu1.childMenu[j];
						hasKR = menu2.title.hasKR();
						s += '<li class="sn'+menu2.sn+'"><a';
						s += ' href="'+menu2.url.escapeXml()+'"';
						s += ' target="'+menu2.target.escapeXml()+'"';
						s += ' class="M-'+menu2.menuCode.escapeXml()+'"';
						s += '>';
						s += this.spanHtml(menu2.title.escapeXml());
						s += '</a></li>\n';
						menu2 = null;
					}
				}
				s += '		</ul>\n';
				s += '	</div>\n';
				s += '</li>\n';
				menu1 = menuV = null;
			}
		}
		/*  mall 삭제  2014-11-17
		s += '<li class="mall" >\n';
		s += '	<a href="http://shop.angelinus.com/" title="새창열림" target="_blank">ANGEL\'S MALL</a>\n';
		s += '	<div class="depth2Wrap">\n';
		s += '		<ul class="depth2">\n';
		s += '			<li><a href="http://shop.angelinus.com/" title="새창열림" target="_blank">Angel\'s Mall go</a></li>\n';
		s += '		</ul>\n';
		s += '	</div>\n';
		s += '</li>\n';
		*/
		/* 2014-11-17 CARD 추가 
		s += '<li class="hn12" >\n';
		s += '	<h2><a href="/Card/Card.asp" target="_self" class="M-12">CARD</a></h2>\n';
		s += '	<div class="depth2Wrap">\n';
		s += '		<ul class="depth2">\n';
		s += '			<li class="sn1"><a href="/Card/Card.asp" target="_self" class="M-12_1" ><span>엔제리너스 카드란</span></a></li>\n';
		s += '			<li class="sn2"><a href="/Card/Card_App.asp" target="_self" class="M-12_2" ><span>엔제리너스 카드 앱</span></a></li>\n';
		s += '			<li class="sn3"><a href="/Card/Card_Register.asp" target="_self" class="M-12_3" ><span>카드 등록 / 조회</span></a></li>\n';
		s += '			<li class="sn4"><a href="/Card/Card_qna.asp" target="_self" class="M-12_4" ><span>카드 Q&A 모아보기</span></a></li>\n';
		s += '		</ul>\n';
		s += '	</div>\n';
		s += '</li>\n';*/
		
		return s;
	},
	
	printNavi: function() {
		if (!$.browser.isMobile) {
			$(this.id.naviFixed).addClass("fixed");
		}
		$(this.id.navi).html(this.getNaviHtml());
		var naviMaxHeight = this.scale.naviMinHeight;
		$(this.all.naviDepth2Wrap).each(function(i) {
			var height = $(this).height();
			naviMaxHeight = Math.max(naviMaxHeight, height);
		});
		this.scale.naviMaxHeight = naviMaxHeight + 80;
		$(this.id.naviSubWrap).css({height:naviMaxHeight+15});
		return this;
	},
	
	getFooterNaviHtml: function() {
		var s = '';
		var menu1, menu2, url, menuV, hasKR;
		if (this.menu.length>0) {
			s += '<ul class="depth1">\n';
			for(var i=0; i<Math.min(this.menu.length, this.conf.naviMaxLengthForUI); i++) {
				menu1 = this.menu[i];
				menuV = this.getValidMenu(menu1);
				url = (menuV&&menuV.url) ? menuV.url : "#";
				s += '<li class="hn'+menu1.hn+'">\n';
				s += '	<h2><a';
				s += '	 href="'+url.escapeXml()+'"';
				s += '	 target="'+menu1.target.escapeXml()+'"';
				s += '	 class="M-'+menu1.menuCode.escapeXml()+'"';
				s += '	>'+menu1.title.escapeXml()+'</a></h2>\n';
				s += '	<ul class="depth2">\n';
				if (menu1.childMenu&&menu1.childMenu.length>0) {
					for (var j=0; j<menu1.childMenu.length; j++) {
						menu2 = menu1.childMenu[j];
						hasKR = menu2.title.hasKR();
						s += '<li class="sn'+menu2.sn+'"><a';
						s += ' href="'+menu2.url.escapeXml()+'"';
						s += ' target="'+menu2.target.escapeXml()+'"';
						s += ' class="M-'+menu2.menuCode.escapeXml()+'"';
						s += '>';
						s += this.spanHtml(menu2.title.escapeXml());
						s += '</a></li>\n';
						menu2 = null;
					}
				}
				s += '	</ul>\n';
				s += '</li>\n';
				menu1 = menuV = null;
			}
			/* s += '</ul>\n';  2014-11-17 CARD추가 
			
			s += '<li class="hn12" >\n';
			s += '	<h2><a href="/Card/Card.asp" target="_self" class="M-12">CARD</a></h2>\n';
			s += '	<div class="depth2Wrap">\n';
			s += '		<ul class="depth2">\n';
			s += '			<li class="sn1"><a href="/Card/Card.asp" target="_self" class="M-12_1"><span>엔제리너스 카드란</span></a></li>\n';
			s += '			<li class="sn2"><a href="/Card/Card_App.asp" target="_self" class="M-12_2"><span>엔제리너스 카드 앱</span></a></li>\n';
			s += '			<li class="sn3"><a href="/Card/Card_Register.asp" target="_self" class="M-12_3"><span>카드 등록 / 조회</span></a></li>\n';
			s += '			<li class="sn4"><a href="/Card/Card_qna.asp" target="_self" class="M-12_4"><span>카드 Q&A 모아보기</span></a></li>\n';
			s += '		</ul>\n';
			s += '	</div>\n'; 
			s += '</li>\n';*/
							
		}
		return s;
	},
	
	printFooterNavi: function() {
		$(this.id.footerNaviWrap).append(this.getFooterNaviHtml());
		return this;
	},
	
	openNavi: function() {
		clearTimeout(this.timer.closeNavi);
		if (!this.status.naviOpened) {
			this.status.naviOpened = true;
			$(this.id.naviWrap).stop().animate({height:this.scale.naviMaxHeight});
			if ($.browser.isMobile) {
				/*
				$(window).bind("scroll.openNavi", function(e) {
					o.closeNavi();
					$(window).unbind("scroll.openNavi");
				});
				*/
			}
		}
		return this;
	},
	
	runCloseNaviTimer: function() {
		clearTimeout(this.timer.closeNavi);
		this.timer.closeNavi = setTimeout(function() {
			o.closeNavi();
		}, this.delay.closeNavi);
		return this;
	},
	
	closeNavi: function() {
		this.status.naviOpened = false;
		$(this.id.naviWrap).stop().animate({height:this.scale.naviMinHeight});
		return this;
	},
	
	scrollTo: function(y) {
		$("html,body").stop().animate({scrollTop:y}, 900, "easeInOutCubic");
		return this;
	},
	
	checkNaviFixed: function() {
		var scrollTop = $.browser.scrollTop();
		var naviFixedMode = (scrollTop<this.scale.naviFixedPoint) ? false : true;
		if (naviFixedMode!=this.status.naviFixedMode) {
			this.status.naviFixedMode = naviFixedMode;
			if (naviFixedMode) {
				$(this.id.naviFixed).addClass("fixed");
				$(window).bind("scroll.navifixed resize.navifixed", function(e) {
					o.floatNavi();
				});
				this.floatNavi();
			} else {
				this.releaseNaviFixed();
			}
		}
		return this;
	},
	
	releaseNaviFixed: function() {
		this.status.naviFixedMode = false;
		this.vars.currentNaviFixedLeft = null;
		$(window).unbind(".navifixed");
		$(this.id.naviFixed).removeAttr("style").removeClass("fixed");
		return this;
	},
	
	floatNavi: function() {
		if (this.status.naviFixedMode) {
			var currentNaviFixedLeft = this.vars.currentNaviFixedLeft;
			var scrollLeft = $(window).scrollLeft();
			if ($("body").width()<this.scale.naviMinWidth) {
				$(this.id.naviFixed).css({left:scrollLeft*-1});
			} else {
				$(this.id.naviFixed).removeAttr("style");
				scrollLeft = -9999;
			}
			this.vars.currentNaviFixedLeft = scrollLeft;
		}
		return this;
	},
	
	checkNaviTabFixed: function() {
		var scrollTop = $.browser.scrollTop();
		var naviTabFixedMode = (scrollTop<this.scale.naviTabFixedPoint) ? false : true;
		if (naviTabFixedMode!=this.status.naviTabFixedMode) {
			this.status.naviTabFixedMode = naviTabFixedMode;
			if (naviTabFixedMode) {
				$(this.id.naviTabFixed).addClass("fixed");
				$(window).bind("scroll.navitabfixed resize.navitabfixed", function(e) {
					o.floatNaviTab();
				});
				this.floatNaviTab();
			} else {
				this.releaseNaviTabFixed();
			}
		}
		return this;
	},
	
	releaseNaviTabFixed: function() {
		this.status.naviTabFixedMode = false;
		this.vars.currentNaviTabFixedLeft = null;
		$(window).unbind(".navitabfixed");
		$(this.id.naviTabFixed).removeAttr("style").removeClass("fixed");
		return this;
	},
	
	floatNaviTab: function() {
		if (this.status.naviTabFixedMode) {
			var currentNaviTabFixedLeft = this.vars.currentNaviTabFixedLeft;
			var scrollLeft = $(window).scrollLeft();
			if ($("body").width()<this.scale.naviMinWidth) {
				$(this.id.naviTabFixed).css({left:scrollLeft*-1});
			} else {
				$(this.id.naviTabFixed).removeAttr("style");
				scrollLeft = -9999;
			}
			this.vars.currentNaviTabFixedLeft = scrollLeft;
		}
		return this;
	},
	
	openFamilySiteLayer: function() {
		$(this.id.familySiteButton).addClass("selected");
		var $familySiteLayer = $(this.id.familySiteLayer);
		var $familySiteRows = $(this.all.familySiteRows);
		$familySiteLayer.css({display:"block"});
		if ($familySiteLayer.data("isFirst")!="Y") {
			$familySiteLayer.data("isFirst", "Y");
			var maxHeight = 0;
			$familySiteRows.each(function(i) {
				maxHeight = Math.max($(this).height(), maxHeight);
			}).css({height:maxHeight});
		}
		$(this.id.familySiteCloseButton).focus();
		$familySiteLayer = null;
		return this;
	},
	
	closeFamilySiteLayer: function() {
		$(this.id.familySiteButton).removeClass("selected").focus();
		$(this.id.familySiteLayer).css({display:"none"});
		return this;
	},
	
	active: function() {
		
		if (!$.browser.isMobile) {
			$(this.id.naviSensor).bind("mouseenter mouseover", function(e) {
				o.openNavi();
			}).bind("mouseleave", function(e) {
				o.runCloseNaviTimer();
			});
			$(this.all.naviFocusSensors).each(function(i) {
				$(this).bind("focus", function(e) {
					$(this).addClass("hover");
					o.openNavi();
				}).bind("blur", function(e) {
					$(this).removeClass("hover");
					o.runCloseNaviTimer();
				});
			});
		}
		
		
		if ($.browser.isMobile) {
			$(this.all.naviDepth1).bind("click", function(e) {
				e.preventDefault();
				o.openNavi();
				return false;
			});
		} else {
			$(this.all.naviDepth1).bind("mouseenter", function(e) {
				$(this).addClass("hover");
			}).bind("mouseleave", function(e) {
				$(this).removeClass("hover");
			});
		}
		
		$(this.id.familySiteButton).bind("click", function(e) {
			e.preventDefault();
			if (!$(this).hasClass("selected")) {
				o.openFamilySiteLayer();
			} else {
				o.closeFamilySiteLayer();
			}
			return false;
		});
		$(this.id.familySiteCloseButton).bind("click", function(e) {
			e.preventDefault();
			o.closeFamilySiteLayer();
			return false;
		});
		
		if (!$.browser.isMobile) {
			$(window).bind("scroll", function(e) {
				o.checkNaviFixed();
			});
			this.checkNaviFixed();
			
			$(window).bind("scroll", function(e) {
				o.checkNaviTabFixed();
			});
		}
		return this;
	},
	
	activeRichscriptElements: function() {
		var richscriptElements = this.all.richscriptElements;
		var richscriptClass = richscriptElements.substring(richscriptElements.lastIndexOf(".")+1);
		$(richscriptElements+","+this.all.preloadElements).each(function(i) {
			var $image = $(this), css = {};
			if ($image.data("loaded")!==true) {
				var src = $image.attr("data-richscript");
				if (src==undefined||src=="") {
					try {
						var $img = $image.find("img");
						if ($img.get(0)) {
							src = $img.get(0).src;
							if (src!==undefined&&src!=="") {
								$img.eq(0).attr("data-richscript-loaded","Y");
							}
						}
						$img = null;
					} catch(e) {}
				}
				if (src!==undefined&&src!=="") {
					if ($.browser.hasFilter&&$image.hasClass(richscriptClass)) {
						css.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"',sizingMethod=scale)";
					} else {
						css.backgroundImage = "url("+src+")";
					}
				} else {
					src = $image.css("background-image");
					if (src!=null&&(""+src)!=="none") {
						src = src.replace(/url\(/i,"").trim();
						src = src.substring(0, src.length-1).trim();
					} else {
						src = "";
					}
				}
				if (src!==undefined&&src!=="") {
					if (document.images&&Image!==undefined) {
						(new Image()).src = src;
					}
				}
				$image.css(css).data({loaded:true}).removeAttr("data-richscript");
			}
			$image = css = null;
		});
		return this;
	},
	
	focusMenu: function(menuCode) {
		var menu = this.getMenuFromMenuCode(menuCode);
		if (menu) {
			var hn = menu.hn;
			var isEtc = ((Math.toInt(hn)<=this.conf.naviMaxLengthForUI) /*|| Math.toInt(hn) == 12*/) ? false : true;

			var visualHn = !isEtc ? hn : "etc";
			//$(this.id.naviVisual).css({backgroundImage:"url('/ImagesNew/gnb/visual/visual_hn_"+visualHn+".jpg')"});
			$(this.id.naviVisualMenuName).html(this.spanHtml(menu.title));
			$(this.id.naviVisualTitle).html(this.spanHtml(menu.visualTitle));
			$(this.id.naviVisualText).html(this.spanHtml(menu.visualText.enterToBr()));
			if (menu.visualTitle=="") {
				$(this.id.naviVisualTitle).html("&nbsp;");
			}
			
			var menu1 = this.getMenuFromMenuCode(hn), menu2, menuPrev=null, menuNext=null, s = '';
			if (menu1.childMenu&&menu1.childMenu.length>1) {
				for (var i=0; i<menu1.childMenu.length; i++) {
					menu2 = menu1.childMenu[i];
					s += '<a';
					if (menu2.menuCode==menu.menuCode) {
						if (i>0) {
							menuPrev = menu1.childMenu[i-1];
						}
						if (i<menu1.childMenu.length-1) {
							menuNext = menu1.childMenu[i+1];
						}
						s += ' class="selected"';
					}
					s += ' href="'+menu2.url.escapeXml()+'"';
					s += ' target="'+menu2.target.escapeXml()+'"';
					s += '><span>'+menu2.title.escapeXml()+'</span></a>';
				}
				if (menuNext==null&&menu.depth==1) {
					menuNext = menu1.childMenu[0];
				}
			}
			$(this.id.naviVisualPagingArea).html(s);
			
			s = '';
			if (menuPrev) {
				s += '<a class="prevAc"';
				s += ' href="'+menuPrev.url.escapeXml()+'"';
				s += ' target="'+menuPrev.target.escapeXml()+'"';
				s += '>';
				s += '	<strong>'+menu1.title.escapeXml()+'</strong>';
				s += '	'+this.spanHtml(menuPrev.title.escapeXml())+'';
				s += '</a>';
			}
			if (menuNext) {
				s += '<a class="nextAc"';
				s += ' href="'+menuNext.url.escapeXml()+'"';
				s += ' target="'+menuNext.target.escapeXml()+'"';
				s += '>';
				s += '	<strong>'+menu1.title.escapeXml()+'</strong>';
				s += '	'+this.spanHtml(menuNext.title.escapeXml())+'';
				s += '</a>';
			}
			$(this.id.naviVisualButtonArea).html(s);
			
			s = '';
			if (isEtc&&menu1.childMenu&&menu1.childMenu.length>1) {  //  2014-11-17 12번 CARD는 서브 메뉴 없음
				s += '	<div class="lnbInner">';
				for (var i=0; i<menu1.childMenu.length; i++) {
					var m = menu1.childMenu[i];
					var hasKR = m.title.hasKR();
					s += '<a';
					s += ' href="'+m.url.escapeXml()+'"';
					s += ' target="'+m.target.escapeXml()+'"';
					s += ' class="M-'+m.menuCode.escapeXml()+'"';
					s += '>';
					s += (hasKR)?'<span':'<i';
					if (i==0) {
						s += ' class="first"';
					}
					s += '>';
					s += m.title.escapeXml();
					s += (hasKR)?'</span>':'</i>';
					s += '</a>';
					m = null;
				}
				s += '	</div>';
				$(this.id.naviTab).html(s).parent().css({display:"block"});
			}
			
			if (menu.allMenuCodes) {
				for (var i=0; i<menu.allMenuCodes.length; i++) {
					$(".M-"+menu.allMenuCodes[i]).addClass("selected");
				}
			}
			
			menu1 = menu2 = menuPrev = menuNext = null;
		}
		return this;
	},
	
	spanHtml: function(s) {
		if (s.hasKR()) {
			s = "<span>"+s+"</span>";
		}
		return s;
	},
	
	ready: function(data) {
		var hn = (data.hn==undefined) ? "" : data.hn;
		var sn = (data.sn==undefined) ? "" : data.sn;
		var menuCode = hn;
		if (sn!="") {
			menuCode += "_" + sn;
		}
		this.currentMenuCode = menuCode;
		return this;
	},
	
	initialize: function() {
		this.name = o;
		o = this;
		
		this.id = {
			  navi: ".o-navi-html"
			, naviFixed: ".o-navi-fixed"
			, naviWrap: "#headerAc .gnb .depthWrap"
			, naviSensor: "#headerAc .gnb .depthWrap, #headerAc .gnb .logoAc"
			, naviSubWrap: "#headerAc .gnb .depth1 li .depth2Wrap"
			, naviVisual: ".o-navi-visual"
			, naviVisualMenuName: ".o-navi-visual-menu-name"
			, naviVisualTitle: ".o-navi-visual-title"
			, naviVisualText: ".o-navi-visual-text"
			, naviVisualPagingArea: ".o-navi-visual-paging-area"
			, naviVisualButtonArea: ".o-navi-visual-button-area"
			, footerNaviWrap: ".o-footer-navi-wrap"
			, naviTab: ".o-navi-tab"
			, naviTabFixed: ".o-navi-tab-fixed"
			, familySiteButton: "#footerAc .footerInner .famOpen"
			, familySiteCloseButton: "#footerAc .footFamily .familyWrap .familyWrap_close"
			, familySiteLayer: "#footerAc .footFamily"
		};
		
		this.all = {
			  richscriptElements: ".richscript"
			, preloadElements: ".richscript-preload"
			, naviDepth1: "#headerAc .gnb .depth1 > li h2 a"
			, naviDepth2Wrap: "#headerAc .gnb .depth1 .depth2"
			, naviFocusSensors: "#headerAc .gnb .depthWrap a"
			, familySiteRows: "#footerAc .footFamily .familyWrap > ul"
		};
		
		if ($.browser.isMobile) {
			$("html").addClass("M");
		}
		
		this.printNavi().printFooterNavi().active();
		
		if (this.currentMenuCode!="") {
			this.currentMenu = this.getMenuFromMenuCode(this.currentMenuCode);
			if (this.currentMenu==null&&this.currentMenuCode.indexOf("_")>-1) {
				this.currentMenuCode = this.currentMenuCode.split("_")[0];
				this.currentMenu = this.getMenuFromMenuCode(this.currentMenuCode);
			}
			this.printDocumentTitle();
			this.focusMenu(this.currentMenuCode);
		}
		
		return this.activeRichscriptElements();
	}
};
$(function() {
	window[o].initialize();
});
})();
/*document.write('<style>.richscript {display:block;width:100%;height:100%;overflow:hidden;white-space:nowrap;text-indent:-9999px;background-repeat:no-repeat;background-size:100% 100%;font-size:1px !important;line-height:1px !important;}</style>');*/

