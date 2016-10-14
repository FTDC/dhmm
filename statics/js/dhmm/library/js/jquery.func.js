
var commonFunc = {
	addDate: function(d, add){
		var currentDate;
		currentDate = d.getDate()+add*1;
		d.setDate(currentDate);
		return d;
	},
	addMonth: function(m, add){
		var currentMonth;
		currentMonth = m.getMonth()+add*1;
		m.setMonth(currentMonth);
		return m;
	},
	popCwin: function(url, name, w, h, scroll){
		var wl = (window.screen.width/2) - ((w/2) + 10);
		var wt = (window.screen.height/2) - ((h/2) + 50);
		var option = "height="+h+",width="+w+",left="+wl+",top="+wt+",screenX="+wl+",screenY="+wt+",scrollbars="+scroll + ", status=yes";

		commonPopWin = window.open( url, name, option );
		commonPopWin.focus();
		
		return false;
	},
	timeAgo: function(time){
		var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
			diff = (((new Date()).getTime() - date.getTime()) / 1000),
			day_diff = Math.floor(diff / 86400);

		if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
			return;

		return day_diff == 0 && (
				diff < 60 && diff+"초 전" ||
				diff < 120 && "1분 전" ||
				diff < 3600 && Math.floor( diff / 60 ) + "분 전" ||
				diff < 7200 && "1시간 전" ||
				diff < 86400 && Math.floor( diff / 3600 ) + "시간 전") ||
			day_diff == 1 && "1일 전" ||
			day_diff < 7 && day_diff + "일 전" ||
		day_diff < 31 && Math.ceil( day_diff / 7 ) + "주 전";
	},
	twitterTime: function(time_value){
		var parsed_date = Date.parse(time_value);
		var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
		var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);

		if (delta < 60) {
			return delta + '초 전';
		} else if(delta < 120) {
			return '약 1분 전';
		} else if(delta < (60*60)) {
			return (parseInt(delta / 60)).toString() + '분 전';
		} else if(delta < (120*60)) {
			return '약 1시간 전';
		} else if(delta < (24*60*60)) {
			return (parseInt(delta / 3600)).toString() + '시간 전';
		} else if(delta < (48*60*60)) {
			return '1일 전';
		} else {
			return (parseInt(delta / 86400)).toString() + '일 전';
		}
	}
};

var subFunc = {
	vocWrite: function(){
		$('select[name=VisitDateYear]').bind('change', subFunc.visitDateYearChange);
	},
	visitDateYearChange: function(){
		$('select[name=VisitDateMonth]').unbind('change');
		if($(this).val()==''){
			$(this).parents('td').find('select:eq(1)').empty().html('<option value="">선택</option>');
			$(this).parents('td').find('select:eq(2)').empty().html('<option value="">선택</option>');
		}else{
			var str='<option value="">선택</option>';
			for(i=1; i<=12; i++){
				str += '<option value="'+(String(i).length>1?i:'0'+i)+'">'+(String(i).length>1?i:'0'+i)+'</option>';
			}
			$(this).parents('td').find('select:eq(1)').html(str);
			$(this).parents('td').find('select:eq(2)').empty().html('<option value="">선택</option>');
			$('select[name=VisitDateMonth]').bind('change', subFunc.visitDateMonthChange);
		}
	},
	visitDateMonthChange: function(){
		if($(this).val()==''){
			$(this).parents('td').find('select:eq(2)').empty().html('<option value="">선택</option>');
		}else{
			var year = $(this).prev().val();
			var month = $(this).val();
			var monthArray = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
			var maxDays = monthArray[month-1];

			if(month==2){
				if((year/4)!=parseInt(year/4)) maxDays=28;
				else maxDays = 29;
			}

			var str = '<option value="">선택</option>';
			for(var i=1; i<=maxDays; i++){
				str += '<option value="'+(String(i).length>1?i:'0'+i)+'">'+(String(i).length>1?i:'0'+i)+'</option>';
			}
			$(this).parents('td').find('select:eq(2)').html(str);
		}
	},
	appWrite: function(){
		$('.yearChange').bind('change', subFunc.appDateYearChange);
	},
	appDateYearChange: function(){
		if($(this).index() >5){
			if($(this).val()==''){
				$(this).parents('td').find('select:eq('+($(this).index()-2)+')').empty().html('<option value="">선택</option>');
				$(this).parents('td').find('select:eq('+($(this).index()-1)+')').empty().html('<option value="">선택</option>');
			}else{
				var str='<option value="">선택</option>';
				for(i=1; i<=12; i++){
					str += '<option value="'+(String(i).length>1?i:'0'+i)+'">'+(String(i).length>1?i:'0'+i)+'</option>';
				}
				$(this).parents('td').find('select:eq('+($(this).index()-2)+')').html(str);
				$(this).parents('td').find('select:eq('+($(this).index()-1)+')').empty().html('<option value="">선택</option>');
				$(this).parents('td').find('select:eq('+($(this).index()-2)+')').bind('change', subFunc.appDateMonthChange);
			}
		}else{
			if($(this).val()==''){
				$(this).parents('td').find('select:eq('+($(this).index()+1)+')').empty().html('<option value="">선택</option>');
				$(this).parents('td').find('select:eq('+($(this).index()+2)+')').empty().html('<option value="">선택</option>');
			}else{
				var str='<option value="">선택</option>';
				for(i=1; i<=12; i++){
					str += '<option value="'+(String(i).length>1?i:'0'+i)+'">'+(String(i).length>1?i:'0'+i)+'</option>';
				}
				$(this).parents('td').find('select:eq('+($(this).index()+1)+')').html(str);
				$(this).parents('td').find('select:eq('+($(this).index()+2)+')').empty().html('<option value="">선택</option>');
				$(this).parents('td').find('select:eq('+($(this).index()+1)+')').bind('change', subFunc.appDateMonthChange);
			}
		}
	},
	appDateMonthChange: function(){
		if($(this).index() >5){
			if($(this).val()==''){
				$(this).parents('td').find('select:eq('+($(this).index()-3)+')').empty().html('<option value="">선택</option>');
			}else{
				var year = $(this).prev().val();
				var month = $(this).val();
				var monthArray = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
				var maxDays = monthArray[month-1];

				if(month==2){
					if((year/4)!=parseInt(year/4)) maxDays=28;
					else maxDays = 29;
				}

				var str = '<option value="">선택</option>';
				for(var i=1; i<=maxDays; i++){
					str += '<option value="'+(String(i).length>1?i:'0'+i)+'">'+(String(i).length>1?i:'0'+i)+'</option>';
				}
				$(this).parents('td').find('select:eq('+($(this).index()-3)+')').html(str);
			}
		}else{
			if($(this).val()==''){
				$(this).parents('td').find('select:eq('+($(this).index())+')').empty().html('<option value="">선택</option>');
			}else{
				var year = $(this).prev().val();
				var month = $(this).val();
				var monthArray = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
				var maxDays = monthArray[month-1];

				if(month==2){
					if((year/4)!=parseInt(year/4)) maxDays=28;
					else maxDays = 29;
				}

				var str = '<option value="">선택</option>';
				for(var i=1; i<=maxDays; i++){
					str += '<option value="'+(String(i).length>1?i:'0'+i)+'">'+(String(i).length>1?i:'0'+i)+'</option>';
				}
				$(this).parents('td').find('select:eq('+($(this).index())+')').html(str);
			}
		}
	}
};

