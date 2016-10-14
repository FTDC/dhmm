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
        title: ""
        , text: ""
    })
    .sn("2", "企业形象", "/Menu/Menu.asp?MenuIdx=4", {
        title: ""
        , text: ""
    })
    .sn("3", "VI 展示", "/Menu/Menu.asp?MenuIdx=2", {
        title: ""
        , text: ""
    })
    .sn("4", "企业文化", "/Menu/Menu.asp?MenuIdx=3", {
        title: ""
        , text: ""
    })
    .sn("5", "发展历程", "/Menu/Menu.asp?MenuIdx=5&menuIdx1=8", {
        title: ""
        , text: ""
    })
    /* 2014-11-17 추가 card  */
    .hn("2", "产品中心")
    .sn("1", "手工芋圆", "/Card/Card.asp", {
        title: ""
        , text: ""
    })
    .sn("2", "滑嫩鲜草", "/Card/Card_App.asp", {
        title: ""
        , text: ""
    })
    .sn("3", "传世豆花", "/Card/Card_Register.asp", {
        title: ""
        , text: ""
    })
    .sn("4", "妈妈好饮", "/Card/Card_qna.asp", {
        title: ""
        , text: ""
    })
    .sn("5", "清凉冰品", "/Card/Estemp.asp", {
        title: ""
        , text: ""
    })
    .sn("6", "醇珍奶昔", "/Card/Estemp.asp", {
        title: ""
        , text: ""
    })
    .sn("7", "台式双皮奶", "/Card/Estemp.asp", {
        title: ""
        , text: ""
    })
    .sn("8", "豆妈酸奶", "/Card/Estemp.asp", {
        title: ""
        , text: ""
    })
    .sn("9", "妈妈鸡排", "/Card/Estemp.asp", {
        title: ""
        , text: ""
    })
    .sn("10", "冬季热品", "/Card/Estemp.asp", {
        title: ""
        , text: ""
    })
    .sn("11", "其他", "/Card/Estemp.asp", {
        title: ""
        , text: ""
    })


    .hn("3", "店铺展示")
    .sn("1", "店铺展示", "/Event/Event_List.asp", {
        title: ""
        , text: ""
    })

    .hn("4", "服务支持")
    .sn("1", "品牌优势", "/About/EnterpriseIntroduce.asp", {
        title: ""
        , text: ""
    })
    .sn("2", "流行爆品", "/About/AngelinusIntroduce.asp", {
        title: ""
        , text: ""
    })
    .sn("3", "广告投入", "/About/AngelCharacter.asp", {
        title: ""
        , text: ""
    })
    .sn("4", "工程制图", "/About/BI.asp", {
        title: ""
        , text: ""
    })
    .sn("5", "企划营销", "/About/store.asp", {
        title: ""
        , text: ""
    })
    .sn("6", "实战培训", "/About/specialty.asp", {
        title: ""
        , text: ""
    })
    .sn("7", "物流体系", "/About/SocietyContribute_2014.asp", {
        title: ""
        , text: ""
    })
    .sn("8", "运营指导", "/About/VideoAdvertise_List.asp", {
        title: ""
        , text: ""
    })


    .hn("5", "加盟中心")

    .sn("1", "加盟政策", "/WholeBean/perfection.asp", {
        title: ""
        , text: ""
    })
    .sn("2", "加盟流程", "/Menu/menu_todaycoffee.asp", {
        title: ""
        , text: ""
    })
    .sn("3", "常见问题", "/WholeBean/CoffeeSchool_Info.asp", {
        title: ""
        , text: ""
    })
    .sn("4", "案例分析", "http://www.abwg.co.kr", {
        target: "_blank"
    })

    .hn("6", "新闻中心")
    .sn("1", "联系我们", "/Shop/Shop_List.asp", {
        title: ""
        , text: ""
    })
    .sn("2", "在线留言", "/Shop/CateringService_Info.asp", {
        title: ""
        , text: ""
    })
