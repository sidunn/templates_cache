/* we're passing a string directly into $route for our template that
 we want to use with our TestCtrl. You usually wouldn't do this in
 your application though, as it'd be hard to maintain all of your templates
 in your config block. */ 


(function(){

  function TestCtrl() {
    this.user = {name: 'Template_as_String Blake'};
  }

  angular.module('app', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/', {
      controller: 'TestCtrl as test',
      template: 'Hello, {{ test.user.name }}!'
    })
    .otherwise('/');
  })
  .controller('TestCtrl', TestCtrl);

})()