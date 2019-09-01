(function () {
    'use strict';
    
    angular.module('foodApp', [])
    
    .controller('foodController', function ($scope) {
        $scope.lunchList = "";
        $scope.message = "";
        
        $scope.updateMessage = function () {
            
            $scope.message = getMessage($scope.lunchList);
        }
        function getMessage(thelist) {
            if(thelist=="")
                return "Please enter data first";
            else{
                var nbItems = thelist.split(',').length;
                console.log(nbItems);
                if(nbItems > 3)
                    return "Too much!";
                else
                    return "Enjoy";
            }
            
        }
    });
    
    })();
    