var boardFunc = {
	imgTxtPopInit: function(){
		$('#imgTxtBtnSubmit').bind('click', boardFunc.imgTxtPopSubmit);
	},
	imgTxtPopSubmit: function(){
		var $frm = $('form[name=Frm]');
		var $data = $frm.serialize();
		$.ajax({
			type: 'post',
			url : '/RiaSuperVisor/Board/Attach_Ajax.asp',
			data : $data,
			datatype: 'json',
			success: function(data){
				var ret = eval('(' + data +')');
				if(ret.state){
					window.close();
				}
			}
		});
	},
	imgFileTxt: function(idx){
		commonFunc.popCwin('/RiaSuperVisor/Board/Attach_Txt.asp?Idx='+idx, 'imgTxt', '500', '50', 'no');
	}
};

var cfFunc = {
	init: function(){
		cfFunc.listInit('1', $('input[name=ListIdx]').val());
	},
	listInit: function(page, listIdx){
		$('.thumList').load('/About/VideoAdvertise_Ajaxlist.asp', {
			'ListIdx' : listIdx,
			'Page' : page
		}, function(){
			$('.listAjax').unbind('click');
			$('.listAjax').bind('click', cfFunc.ajaxView);	
			$('.paging a').bind('click', cfFunc.pageLoad);
		});
	},
	pageLoad: function(){
		var page = $(this).data('page');
		cfFunc.listInit(page, $('input[name=ListIdx]').val());

		return false;
	},
	ajaxView: function(){
		var idx = $(this).data('idx');
		$('input[name=ListIdx]').val(idx);
		var $data = {
			'idx' : idx
		};
		$(this).parents('ul').find('a').removeClass('on');
		$(this).addClass('on');
		$.ajax({
			type: 'post',
			url : '/About/VideoAdvertise_Ajax.asp',
			data : $data,
			datatype: 'json',
			success: function(data){
				var ret = eval('(' + data +')');
				var viewWrap = $('.videoBox');
				viewWrap.find('#viewVideo').find('iframe').attr('src', 'http://www.youtube.com/embed/' + ret.strYoutubeUrl);
				viewWrap.find('#viewVideo').find('iframe').attr('title', ret.strSubject);
				viewWrap.find('.infoVideo').children('h5').html(ret.strSubject);
				viewWrap.find('.caption').html(ret.strSubtitles);
				viewWrap.find('.btn_captionDown').attr('href', '/library/asp/FileDown.asp?FilePath=/About/VideoAdvertise&FileName=' + ret.strVideoFile);
				viewWrap.find('#hdnUrl').attr('value', 'http://youtu.be/' + ret.strYoutubeUrl);
				
				document.title = '영상광고('+ret.strSubject+') | 엔제리너스';
			}
		});
		
		$('html').focus();
	}
}