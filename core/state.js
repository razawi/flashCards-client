// Application Level State
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/profile');


  $stateProvider
    .state('app', {
      url: '',
      controller: 'AppCtrl',
      views: {
        'navbar': {
          templateUrl: 'navbar/navbar.tpl.html',
          controller: 'NavbarCtrl',
          css: 'navbar/navbar.css'
        },
        'main': {
          templateUrl: 'core/main.tpl.html'
        }
      }
    })
    .state('404', {
      url: '/404',
      templateUrl: 'core/404.tpl.html',
      controller: 'AppCtrl'
    });

}]);