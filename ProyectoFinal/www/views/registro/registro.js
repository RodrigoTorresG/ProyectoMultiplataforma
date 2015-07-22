angular.module('App')
.controller("RegistroController", function($scope, $firebaseObject, $ionicPopup, $location, $stateParams) {
var usersRef = fb.child("registros");

$scope.volver = function(){
  $location.path("/home");
}

$scope.guardar = function(tipo,fecha) {
  if (tipo == null) {
        tipo = "";
  }
  if (fecha == null) {
        var d = new Date();
        fecha = d.getDate()+ "/" +(d.getMonth()+1)+ "/" +d.getFullYear()+ ", " +d.getHours()+ ":" +d.getMinutes()+ ":" +d.getSeconds();       
  }
usersRef.push({
    db_tipo: tipo,
    db_fecha: fecha
});
$location.path("/home");
    }
});
