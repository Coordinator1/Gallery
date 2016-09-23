// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var gallery = angular.module('starter', ['ionic', 'ngCordova', 'youtube-embed'])

.run(function($ionicPlatform, $rootScope, ROUTES) {
    $rootScope.ROUTES = ROUTES;
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.constant('ROUTES', (function() {
    return {
        APP: '/app',

        MAIN: '/main',

        PROJECTS: '/projects',
        DESCRIPTION: '/description',

        CATEGORIES: '/categories',
        SLIDERCATEGORIES: '/sliderCategories',

        CATALOG: '/catalog',

        CONTACTS: '/contacts',

        CALCULATE: '/calculate',
        MATERIALS: '/materials',
        ORDER: '/order'
    }
})())

.config(function($stateProvider, $urlRouterProvider, ROUTES, $httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    var tpl = "templates/";

    $stateProvider
        .state('app', {
            url: ROUTES.APP,
            abstract: true,
            templateUrl: tpl + 'menu.html',
            controller: 'AppCtrl'
        })

    .state('app.main', {
        url: ROUTES.MAIN,
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'main.html',
                controller: 'MainCtrl'
            }
        }
    })

    .state('app.projects', {
        url: ROUTES.PROJECTS,
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'projects.html',
                controller: 'MainCtrl'
            }
        }
    })

    .state('app.description', {
        url: ROUTES.DESCRIPTION + '/:descriptionId',
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'description.html',
                controller: 'MainCtrl'
            }
        }
    })

    .state('app.categories', {
        url: ROUTES.CATEGORIES,
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'categories.html',
                controller: 'CategoriesCtrl'
            }
        }
    })

    .state('app.sliderCategories', {
        url: ROUTES.SLIDERCATEGORIES + '/:sliderCategoriesId',
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'sliderCategories.html',
                controller: 'CategoriesCtrl'
            }
        }
    })

    .state('app.catalog', {
        url: ROUTES.CATALOG,
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'catalog.html',
                controller: 'AppCtrl'
            }
        }
    })

    .state('app.contacts', {
        url: ROUTES.CONTACTS,
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'contacts.html',
                controller: 'ContactsCtrl'
            }
        }
    })

    .state('app.calculate', {
        url: ROUTES.CALCULATE,
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'calculate.html',
                controller: 'OrderCtrl'
            }
        }
    })

    .state('app.materials', {
        url: ROUTES.MATERIALS,
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'materials.html',
                controller: 'OrderCtrl'
            }
        }
    })

    .state('app.order', {
        url: ROUTES.ORDER,
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'order.html',
                controller: 'OrderCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/main');
});
