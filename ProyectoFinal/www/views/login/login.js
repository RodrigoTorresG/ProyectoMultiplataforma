angular.module('App')
.controller("LoginController", function($scope, $firebaseAuth, $location) {
 
    $scope.login = function(username, password) {
        var fbAuth = $firebaseAuth(fb);
        console.log(username);
        fbAuth.$authWithPassword({
            email: username,
            password: password
        }).then(function(authData) {
            console.log("Authenticated successfully with payload:", authData);
            remember: "sessionOnly"
            $location.path("/home");
        }).catch(function(error) {
            alert(error);
        });
    }
 
    $scope.register = function(username, password) {
        var fbAuth = $firebaseAuth(fb);
        fbAuth.$createUser({email: username, password: password}).then(function() {
            return fbAuth.$authWithPassword({
                email: username,
                password: password
            });
        }).then(function(authData) {
            $location.path("/home");
        }).catch(function(error) {
            alert(error);
        });
    }

});