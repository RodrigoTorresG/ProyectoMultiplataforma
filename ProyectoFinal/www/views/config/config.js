angular.module('App')
.controller('ConfigController', function ($scope) {
  $scope.config = {
    name: "Stephannie",
    image: "http://api.randomuser.me/portraits/thumb/women/39.jpg",
    location: {
        street: "1969 calle de alberto aguilera",
        city: "la coruña",
        state: "asturias",
        zip: "56298"
      },
  };
});