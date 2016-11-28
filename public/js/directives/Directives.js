angular.module('hallbeauty')

.directive('modalPopup', [function(){

  return {
    transclude: true,
    restrict: 'AE',
    templateUrl: 'partials/includes/modal-popup.html',
    scope: {
      title:'=modalTitle'
    },
    controller: function(){}
  };

}])

.directive('modal', [function(){

  return {
    restrict: 'EA',
    scope: {
        body: '=modalBody',
        callbackbuttonleft: '&ngClickLeftButton',
        callbackbuttonright: '&ngClickRightButton',
        handler: '=lolo'
    },
    templateUrl: 'partials/includes/modal-popup.html',
    transclude: true,
    controller: 'HomeController'
  };

}]);
