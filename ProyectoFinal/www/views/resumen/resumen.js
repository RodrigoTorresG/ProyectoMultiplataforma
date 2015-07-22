angular.module('App')
.controller("ResumenController", function($scope, $firebaseObject, $ionicPopup, $location, $stateParams) {
var usersRef = fb.child("registros");

usersRef.on("value", function(snapshot) {
  $scope.registros = snapshot.val();
  console.log($scope.registros);
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

