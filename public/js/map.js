$(document).ready(function () {
    "use strict"

    //Google Map
    if (typeof google != 'undefined') {
        var mapCanvas = document.getElementById('map-canvas');
        var myLatlng = new google.maps.LatLng(60.391263, 5.322054); //your latitude and longitude
                                                                    // here
        var mapOptions = {
            zoom: 17,
            scrollwheel: false,
            center: myLatlng,
            styles: [{
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [{"color": "#f7f1df"}]
            }, {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [{"color": "#d0e3b4"}]
            }, {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry",
                "stylers": [{"visibility": "off"}]
            }, {"featureType": "poi", "elementType": "labels", "stylers": [{"visibility": "on"}]}, {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [{"color": "#fbd3da"}]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{"color": "#bde6ab"}]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{"visibility": "on"}]
            }, {"featureType": "road", "elementType": "labels", "stylers": [{"visibility": "on"}]},
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#ffe15f"}]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{"color": "#efd151"}]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#ffffff"}]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "black"}]
                }, {
                    "featureType": "transit.station.airport",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#cfb2db"}]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{"color": "#a2daf2"}]
                }]
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
        var marker = new google.maps.Marker({
            position: myLatlng,
            icon: 'img/mapmarker.png',
            map: map,
            title: 'title goes here'
        });
    }
});					