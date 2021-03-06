// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('scotch-todo', ['ionic', 'LocalStorageModule'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
//config init
app.config(function(localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('scotch-todo');
});

//controller init

app.controller('main', function($scope, $log, $ionicModal, localStorageService) {

  var taskData = 'task';  
//initialize the tasks scope with empty array
  $scope.tasks = [];
//initialize the tasks scope with empty object
  $scope.task = {};

  $ionicModal.fromTemplateUrl('new-task-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
      }).then(function (modal) {
    $scope.newTaskModal = modal;
  });

  $scope.getTask = function() {
    console.log('get inside')
    if(localStorageService.get(taskData)) {
      $scope.tasks = localStorageService.get(taskData);
    }else{
      $scope.tasks = [];
    }
  }

  $scope.createTask = function () {
    //creates a new task
    console.log('create inside')
    $scope.tasks.push($scope.task);
    localStorageService.set(taskData, $scope.tasks);
    $scope.task = {};
    $scope.newTaskModal.hide();
  }

  $scope.removeTask = function (index) {
    console.log('remove inside')
    //removes a task
    $scope.tasks.splice(index, 1);
    localStorageService.set(taskData, $scope.tasks)
  }

  $scope.completeTask = function (index) {
    //updates a task as completed
    if(index !== -1){
      $scope.tasks[index].completed = true;
    }

    localStorageService.set(taskData, $scope.tasks);
  }

  $scope.openTaskModal = function () {
    $scope.newTaskModal.show();
  };

  $scope.closeTaskModal = function () {
    console.log('remove inside')
    $scope.newTaskModal.hide();
  };
});
