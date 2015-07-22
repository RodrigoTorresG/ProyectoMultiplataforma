angular.module('App')
.controller("UserEditController", function($scope, $firebaseObject, $ionicPopup, $location, $stateParams) {
var usersRef = fb.child("user");

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

$scope.volver = function(){
  $location.path("/user");
}

$scope.guardar = function(nombre,cargo,descripcion,nombrecompleto,ci,oficina,region) {
  if (nombre == null) {
    if ($scope.user.db_nombre == null) {
        nombre = "";
    }
    else{
    nombre = $scope.user.db_nombre;
    }
  }
  if (cargo == null) {
    if ($scope.user.db_cargo == null){
        cargo = "";  
    }
    else {
      cargo = $scope.user.db_cargo;
    }
  }
  if (descripcion == null) {
    if ($scope.user.db_descripcion == null) {
        descripcion = "";
    }
    else {
      descripcion = $scope.user.db_descripcion;
    }
  }
  if (nombrecompleto == null) {
    if ($scope.user.db_nombrecompleto == null) {
      nombrecompleto = "";
    }
    else {
      nombrecompleto = $scope.user.db_nombrecompleto;
    }
  }
  if (ci == null) {
    if ($scope.user.db_ci == null) {
        ci = "";
    }
    else {
      ci = $scope.user.db_ci;
    }
  }
  if (oficina == null) {
    if ($scope.user.db_oficina == null) {
        oficina = "";
    }
    else {
    oficina = $scope.user.db_oficina;
    }
  }
  if (region == null) {
    if ($scope.user.db_region == null) {
        region = "";
    }
    else {
    region = $scope.user.db_region;
    }
  }
usersRef.set({
    db_nombre: nombre,
    db_cargo: cargo,
    db_descripcion: descripcion,
    db_nombrecompleto: nombrecompleto,
    db_ci: ci,
    db_oficina: oficina,
    db_region: region
});
$location.path("/user");
    }
});
