
/**
* 
* 1. 일반적인 경우
*    $angelinus.hn("HN코드", "메뉴명", "URL")
*    $angelinus.sn("SN코드", "메뉴명", "URL", {title:"비주얼영역타이틀", text:"비주얼영역텍스트"})
* 
* 2. 링크가 새창일 경우
*    $angelinus.hn("HN코드", "메뉴명", "URL", {target:"_blank"})
*    $angelinus.sn("SN코드", "메뉴명", "URL", {target:"_blank"})
* 
* 3. URL이 없고 클릭시 하위 첫번째 메뉴가 보여질 경우 (HN만 해당됨)
*    $angelinus.hn("HN코드", "메뉴명")
* 
* ## 쉼표, 쌍따옴표, 괄호 열고 닫기 주의해주세요.
* 
*/

$angelinus


.hn("1", "关于我们")
	.sn("1", "品牌介绍", "/Menu/HotProduct_List.asp", {
		  title: "당신을 미소 짓게 하는 천사의 커피"
		, text: "언제나 새로운 엔제리너스 커피 \n이달의 추천 메뉴를 만나보세요."
	})
	.sn("2", "企业形象", "/Menu/Menu.asp?MenuIdx=4", {
		  title: "신선한 전통 Espresso커피를 만나세요."
		, text: "신선하고 좋은 원두로 \n입맛에 꼭 맞는 커피를 제공하기 위해 언제나 최선을 다합니다."
	})
	.sn("3", "Angel-in-snow", "/Menu/Menu.asp?MenuIdx=2", {
		  title: "당신의 마음에 눈이 내립니다."
		, text: "오직 엔제리너스에서만 만나볼 수 있는 \n천사가 내려준 눈처럼 감미롭고 시원한 음료입니다."
	})
	.sn("4", "Tea & Beverages", "/Menu/Menu.asp?MenuIdx=3", {
		  title: "오늘은 왠지, 특별한 음료를 즐기고 싶으신가요?"
		, text: "엔제리너스는 그런 고객님들을 위해 \n커피 외에도 다양한 음료를 정성스럽게 준비해 두고 있습니다."
	})
	.sn("5", "Dessert", "/Menu/Menu.asp?MenuIdx=5&menuIdx1=8", {
		  title: "디저트도 부담 없이 가볍게 즐겨보세요."
		, text: "오늘 기분에 어울리는 달콤한 케이크와 따뜻한 베이커리가 여러분을 기다립니다."
	})
	.sn("6", "MD", "/Menu/Menu.asp?MenuIdx=7", {
		  title: "언제 어디서나 천사들과 함께 하세요."
		, text: "귀엽고 사랑스러운 천사들이 그려진 다양한 용품으로 \n언제 어디서나 엔제리너스와 함께 하세요."
	})
	.sn("7", "제품교환권", "/Giftcard/Giftcard.asp", {
		  title: "엔제리너스 제품교환권 소개입니다."
		, text: "특별한 날, 엔제리너스 제품교환권으로 당신의 마음을 전달해 보세요."
	})
/* 2014-11-17 추가 card  */
.hn("2", "CARD")
	.sn("1", "엔제리너스 카드란", "/Card/Card.asp", {
		  title: "엔제리너스커피의카드 소개입니다."
		, text: "매장에서 만날 수 있는 다양한 디자인의 엔제리너스 카드를<br />확인해보세요!"
	})
	.sn("2", "엔제리너스 카드 앱", "/Card/Card_App.asp", {
		  title: "엔제리너스커피의 엔제리너스 카드를 소개입니다."
		, text: "매장 방문없이 모바일 앱에서엔제리너스 카드 앱을<br />손쉽게 구매해보세요."
	})
	.sn("3", "엔제리너스 카드 앱 등록 /조회", "/Card/Card_Register.asp", {
		  title: "엔제리너스커피의 카드등록 /조회이용안내입니다."
		, text: "엔제리너스 카드 앱 이용 방법이 궁금하시다구요?"
	})
	.sn("4", "카드 Q&A 모아보기", "/Card/Card_qna.asp", {
		  title: "엔제리너스커피의 카드 Q&A 모아보기 입니다."
		, text: ""
	})
	.sn("5", "엔젤 E - 프로모션 스탬프", "/Card/Estemp.asp", {
		  title: "엔제리너스커피의 E - 프로모션 스탬프입니다."
		, text: "엔젤 E - 프로모션 스탬프에 대해 살펴보세요."
	})

	
