angular.module('history',[]).controller('historyController',function($scope,$http){

  $http.post('/get_location',{token:sessionStorage.token}).then(function(data){
    if(data.data.status=='success')
    {
      $scope.locations=data.data.location;
    }
  })
})
