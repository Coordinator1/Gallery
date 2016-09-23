gallery.controller('OrderCtrl', function($scope, $window, $rootScope, $ionicPopup, $ionicModal, $ionicSlideBoxDelegate, $location, $timeout) {

    $scope.ceiling = {};
    $scope.ceilingAnother = {};
    $scope.ceilingPerimetrArea = function() {
        console.log("ceilingPerimetrArea", $scope.ceiling.a, $scope.ceiling.b);
        $rootScope.perimetr = 2 * ($scope.ceiling.a + $scope.ceiling.b);
        $rootScope.area = $scope.ceiling.a * $scope.ceiling.b;
    };

    $scope.ceilingPerimetrAreaAnother = function() {
        console.log("ceilingPerimetrAreaAnother", $scope.ceilingAnother.p, $scope.ceilingAnother.s);
        $rootScope.perimetr = $scope.ceilingAnother.p;
        $rootScope.area = $scope.ceilingAnother.s;
    };

    $scope.showAlertCeilingParams = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Введите стороны потолка.<br> Или площадь и периметр.'
        });
    };

    $scope.goMaterials = function() {
        if ($rootScope.perimetr == null || $rootScope.area == null) {
            $scope.showAlertCeilingParams();
            console.log("$scope.showAlertCeilingParams");
        } else {
            $location.path('app/materials');
            console.log("$location.path");
        }
    };

    $scope.materials = [
        { id: 0, value: 1, name: 'Класс «Эконом»', act: false },
        { id: 1, value: 350, name: 'Матовый (1.5м)- Белый', act: true },
        { id: 2, value: 370, name: 'Матовый (1.5м)- Цветной', act: true },
        { id: 3, value: 350, name: 'Сатиновый (1.5м)- Белый', act: true },
        { id: 4, value: 370, name: 'Сатиновый (1-2.7м)- Цветной', act: true },
        { id: 5, value: 360, name: 'Лаковое (1.5м)- Белый', act: true },
        { id: 6, value: 380, name: 'Лаковое (1.5м)- Цветной', act: true },

        { id: 7, value: 2, name: 'Класс «Люкс»', act: false },
        { id: 8, value: 430, name: 'Матовый (2.2м)- Белый', act: true },
        { id: 9, value: 480, name: 'Матовый (2.2м)- Цветной', act: true },
        { id: 10, value: 430, name: 'Сатиновый (2.2м)- Белый', act: true },
        { id: 11, value: 480, name: 'Сатиновый (2.2м)- Цветной', act: true },
        { id: 12, value: 500, name: 'Матовый Супер(3.5м)- Белый', act: true },
        { id: 13, value: 650, name: 'Матовый Супер(3.5м)- Цветной', act: true },
        { id: 14, value: 500, name: 'Сатиновый Супер(3.5м)- Белый', act: true },
        { id: 15, value: 650, name: 'Сатиновый Супер(3.5м)- Цветной', act: true },
        { id: 16, value: 450, name: 'Лаковое (1.4м)- Белый', act: true },
        { id: 17, value: 550, name: 'Лаковое (1.4м)- Цветной', act: true },
        { id: 18, value: 650, name: 'Спец. лак (1.95м)- Белый', act: true },
        { id: 19, value: 750, name: 'Спец. лак (1.95м)- Цветной', act: true },
        { id: 20, value: 750, name: 'Лаковое Супер (3.5-5м)- Белый', act: true },
        { id: 21, value: 750, name: 'Лаковое Супер (3.5-5м)- Цветной', act: true },

        { id: 22, value: 1, name: 'Класс «Эксклюзив»', act: false },
        { id: 23, value: 870, name: 'Опал прозрачн (2.16м) белый опал', act: true },
        { id: 24, value: 870, name: 'Стиль (1.42м) цветной', act: true },
        { id: 25, value: 950, name: '(Descor) ткань (3.1-5.1м) белый', act: true },
        { id: 26, value: 1850, name: '(Clipso) ткань (3.1-5.1м) белый', act: true },
        { id: 27, value: 870, name: 'Искры (1.42м) цветной', act: true },
        { id: 28, value: 870, name: 'Кожа (1.42м) цветной', act: true },
        { id: 29, value: 870, name: 'Фантазия (1.42м) цветной', act: true },
        { id: 30, value: 980, name: 'Роса (1.42м) цветной', act: true },
        { id: 31, value: 980, name: 'Блеск (1.42м) цветной', act: true },
        { id: 32, value: 980, name: 'Замша (1.42м) цветной', act: true },
        { id: 33, value: 2500, name: 'Арт (фотопечать) стандарт (2.2-3.5м)', act: true }
    ];

    $scope.vstavkaBaget = [
        { id: 0, value: 50, name: 'Белая' },
        { id: 1, value: 300, name: 'В цвет полотна' }
    ];

    $scope.mainMaterials = function(materialVal) {
        $rootScope.materials = $scope.materials[materialVal].name;
        $rootScope.materialValue = $scope.materials[materialVal].value;
    }

    $scope.mainVstavka = function(vstavkaVal) {
        if (isNaN(vstavkaVal)) {
            $rootScope.vstavkaBagetValue = 0;
            $rootScope.vstavkaBagetView = " - ";
        } else {
            $rootScope.vstavkaBagetValue = $scope.vstavkaBaget[vstavkaVal].value;
            $rootScope.vstavkaBagetView = $scope.vstavkaBaget[vstavkaVal].name;
        };
    }

    $scope.showAlertMaterials = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Выберите материал.'
        });
    };

    $scope.goMoreParams = function(materialVal, vstavkaVal) {
        if (isNaN(materialVal)) {
            $scope.showAlertMaterials();
        } else {
            $scope.mainVstavka(vstavkaVal);
            $location.path('app/order');
        }
    };

    $scope.order = {};

    $scope.costs = ($rootScope.area * $rootScope.materialValue) + ($rootScope.perimetr * $rootScope.vstavkaBagetValue);
    $scope.costs = Math.round($scope.costs);


    $scope.showAlertOrderError = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Для отправки заявки<br> введите почту и телефон.'
        });
    };

    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Ваша заявка принята!',
        });

        alertPopup.then(function(res) {
            $location.path('/app/main').replace();
            $timeout(function() {
                $window.location.reload();
            }, 250);
        });
    };

    $scope.submit = function() {
        //URL send email
        if ($scope.order.emailApp == null || $scope.order.phoneApp == null || $scope.order.nameApp == null) {
            $scope.showAlertOrderError();
            console.log(" $scope.showAlertOrderError();");
        }
        if ($scope.order.email && $scope.order.phoneApp || $scope.order.nameApp) {
            $http.post('http://dev-topsu.ru/mailApp.php', {
                submits: true,
                title: "АстаМ",
                name: $scope.order.nameApp,
                mail: $scope.order.emailApp,
                phone: $scope.order.phoneApp,
                cost: $scope.costs,
                perimetr: $rootScope.perimetr,
                area: $rootScope.area,
                material: $rootScope.materials,
                vstavka: $rootScope.vstavkaBagetView,
            }).success(function(data) {
                $scope.successWindow = true;
                console.log("$scope.successWindow = true;");
                $scope.showAlert();
                $rootScope.perimetr = null;
                $rootScope.area = null;
                $rootScope.materials = null;
                $rootScope.vstavkaBagetView = null;
                // $timeout close attention window automatically within 1.250 second
                /* $timeout(function() {
                     $scope.successWindow = false;
                 }, 1250);*/
                //success post request
                console.log(data);
            }).error(function(data) {
                //error
                console.log(data);
            });
        }
    };

});