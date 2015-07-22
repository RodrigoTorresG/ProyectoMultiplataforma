angular.module('App')
.controller("UserController", function($scope, $firebaseObject, $ionicPopup, $location) {

var usersRef = fb.child("user");
console.log(usersRef);

usersRef.on("value", function(snapshot) {
  $scope.user = snapshot.val();
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


  $scope.product2 = $firebaseObject(usersRef);

  $scope.product2.$loaded().then(function() {
    $scope.loadMap();
  });

$scope.loadMap = function(){
}

$scope.create = function() {
    $location.path("/user_edit");
}

 
});

