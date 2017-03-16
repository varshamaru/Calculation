(function(){
  'use strict'
  angular.module('NameCalculator',[])

  .controller('NameCalulatorController',function($scope){
    $scope.name = "";
    $scope.totalValue = 0;
    $scope.displayNumeric =function(){
      var totalNameValue=CalculateNumericForString($scope.name);
      $scope.totalValue=totalNameValue;
    };
    function CalculateNumericForString(string)
    {
      var totalstringValue=0;
      for(var index=0;index<string.length;index++)
      {
        totalstringValue +=string.charCodeAt(index);
      }
      return totalstringValue;
    }
  });
})();
