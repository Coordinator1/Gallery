gallery.controller('ContactsCtrl', function($scope, $ionicModal, $http, $ionicPopup, $timeout, $cordovaGeolocation) {

    // Start Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: { lat: 55.634009, lng: 37.3819383 }
    });
    var geocoder = new google.maps.Geocoder();

    geocodeAddress(geocoder, map);

    var infowindow = new google.maps.InfoWindow;
    var infowindow = new google.maps.InfoWindow;

    function geocodeAddress(geocoder, resultsMap) {
        var address = "Москва, Родниковая  20";
        geocoder.geocode({ 'address': address }, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                resultsMap.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });

                // To add the marker to the map, call setMap();
                infowindow.setContent(address);
                infowindow.open(map, marker);
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };

    /*$scope.initMap = function() {
        var posOptions = { timeout: 10000, enableHighAccuracy: false };
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function(position) {
                var lat = position.coords.latitude
                var long = position.coords.longitude
            }, function(err) {
                // error
            });
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: { lat: 55.634009, lng: 37.3819383  }
        });
    };*/

    /*Start Alert after submit and if input was null*/
    $scope.showAlertOrderError = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Для отправки заявки<br> введите имя, почту, а так же поле комментария.'
        });
    };

    // A confirm dialog
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Ваша заявка принята'
        });
    };

    /*Start Send form*/
    $scope.order = {};

    $scope.submit = function() {
        //URL send email
        if ($scope.order.email == null || $scope.order.name == null || $scope.order.message == null) {
            $scope.showAlertOrderError();
        }
        if ($scope.order.email && $scope.order.name && $scope.order.message) {
            $http.post('http://dev-topsu.ru/mailgal.php', {
                submit: true,
                title: "АстаМ",
                mail: $scope.order.email,
                name: $scope.order.name,
                message: $scope.order.message
            }).success(function(data) {
                $scope.successWindow = true;
                $scope.showAlert();
                // $timeout close attention window automatically within 1.250 second
                $timeout(function() {
                    $scope.successWindow = false;
                }, 1250);
                //success post request
                console.log(data);
            }).error(function(data) {
                //error
                console.log(data);
            });
        }
    };
});
