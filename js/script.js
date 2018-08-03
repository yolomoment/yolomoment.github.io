
var vue = new Vue({
    el: '#vue',
    data: {
        carousel_datas,
        news_datas,
        events_data,
        countOfPage: 6,
        countOfPage_phone: 3,
        currPage: 1,
        currPage_phone: 1,
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
    speed: 1500,
    autoplay: {
        delay: 5000,
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
var swiper = new Swiper('#events', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
var swiper = new Swiper('#news', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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

$(".pagination a").on("click", function (e) {
    $('html, body').animate({
        scrollTop: $(".section3").offset().top-80 // 只需修改此處
    }, 100); // 750是滑動的時間，單位為毫秒
    e.preventDefault();
});

$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop)
    if(scrollTop >600){
        $(".fa-chevron-circle-up").css("bottom","100px");
    }else{
        $(".fa-chevron-circle-up").css("bottom","-100px");
    }
})
$(".fa-chevron-circle-up").on("click", function (e) {
    $('html, body').animate({
        scrollTop: $(".section1").offset().top-80 // 只需修改此處
    }, 1000); // 750是滑動的時間，單位為毫秒
    e.preventDefault();
});