.hn("3", "EVENT")
	.sn("1", "진행중인 이벤트", "/Event/Event_List.asp", {
		  title: "천사가 드리는 행운을 놓치지 마세요!"
		, text: "엔제리너스에서는 다양한 이벤트를 준비하고 있습니다. \n천사가 드리는 행운을 꼭 잡으세요!"
	})
	.sn("2", "종료된 이벤트", "/Event/EventEnd_List.asp", {
		  title: "천사가 드리는 행운을 놓치지 마세요!"
		, text: "엔제리너스에서 준비한 다양한 이벤트에 참여하셨나요? \n참여하셨다면 당첨여부도 꼭 확인하세요."
	})
	//.sn("3", "천사의 앨범", "/Event/AngelAlbum_Banner.asp", {
	//	  title: "행복하고 즐거운 사진을 함께 나누어요."
	//	, text: "당신의 천사들과 함께한 행복하고 즐거운 사진을 올려주세요. 추첨을 통해 다양한 경품을 보내드립니다."
	//})
	.sn("4", "당첨자 발표", "/Event/Prizewinner_List.asp", {
		  title: "천사가 드리는 행운을 놓치지 마세요!"
		, text: "엔제리너스에서 진행한 다양한 이벤트에 참여하셨다면 \n천사가 보내드리는 행운을 확인해 보세요!"
	})
	//.sn("5", "Culture in us", "/Cultureinus/cultureinus_List.asp", {
	//	  title: "천사가 드리는 행운을 놓치지 마세요!"
	//	, text: "엔제리너스에서 진행한 다양한 이벤트를 준비하고 있습니다. \n천사가 드리는 행운을 꼭 잡으세요!"
	//})
	
	
	
.hn("4", "ABOUT US")
	.sn("1", "엔제리너스 소개", "/About/EnterpriseIntroduce.asp", {
		  title: ""
		, text: ""
	})
	//.sn("2", "브랜드 소개", "/About/AngelinusIntroduce.asp", {
	//	  title: "여러분과 항상 함께하는 엔제리너스커피!"
	//	, text: "최상의 커피와 편안한 공간을 제공하는 \n엔제리너스의 브랜드스토리를 만나보세요."
	//})
	//.sn("3", "캐릭터 소개", "/About/AngelCharacter.asp", {
	//	  title: "엔제리너스 천사들의 알콩달콩한 이야기"
	//	, text: "엔제리너스의 귀엽고 깜찍한 천사 친구들을 소개합니다."
	//})
	.sn("2", "엔제리너스 BI", "/About/BI.asp", {
		  title: ""
		, text: ""
	})
	.sn("3", "엔제리너스 매장", "/About/store.asp", {
		  title: ""
		, text: ""
	})
	.sn("8", "Specialty Coffee", "/About/specialty.asp", {
		  title: "최고의 상태를 유지한 단 한잔의 커피를 만나보세요."
		, text: "스페셜티 점포 바리스타는\n완벽한 커피 한 잔을 만들어 내는 전문가입니다."
	})
	.sn("4", "사회공헌", "/About/SocietyContribute_2014.asp", {
		  title: "엔제리너스와 함께하는 따뜻한 세상 만들기"
		, text: "엔제리너스는 다양한 사회공헌을 통해 \n좀 더 따뜻한 세상을 만들기 위해 노력하고 있습니다."
	})
	.sn("5", "광고 자료", "/About/VideoAdvertise_List.asp", {
		  title: "광고 속에서 엔제리너스커피를 만나보세요."
		, text: "엔제리너스커피와 천사, 광고 속에서 만나보세요."
	})
	.sn("6", "새소식", "/Board/Board.asp?BoardIdx=1", {
		  title: "엔제리너스의 새로운 소식입니다."
		, text: "엔제리너스와 관련된 새로운 소식을 빠르고 정확하게 알려드립니다."
	})
	.sn("7", "Globalization", "/About/globalization.asp", {
		  title: ""
		, text: ""
	})
	
	.hn("5", "OUR COFFEE")
	//.sn("1", "About Coffee", "/WholeBean/BeanStory.asp", {
	//	  title: "맛있는 Whole Bean을 찾아서"
	//	, text: "엔제리너스 천사들이 전 세계를 여행하면서 찾은 \n맛있는 Whole Bean Story를 소개합니다."
	//})
	//.sn("2", "Pure Roasting", "/WholeBean/PureBean.asp", {
	//	  title: "천사가 내린 커피, 엔제리너스"
	//	, text: "그 천상의 맛과 향의 비밀을 아시나요? \n엔제리너스 천사들만의 맛있는 비밀을 살짝 알려드릴께요!"
	//})
	//.sn("3", "Fresh Bean", "/WholeBean/BeanPlant.asp", {
	//	  title: "신선한 커피의 비밀, 엔제리너스"
	//	, text: "엔제리너스 원두의 체계적이고 아전한 유통과정으로 \n더욱 신선하고 맛있는 커피를 약속할께요!"
	//})
	//.sn("2", "Coffee Tip", "/WholeBean/CoffeeTip_List.asp", {
	//	  title: "천사의 커피를 즐기는 방법"
	//	, text: "더 맛있게! 더 똑똑하게! \n아는 만큼 더 맛있어지는 커피이야기를 소개합니다."
	//})
	.sn("1", "A cup of perfection", "/WholeBean/perfection.asp", {
		  title: ""
		, text: ""
	})
	.sn("2", "Whole Bean", "/Menu/menu_todaycoffee.asp", {
		  title: "엔제리너스 커피를 집에서도 느껴보세요."
		, text: "정성껏 준비한 최고급 원두로 \n이제 집에서도 그윽한 커피향과 맛을 함께 하실 수 있습니다."
	})
	.sn("3", "Coffee Academy", "/WholeBean/CoffeeSchool_Info.asp", {
		  title: "커피와 더 친해지세요!"
		, text: "더욱 다양하고 재미있게 커피를 즐기는 방법 \n엔제리너스 커피 아카데미에서 확인하세요."
	})
