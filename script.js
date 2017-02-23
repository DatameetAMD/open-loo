// Initialize Firebase
var config = {
    apiKey: "AIzaSyAyo1ZF-MNzpUF0pHPfDgVhYNRGHt8RV58",
    authDomain: "open-ahmedabad.firebaseapp.com",
    databaseURL: "https://open-ahmedabad.firebaseio.com",
    storageBucket: "open-ahmedabad.appspot.com",
    messagingSenderId: "140801138096"
};
firebase.initializeApp(config);

var database = firebase.database();

var inputLatitudeDOM = document.getElementById("inputLatitude");
var inputLongitudeDOM = document.getElementById("inputLongitude");
var inputNameDOM = document.getElementById("inputName");
var inputAddressDOM = document.getElementById("inputAddress");
var inputFeesDOM = document.getElementById("inputFees");
var inputRatingDOM = document.getElementById("inputRating");

if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(showPosition, function(error){
         alert(error.message);
    }, {
         enableHighAccuracy: true
              ,timeout : 5000
    });

function submitData() {
    var lat = inputLatitudeDOM.value;
    var long = inputLongitudeDOM.value;
    var name = inputNameDOM.value;
    var address = inputAddressDOM.value;
    var fees = inputFeesDOM.value;
    var rating = inputRatingDOM.value;

    database.ref('loo/' + uuid()).set({
        latitude: lat,
        longitude: long,
        name: name,
        address: address,
        fees: fees,
        cleanliness: rating
    });
}

function showPosition(position) {
    inputLatitudeDOM.value = position.coords.latitude;
    inputLongitudeDOM.value = position.coords.longitude;
}

function uuid(){
    var d = new Date().getTime();
    var uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });

    return uid;
}