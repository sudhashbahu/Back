
var Lat, Long, ctr, dist;
var homeLat, homeLong;
var SMSNum, SMSSet;
var prevSend;



function setSMS() {
    SMSNum = document.getElementById('SMSNum').value;
    SMSSet = true;
}

function changeText(elem, changeVal) {
     if ((elem.textContent) && (typeof (elem.textContent) != "undefined")) {
          elem.textContent = changeVal;
     } else {
          elem.innerText = changeVal;
     }
}

var app = {
     // Application Constructor
     initialize: function() {
         document.addEventListener('deviceready', function () {
             var Element = document.getElementById('AppText');
             changeText(Element, 'Started');

             document.getElementById('SetHome').style.visibility = "hidden";

             Lat = 0; tLong = 0; ctr = 0; homeLat = 0; homeLong = 0; SMSNum = 0; dist = 0; prevSend = Date.now(); SMSSet = false;

             //navigator.geolocation.watchPosition(onSuccess, onError, { maximumAge: 3000, enableHighAccuracy: false });

             cordova.plugins.backgroundMode.setDefaults({ title: 'Patient Monitoring', text: 'Tracking ...'});
             // Enable background mode
             cordova.plugins.backgroundMode.enable();

             // Called when background mode has been activated
             cordova.plugins.backgroundMode.onactivate = function () {
                 setTimeout(function (){
                     // Modify the currently displayed notification
                     cordova.plugins.backgroundMode.configure({
                         title: 'Patient Monitoring', text: 'Tracking ...' + Date.now()
                     });
                 },2000);
             }
         }, false);
     }
};