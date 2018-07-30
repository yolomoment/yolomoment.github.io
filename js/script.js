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
    "news_events_01.jpg",
    "news_events_01.jpg"
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

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 24.0828,
            lng: 120.540496
        },

        zoom: 17,
        styles: [


            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [{
                    "weight": "2.00"
                }]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#9c9c9c"
                }]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "color": "#f2f2f2"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#7b7b7b"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#c8d7d4"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#070707"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }
        ]
    });
}