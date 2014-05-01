var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var options = {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI
        };

        navigator.camera.getPicture(function(imageData) {
            alert(imageData);
        }, function() {
            alert('fail');
        }, options);
    }
};

app.initialize();
