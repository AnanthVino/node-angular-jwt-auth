angular.module('location',['gm']).controller('locationController',function($scope,$http){

  $scope.$on('gmPlacesAutocomplete::placeChanged', function(){
    var location = $scope.user_location.getPlace();
    $http.post('/save_location',{location:location.formatted_address,token:sessionStorage.token}).then(function(data){
      // console.log(data.data);
    })
  });
})
