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
        "img_src": "/news_02"
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
        "img": "index/carousel_01.jpg",
        "logo": "index/banner_logo_01.png"
    },
    {
        "img": "index/carousel_02.jpg",
        "logo": "index/banner_logo_01.png"
    },
    {
        "img": "index/carousel_03.jpg",
        "logo": "index/banner_logo_01.png"
    }

]
var events_data = [
    "news_events_01.jpg",
    "news_events_02.png",
    "news_events_03.png"
]

var vue = new Vue({
    el: '#vue',
    data: {
        carousel_datas,
        news_datas,
        events_data,
        countOfPage: 6,
        currPage: 1,
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
    var YOLOMOMENT = {lat: 24.082799984426536,lng: 120.5404963155293};
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 18, 
            center: YOLOMOMENT,
            styles:[
                {
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [
                        {
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
                    "stylers": [
                        {
                            "color": "#f2e5d4"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c5dac6"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels",
                    "stylers": [
                        {
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
                    "stylers": [
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c5c6c6"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e4d7c6"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#fbfaf7"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#acbcc9"
                        }
                    ]
                }
            ]
        });
    var marker = new google.maps.Marker({position: YOLOMOMENT, map: map});

}