// .sn("3", "특설매장 서비스", "/Shop/SpeciallyShopService_Info.asp", {
// 	  title: "엔제리너스의 천사를 언제 어디서나 만나보세요."
// 	, text: "축제, 박람회, 세미나, 공연장 등 \n어디든지 엔제리너스커피 임시매장을 설치해드립니다."
// })
// .sn("4", "이달의 매장음악", $G_SERVER_URL+"/Shop/MusicOfStore.asp", {
// 	  title: "천사와 함께 즐기는 매장음악"
// 	, text: "오늘 엔제리너스 매장에서 듣던 노래가 궁금하시죠? \n커피만큼이나 따뜻한 엔제리너스 매장음악을 소개합니다."
// })
//.sn("5", "사연과 신청곡", "/Shop/StoryAndSongRequestApplicant_List.asp", {
//	  title: "천사와 함께 듣고 싶은 노래"
//	, text: "엔제리너스 매장에서 듣고 싶은 노래가 있으세요? \n사연과 신청곡을 남겨주세요."
//})

// .hn("7", "MYPAGE")
// 	.sn("1", "회원정보 변경", "/Mypage/MyInfo.asp", {
// 		  title: ""
// 		, text: ""
// 	})
// 	//.sn("2", "My Page", "/Mypage/MyPage.asp", {
// 	//	  title: "엔제리너스의 My Page 입니다."
// 	//	, text: "궁금하신 사항에 대한 상담 내역과 엔제리너스 쇼핑몰 관련된 쇼핑정보를 확인하실 수 있습니다."
// 	//})
// 	.sn("3", "상담 내역", "/Mypage/voc_list.asp", {
// 		  title: ""
// 		, text: ""
// 	})
//
//
//
// .hn("8", "고객문의")
// 	.sn("1", "FAQ", "/Board/Board.asp?BoardIdx=2", {
// 		  title: "자주 묻는 질문과 답변입니다."
// 		, text: "엔제리너스에 대해 가장 궁금해 하시는 내용을 모았습니다. \n먼저 살펴 보시면, 보다 빠른 문제 해결에 도움이 됩니다."
// 	})
// 	.sn("2", "고객의 소리", "/Voc/Voc_Write.asp", {
// 		  title: "무엇을 도와 드릴까요?"
// 		, text: "엔제리너스를 이용하시면서 불편하거나 궁금한 점이 있으신가요? \n고객의 소리 게시판을 통해 문의해주세요."
// 	})
//
//
//
// .hn("9", "Franchise")
// 	.sn("1", "엔제리너스 특장점", "/About/SpecialityAngelinus.asp", {
// 		  title: "여러분의 성공을 위한 수호천사가 되겠습니다."
// 		, text: "엔제리너스만의 차별화된 시스템과 축적된 노하우로 \n높은 수익률의 성공적인 사업이 될 수 있도록 귀하를 도와드리겠습니다."
// 	})
// 	.sn("2", "개설조건 및 절차", "/About/FranchiseProcess.asp", {
// 		  title: "꿈을 실현하기 위한 합리적인 계단을 밟아보세요."
// 		, text: "미국 시애틀 소재 자바트레이딩사가 보증하는 세계적인 품질 \n엔제리너스만의 노하우로 성공적인 사업이 될 수 있도록 도와 드리겠습니다."
// 	})
// 	.sn("3", "투자예상금액", "/About/FranchiseInvest.asp", {
// 		  title: "성공을 위한 확실한 투자, 엔제리너스"
// 		, text: "엔제리너스만의 차별화된 시스템과 축적된 노하우로 \n높은 수익률의 성공적인 사업이 될 수 있도록 귀하를 도와 드리겠습니다."
// 	})
// 	.sn("4", "창업자금 대출안내", "/About/FranchiseLoan.asp", {
// 		  title: "성공을 위한 확실한 투자, 엔제리너스"
// 		, text: "자바트레이딩사가 보증하는 세계적인 품질, 엔제리너스만의 노하우로 \n높은 수익률의 성공적인 사업이 될 수 있도록 도와 드리겠습니다."
// 	})
// 	.sn("5", "개설관련 FAQ", "/Board/Board_Faq.asp", {
// 		  title: "가맹점 개설 관련 자주 묻는 질문입니다."
// 		, text: "가장 많이 궁금해 하시는 가맹점 개설 관련 질문을 모았습니다. \n문의 사항이 있으시면, 확인해 보세요. 빠른 문제 해결에 도움이 됩니다."
// 	})
// 	.sn("6", "점포추천", "/About/ShopRecommend_List.asp", {
// 		  title: "엔제리너스가 널리 퍼질 수 있도록 도와주세요."
// 		, text: "주위에 엔제리너스가 입점할 수 있는 좋은 장소가 있으면 알려주세요."
// 	})
// 	.sn("7", "가맹설명회신청", "/About/AffiliatedShopSeminar_List.asp", {
// 		  title: "천사가 전하는 창업 가이드"
// 		, text: "롯데와 함께하는 엔제리너스커피 가맹사업 설명회에 참여하세요! \n창업자에게는 특별한 혜택들이 주어집니다."
// 	})
// 	.sn("8", "1:1 개설상담", "/About/OpenConsult_Write.asp", {
// 		  title: "엔제리너스의 문은 항상 활짝 열려있습니다."
// 		, text: "가맹점 개설과 관련하여 궁금한 점이 있으시면 언제든지 1:1 개설 상담을 통해 문의해 주세요. \n성심 성의껏 답변해 드리도록 하겠습니다."
// 	})
// 	.sn("9", "찾아오시는길", "/About/AngelMap.asp", {
// 		  title: "엔제리너스의 문은 항상 활짝 열려있습니다."
// 		, text: "각 지역별 엔제리너스커피 사업부로 오시는 길을 안내해 드립니다. \n엔제리너스커피는 우리의 가족이 될 여러분을 항상 기다리고 있습니다."
// 	})
//
//
//
// .hn("10", "RECRUIT")
// 	.sn("1", "채용안내", "/Recruit/RecruitInfo.asp", {
// 		  title: "엔제리너스를 이끌어 갈 주인공은 여러분입니다."
// 		, text: "엔제리너스에서 밝은 미래를 꿈꾸세요. \n그 꿈이 현실이 되도록 엔제리너스가 함께 합니다."
// 	})
// 	.sn("2", "채용공고", "/Recruit/Recruit_List.asp", {
// 		  title: "엔제리너스커피의 문은 활짝 열려 있습니다."
// 		, text: "엔제리너스커피는 우리의 가족이 될 여러분을 항상 기다리고 있습니다. \n힘차게 문을 두드리세요."
// 	})
//
//
//
// .hn("11", "LOGIN")
// 	.sn("1", "Login", "/Member/Login.asp", {
// 		  title: "엔제리너스와 행복한 시간되세요."
// 		, text: "로그인을 하시면 더욱 다양한 엔제리너스의 서비스를 이용하실 수 있습니다."
// 	})
//
//
// .hn("12", "사이트 이용약관")
// 	.sn("1", "사이트 이용약관", "/Etc/terms.asp", {
// 		  title: "엔제리너스의 사이트 이용약관 입니다."
// 		, text: "사이트 이용약관을 확인하실 수 있습니다."
// 	})
// 	.sn("2", "개인정보 취급방침", "/Etc/privacy.asp", {
// 		  title: "엔제리너스의 개인정보 취급방침 입니다."
// 		, text: "개인정보 취급방침을 확인하실 수 있습니다."
// 	})
// 	.sn("3", "영상정보처리기기 운영 및 관리 방침", "/Etc/media.asp", {
// 		  title: "엔제리너스의 영상정보처리기기 운영 및 관리 방침 입니다."
// 		, text: "영상정보처리기기 운영 및 관리 방침을 확인하실 수 있습니다."
// 	})


;
