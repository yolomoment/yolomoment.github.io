var news_datas = [{
        "title": "藍調傑士回來了! 父親節蛋糕預購中",
        "category": "最新活動",
        "category_color": "#F7931E",
        "start_date": "2018.07.26 ",
        "end_date": "2018.07.28",
        "img_src": "news_01"
    },
    {
        "title": "營養人氣小餅再一發  -「 燕麥蔓越莓餅 」",
        "category": "今日出爐",
        "start_date": "2018.07.22",
        "end_date": "2018.07.24",
        "img_src": "news_02"
    },
    {
        "title": "簡單美味的佼佼者-「青醬洋蔥軟法」",
        "category": "今日出爐",
        "start_date": "2018.07.19",
        "end_date": " 2018.07.21",
        "img_src": "news_03"
    },
    {
        "title": "好吃又高營養的解饞小點-「穀倉酥餅」",
        "category": "今日出爐",
        "start_date": "2018.07.15",
        "end_date": "2018.07.17",
        "img_src": "news_04"
    },
    {
        "title": "一種麵包店經典款的概念-「芋頭牛乳麵包」",
        "category": "今日出爐",
        "start_date": "2018. 07.12",
        "end_date": "2018. 07.14",
        "img_src": "news_05"
    },
    {
        "title": "炎炎夏日的回甘麵包-「原片冷泡茶杏仁湯種」",
        "category": "今日出爐",
        "start_date": "2018. 07.08 ",
        "end_date": "2018. 07.10",
        "img_src": "news_06"
    },
    {
        "title": "夏日冰涼甜品-「抹茶雪球」",
        "category": "今日出爐",
        "start_date": "2018. 07.05",
        "end_date": "2018. 07.07",
        "img_src": "news_07"
    }, {
        "title": "人氣小茶點-「蔓越莓小司康」",
        "category": "今日出爐",
        "start_date": "2018. 07.01 ",
        "end_date": "2018. 07.03",
        "img_src": "news_08"
    },
]

var carousel_datas = [{
        "img": "carousel_01.jpg",
        "logo": "banner_logo_01.png"
    },
    {
        "img": "carousel_02.jpg",
        "logo": "banner_logo_01.png"
    },
    {
        "img": "carousel_03.jpg",
        "logo": "banner_logo_01.png"
    }

]
var events_data = [
    "news_events_01.jpg",
    "news_events_02.png",
    "news_events_03.png"
]
var ingredients_datas = [{
        "img": "ingredients_07.svg",
        "title": "彰化健康豬肉",
        "p": "溪州肉品市場直送到在地市場的健康豬，無瘦肉精、無藥物殘留、屠宰過程符合國家安全衛生標準。",

    }, {
        "img": "ingredients_08.svg",
        "title": "HOLSEM舒康雞",
        "p": "100%植物性飼料、全程不使用抗生素。從飼養環境的溫度、通風、供水、飼料到電宰、分切、急速冷凍，舒康雞堅持每個環節都要最高品質。",
 
    }, {
        "img": "ingredients_02.svg",
        "title": "祕魯紅藜麥",
        "p": "與橄欖油、酪梨、藍梅並列為超級食物，深受養身派明仁推崇。富含多數人體必需胺基酸，屬植物蛋白質、鹼性食物，素食者特別受益。",
      
    }, {
        "img": "ingredients_03.svg",
        "title": "美國Hass酪梨",
        "p": "全球都在討論「重返年輕的超級食物」!富含單元不飽和脂肪酸和Omega-3，可延緩發炎、抗老、促進膽固醇下降。Hass品種口味清甜乾淨、口感極致細密，被譽為”森林裡的奶油”",
        "class" : "offset-lg-2"
    }, {
        "img": "ingredients_05.svg",
        "title": "水耕蔬菜",
        "p": "水耕農法可避免一般土耕栽培時職務受病菌及環境的危害。我們合作的農園有多年栽種經驗，精準提供異國種生菜所需的光、水、空氣、營養，健康爽脆，開啟你對野菜沉寂已久的迷戀。",
    }, {
        "img": "ingredients_06.svg",
        "title": "草本雞蛋",
        "p": "選用草本飼料飼養、通過藥物殘留檢驗的在地蛋農，紅仁蛋更通過清真認證及多項SGS檢驗合格。",
    }, {
        "img": "ingredients_01.svg",
        "title": "自製天然麵包",
        "p": "主張新美式風格烘焙，堅持使用在地當令優質食材與進口安心良品，絕不使用人工添加物及改良劑來增加討喜的口感及加速生產。長時間發酵的麵包含有益生菌，吃了不易脹氣。",
        
    }, {
        "img": "ingredients_04.svg",
        "title": "O-L!VE 100%<br>智利特級初榨橄欖油",
        "p": "Olisur橄欖莊園堅持採收後2小時內直接冷壓完成封存，保留新鮮風味及圓潤口感，酸價控制低於0.2%，清透黃綠油體，擁有草本香氣、伴隨綠番茄、杏仁尾韻，優雅迷人又健康！有「液體黃金」的美譽",
        
    }

]

var vue = new Vue({
    el: '#vue',
    data: {
        carousel_datas,
        news_datas,
        events_data,
        countOfPage: 6,
        currPage: 1,
        ingredients_datas,
    },
    computed: {
        pageStart: function () {
            return (this.currPage - 1) * this.countOfPage;
        },
        totalPage: function () {
            return Math.ceil(this.news_datas.length / this.countOfPage);
        }
    },
    methods: {
        setPage: function (idx) {
            if (idx <= 0 || idx > this.totalPage) {
                return;
            }
            this.currPage = idx;
        },
    },
})



var swiper = new Swiper('#banner', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});
var swiper = new Swiper('#events', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});
var swiper = new Swiper('#news', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {

        960: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,

        },
        500: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },

    },
});



function initMap() {
    var YOLOMOMENT = {
        lat: 24.082799984426536,
        lng: 120.5404963155293
    };
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 18,
            center: YOLOMOMENT,
            styles: [{
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "lightness": 33
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#EAD6C1"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#c5dac6"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{
                        "lightness": 20
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#c5c6c6"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e4d7c6"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#fbfaf7"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#acbcc9"
                        }
                    ]
                }
            ]
        });
    var marker = new google.maps.Marker({
        position: YOLOMOMENT,
        map: map
    });

}