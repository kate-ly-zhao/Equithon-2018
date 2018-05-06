function register() {
    var txt;
    var user = prompt("Please enter your name: ");
    if (user == null || user == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + user + "! How are you today?";
    }

    document.getElementById("register").innerHTML = txt;
}

function contact() {
    var url = "http://www.youtube.com";
    window.location(url);
}

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}