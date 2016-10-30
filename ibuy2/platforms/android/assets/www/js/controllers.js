angular.module('starter.controllers', [])

.controller('AppCtrl', ['$scope', function ($scope) {


}])
//     //http://jsfiddle.net/2MbZY/
//.factory('basket', function () {
//    var items = [];
//    var myBasketService = {};

//    myBasketService.addItem = function (item) {
//        item.push(item);
//    };

//    myBasketService.removeItem = function (item) {
//        var index = item.indexOf(item);
//        item.splice(index, 1);
//    };

//    myBasketService.items = function () {
//        return items;
//    };

//    return myBasketService;
//})

.controller('CategoriesCtrl', function ($scope,$stateParams, $ionicModal) {
    $ionicModal.fromTemplateUrl('templates/categories_modal.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
        // Execute action
    });
    
    
    if (localStorage.getItem("categories") !== null && localStorage.getItem("categories") !== undefined) {
        $scope.categories = JSON.parse(localStorage.getItem("categories"));
        //console.log($scope.categories);
       
    }
    else {
        $scope.categories = [];
    }
    
    $scope.addCat = function (category) {
        $scope.categories.push(category);
        localStorage.setItem("categories", JSON.stringify($scope.categories));
        console.log($scope.categories);
    };
})

   

.controller('CategoryCtrl', function ($scope, $stateParams, $ionicModal) {

    $ionicModal.fromTemplateUrl('templates/item_modal.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
        // Execute action
    });
    ////http://ionicframework.com/docs/api/service/$ionicModal/
   
    if (localStorage.getItem("items") !== null && localStorage.getItem("items") !== undefined) {
        $scope.items = JSON.parse(localStorage.getItem("items"));
    }
    else {
        $scope.items = [];
    }
    $scope.addItem = function (item) {
        $scope.items.push(item);
        localStorage.setItem("items", JSON.stringify($scope.items));
    };
});
