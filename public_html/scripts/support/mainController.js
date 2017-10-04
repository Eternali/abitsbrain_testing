app.controller('mainController', ['$scope', function($scope) {
    create_menu($scope);
    $scope.support_cards = [
        {
            title: 'Contact Us',
            text: 'support@abitsbrain.com'
        }
    ];

}]);
//angular.bootstrap(document, ['app']);