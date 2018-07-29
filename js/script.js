var news_datas = [{
    "news": {
        "news_01": {
            "title": "敬老白金周",
            "category": "活動",
            "start_date": "2018.07.29",
            "end_date": "2018.08.03",
            "img_src": "..img/news/news_01.jpg"
        },
        "news_02": {
            "title": "敬老白金周",
            "category": "活動",
            "start_date": "2018.07.29",
            "end_date": "2018.08.03",
            "img_src": "..img/news/news_01.jpg"
        },
        "news_03": {
            "title": "敬老白金周",
            "category": "活動",
            "start_date": "2018.07.29",
            "end_date": "2018.08.03",
            "img_src": "..img/news/news_01.jpg"
        }
    }
}]

var test_datas = {
    test: [
        "index/carousel_01.jpg",
        "index/carousel_02.jpg",
        "index/carousel_03.jpg",
        "index/carousel_04.jpg"
    ]
};
var vue = new Vue({
    el: '#vue',
    data: test_datas
})
var swiper = new Swiper('#banner', {
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
});