//	.sn("4", "Barista Championship", "http://www.abwg.co.kr", {
//		  target: "_blank"
//	})
	
.hn("6", "STORE")
	.sn("1", "매장찾기", "/Shop/Shop_List.asp", {
		  title: "천사와 커피를 마셔본 적 있나요?"
		, text: "Angel-in-us는 재미있고 따뜻한 공간으로 여러분을 기다립니다."
	})
	.sn("2", "케이터링 서비스", "/Shop/CateringService_Info.asp", {
		  title: "엔제리너스의 천사가 여러분을 직접 찾아갑니다."
		, text: "가까운 매장을 선택하신 후, 원하시는 서비스를 신청하시면 \n천사가 직접 엔제리너스와 커피와 함께 여러분을 찾아갑니다."
	})
	.sn("3", "특설매장 서비스", "/Shop/SpeciallyShopService_Info.asp", {
		  title: "엔제리너스의 천사를 언제 어디서나 만나보세요."
		, text: "축제, 박람회, 세미나, 공연장 등 \n어디든지 엔제리너스커피 임시매장을 설치해드립니다."
	})
	.sn("4", "이달의 매장음악", $G_SERVER_URL+"/Shop/MusicOfStore.asp", {
		  title: "천사와 함께 즐기는 매장음악"
		, text: "오늘 엔제리너스 매장에서 듣던 노래가 궁금하시죠? \n커피만큼이나 따뜻한 엔제리너스 매장음악을 소개합니다."
	})
	//.sn("5", "사연과 신청곡", "/Shop/StoryAndSongRequestApplicant_List.asp", {
	//	  title: "천사와 함께 듣고 싶은 노래"
	//	, text: "엔제리너스 매장에서 듣고 싶은 노래가 있으세요? \n사연과 신청곡을 남겨주세요."
	//})
	
.hn("7", "MYPAGE")
	.sn("1", "회원정보 변경", "/Mypage/MyInfo.asp", {
		  title: "회원 정보를 변경하시겠어요?"
		, text: "아래에서 원하시는 회원정보 변경 항목을 클릭하세요. \n회원님의 정보는 롯데타운에서 안전하게 통합 관리되고 있습니다."
	})
	//.sn("2", "My Page", "/Mypage/MyPage.asp", {
	//	  title: "엔제리너스의 My Page 입니다."
	//	, text: "궁금하신 사항에 대한 상담 내역과 엔제리너스 쇼핑몰 관련된 쇼핑정보를 확인하실 수 있습니다."
	//})
	.sn("3", "상담 내역", "/Mypage/voc_list.asp", {
		  title: "엔제리너스의 My Page 입니다."
		, text: "궁금하신 사항에 대한 상담 내역과 엔제리너스 쇼핑몰 관련된 쇼핑정보를 확인하실 수 있습니다."
	})
	
	
	
.hn("8", "고객문의")
	.sn("1", "FAQ", "/Board/Board.asp?BoardIdx=2", {
		  title: "자주 묻는 질문과 답변입니다."
		, text: "엔제리너스에 대해 가장 궁금해 하시는 내용을 모았습니다. \n먼저 살펴 보시면, 보다 빠른 문제 해결에 도움이 됩니다."
	})
	.sn("2", "고객의 소리", "/Voc/Voc_Write.asp", {
		  title: "무엇을 도와 드릴까요?"
		, text: "엔제리너스를 이용하시면서 불편하거나 궁금한 점이 있으신가요? \n고객의 소리 게시판을 통해 문의해주세요."
	})
	
	
	
