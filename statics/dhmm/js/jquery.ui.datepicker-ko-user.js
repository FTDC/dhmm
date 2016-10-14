/* Korean initialisation for the jQuery calendar extension. */
/* Written by DaeKwon Kang (ncrash.dk@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ko'] = {
		showOn: "button",
		buttonImage: "/images/common/btn_cal_user.gif",
		buttonImageOnly: true,
		buttonText: "",
		closeText: '닫기',
		prevText: '',
		nextText: '',
		currentText: '오늘',
		monthNames: ['1월','2월','3월','4월','5월','6월',
		'7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월',
		'7월','8월','9월','10월','11월','12월'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		weekHeader: 'Wk',
		dateFormat: 'yy.mm.dd',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true, //월을 년도 뒤에 표시
		changeMonth: false,
		minDate: "+1d", //최소날짜 설정, 금일 및 금일 이전 불가
		numberOfMonths: 1, //
		yearSuffix: '년'}; //년 단위 표기
	$.datepicker.setDefaults($.datepicker.regional['ko']);
});