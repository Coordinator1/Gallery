gallery.controller('CategoriesCtrl', function($scope, $location, $stateParams) {

	$scope.pathSliderCategories = function(sliderCategoriesId){
        $location.path("app/sliderCategories/" + sliderCategoriesId);
    };

    // Album category
    $scope.sliderCats = [
        { title: 'Одноуровневый потолок', id: 1 },
        { title: 'Многоуровневый потолок', id: 2 },
        { title: 'Фотопечать', id: 3 },
        { title: 'Матовые потолки', id: 4 },
        { title: 'Сатиновые потолки', id: 5 },
        { title: 'Тканевые потолки', id: 6 }
    ];

    // Slider parameters
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });

    // Next Button 
    $scope.previousCategories = function() {
        var previous = parseInt($stateParams.sliderCategoriesId) - 1;
        console.log(previous);
        $location.path('app/sliderCategories/' + previous);
    };

    // Previous Button
    $scope.nextCategories = function() {
        var next = parseInt($stateParams.sliderCategoriesId) + 1;
        console.log(next);
        $location.path('app/sliderCategories/' + next);
    };
});