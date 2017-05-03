var login=angular.module('ananth',[]).controller('loginController',function($scope,$http){

  $scope.user_select=function(input){
    $scope.user_form=input;
  }

  $scope.user_register=function(){
    $http.post('/user_register',$scope.user).then(function(data){
      if(data.data.status=='success'){
        // console.log(data.data)
        sessionStorage.token=data.data.token;
        window.location='/home';
      }
      else if (data.data.status=='exist'){
        alert('Username Already Taken')
      }
      else{
        alert('OOPS Please Try Again')
      }
    })
  }

  $scope.user_login=function(){
    $http.post('/user_login',$scope.user).then(function(data){
      if(data.data.status=='success'){
        sessionStorage.token=data.data.token;
        window.location='/home';
      }
      else{
        alert('Invalid Username/Password')
      }
    })
  }

})