.hn("9", "Franchise")
	.sn("1", "엔제리너스 특장점", "/About/SpecialityAngelinus.asp", {
		  title: "여러분의 성공을 위한 수호천사가 되겠습니다."
		, text: "엔제리너스만의 차별화된 시스템과 축적된 노하우로 \n높은 수익률의 성공적인 사업이 될 수 있도록 귀하를 도와드리겠습니다."
	})
	.sn("2", "개설조건 및 절차", "/About/FranchiseProcess.asp", {
		  title: "꿈을 실현하기 위한 합리적인 계단을 밟아보세요."
		, text: "미국 시애틀 소재 자바트레이딩사가 보증하는 세계적인 품질 \n엔제리너스만의 노하우로 성공적인 사업이 될 수 있도록 도와 드리겠습니다."
	})
	.sn("3", "투자예상금액", "/About/FranchiseInvest.asp", {
		  title: "성공을 위한 확실한 투자, 엔제리너스"
		, text: "엔제리너스만의 차별화된 시스템과 축적된 노하우로 \n높은 수익률의 성공적인 사업이 될 수 있도록 귀하를 도와 드리겠습니다."
	})
	.sn("4", "창업자금 대출안내", "/About/FranchiseLoan.asp", {
		  title: "성공을 위한 확실한 투자, 엔제리너스"
		, text: "자바트레이딩사가 보증하는 세계적인 품질, 엔제리너스만의 노하우로 \n높은 수익률의 성공적인 사업이 될 수 있도록 도와 드리겠습니다."
	})
	.sn("5", "개설관련 FAQ", "/Board/Board_Faq.asp", {
		  title: "가맹점 개설 관련 자주 묻는 질문입니다."
		, text: "가장 많이 궁금해 하시는 가맹점 개설 관련 질문을 모았습니다. \n문의 사항이 있으시면, 확인해 보세요. 빠른 문제 해결에 도움이 됩니다."
	})
	.sn("6", "점포추천", "/About/ShopRecommend_List.asp", {
		  title: "엔제리너스가 널리 퍼질 수 있도록 도와주세요."
		, text: "주위에 엔제리너스가 입점할 수 있는 좋은 장소가 있으면 알려주세요."
	})
	.sn("7", "가맹설명회신청", "/About/AffiliatedShopSeminar_List.asp", {
		  title: "천사가 전하는 창업 가이드"
		, text: "롯데와 함께하는 엔제리너스커피 가맹사업 설명회에 참여하세요! \n창업자에게는 특별한 혜택들이 주어집니다."
	})
	.sn("8", "1:1 개설상담", "/About/OpenConsult_Write.asp", {
		  title: "엔제리너스의 문은 항상 활짝 열려있습니다."
		, text: "가맹점 개설과 관련하여 궁금한 점이 있으시면 언제든지 1:1 개설 상담을 통해 문의해 주세요. \n성심 성의껏 답변해 드리도록 하겠습니다."
	})
	.sn("9", "찾아오시는길", "/About/AngelMap.asp", {
		  title: "엔제리너스의 문은 항상 활짝 열려있습니다."
		, text: "각 지역별 엔제리너스커피 사업부로 오시는 길을 안내해 드립니다. \n엔제리너스커피는 우리의 가족이 될 여러분을 항상 기다리고 있습니다."
	})
	
	
	
.hn("10", "RECRUIT")
	.sn("1", "채용안내", "/Recruit/RecruitInfo.asp", {
		  title: "엔제리너스를 이끌어 갈 주인공은 여러분입니다."
		, text: "엔제리너스에서 밝은 미래를 꿈꾸세요. \n그 꿈이 현실이 되도록 엔제리너스가 함께 합니다."
	})
	.sn("2", "채용공고", "/Recruit/Recruit_List.asp", {
		  title: "엔제리너스커피의 문은 활짝 열려 있습니다."
		, text: "엔제리너스커피는 우리의 가족이 될 여러분을 항상 기다리고 있습니다. \n힘차게 문을 두드리세요."
	})
	
	
	
.hn("11", "LOGIN")
	.sn("1", "Login", "/Member/Login.asp", {
		  title: "엔제리너스와 행복한 시간되세요."
		, text: "로그인을 하시면 더욱 다양한 엔제리너스의 서비스를 이용하실 수 있습니다."
	})
	
	
.hn("12", "사이트 이용약관")
	.sn("1", "사이트 이용약관", "/Etc/terms.asp", {
		  title: "엔제리너스의 사이트 이용약관 입니다."
		, text: "사이트 이용약관을 확인하실 수 있습니다."
	})
	.sn("2", "개인정보 취급방침", "/Etc/privacy.asp", {
		  title: "엔제리너스의 개인정보 취급방침 입니다."
		, text: "개인정보 취급방침을 확인하실 수 있습니다."
	})
	.sn("3", "영상정보처리기기 운영 및 관리 방침", "/Etc/media.asp", {
		  title: "엔제리너스의 영상정보처리기기 운영 및 관리 방침 입니다."
		, text: "영상정보처리기기 운영 및 관리 방침을 확인하실 수 있습니다."
	})


	
;
