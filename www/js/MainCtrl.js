gallery.controller('MainCtrl', function($scope, $rootScope, $http, $state, $location) {

    // Path to projects view
    $scope.pathProjects = function() {
        $state.go("app.projects");
    };

    // Path to description view
    $scope.pathDescription = function(descriptionId) {
        $location.path("app/description/" + descriptionId);
    };

    // Ceilings type
    $scope.main = [
        { title: 'Одноуровневый потолок', id: 1 },
        { title: 'Многоуровневый потолок', id: 2 },
        { title: 'Фотопечать', id: 3 },
        { title: 'Матовые потолки', id: 4 },
        { title: 'Сатиновые потолки', id: 5 },
        { title: 'Тканевые потолки', id: 6 }
    ];

    // Ready projects (construction)
    $scope.projects = [
        { title: 'Конструкция "Ромашка"', id: 1 },
        { title: 'Конструкция "Ромашка"', id: 2 },
        { title: 'Конструкция "Ромашка"', id: 3 },
        { title: 'Конструкция "Ромашка"', id: 4 },
        { title: 'Конструкция "Ромашка"', id: 5 },
        { title: 'Конструкция "Ромашка"', id: 6 }
    ];

    // Slider parameters
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });

    // YouTube array
    $scope.videos = [];

    // Youtube parameters
    $scope.youtubeParams = {
        key: 'AIzaSyD0iIsuKrs4PbgpxFVUo-BYxnNxa3Qxs0c',
        type: 'video',
        maxResults: '1',
        part: 'id,snippet',
        q: 'АСТА М',
        order: 'date',
        channelId: 'UCnK8NajsjZJ9O_R6b-oWC8g'
    }

    // Player parameters
    $scope.playerVars = {
        rel: 0,
        showinfo: 0,
        modestbranding: 0
    }

    // Here we get a video on the set parameters
    $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: $scope.youtubeParams
    }).success(function(response) {
        angular.forEach(response.items, function(child) {
            console.log(child);
            $scope.videos.push(child);
        });
    });

    // This part of the code is responsible for getting the operating system version
    var version;
    document.addEventListener("deviceready", function() {
        version = $cordovaDevice.getVersion();
    }, false);

    $scope.ver = parseInt(version);

    if ($scope.ver < 4.3) {
        $scope.hideuTube = true;
    }
});
