var wid = $(window).width();
var section1_height = $(".section1").outerHeight() - 10;

if (wid < 600) {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > section1_height) {

            $('.navbar').css("background-color", "#42210b");
            console.log("down");
        } else {

            $('.navbar').css("background-color", "rgba(0,0,0,0)");
            console.log("top");
        }

    });

};

$(".navbar-toggler").click(function(){
    console.log("clicked")
    $(".navbar").toggleClass("bg");
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