'use strict';

angular.module('sendmailApp', [])
.controller('MailController', function ($scope,$http) {
  $scope.loading = false;
  $scope.send = function (mail){
    $scope.loading = true;
    $http.post('/sendmail', {
      from: 'CodeNx <karuna.puri@springernature.com>',
      to: 'karuna.puri@springernature.com',
      subject: 'Message from AngularCode',
      text: mail.message
    }).then(res=>{
        $scope.loading = false;
        $scope.serverMessage = 'Email sent successfully';
    });
  }
})
