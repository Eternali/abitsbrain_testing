app.controller('mainController', ['$scope', function($scope) {
    $scope.selected_tab = 2;
    create_menu($scope);
    $scope.tabs = [
        {
            title: 'Linear Regression',
            articles: [
                        {
                    title: 'Supervised Learning first',
                    img: 'assets/pc_hardware_img.jpg',
                    text: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh\n\
        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
                }, {
                    title: 'Supervised Learning second',
                    img: 'assets/website_logo.jpg',
                    text: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n\
        sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
                }, {
                    title: 'Supervised Learning third',
                    img: 'assets/bsod.png',
                    text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n\
        bbbbbbbbbbbbbbbbbb'
                }
            ]
        }, {
            title: 'Logistic Regression',
            articles: [
                        {
                    title: 'Unsupervised Learning first',
                    img: 'assets/pc_hardware_img.jpg',
                    text: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh\n\
        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
                }, {
                    title: 'Unsupervised Learning second',
                    img: 'assets/website_logo.jpg',
                    text: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n\
        sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
                }, {
                    title: 'Unsupervised Learning third',
                    img: 'assets/bsod.png',
                    text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n\
        bbbbbbbbbbbbbbbbbb'
                }
            ]
        }, {
            title: 'Neural Networks', 
            desc: 'In this demonstration, we have trained a classical neural network to \n\
                    recognize handwritten digits (numbers) drawn by the user. This is a \n\
                    classic demonstration of a neural network\'s capability to learn\n\
                    very complex datasets and features. Please write a number (0-9) in the \n\
                    canvas with your mouse. You can adjust the thickness of the line you draw \n\
                    with the proper input. Once finished, the neural network will output its \n\
                    prediction. If it is incorrect, please type the correct number and click \n\
                    submit to submit, we will add this example to our dataset to train the \n\
                    network to be more accurate. Otherwise, please click clear to reset the \n\
                    canvas. Thank you, and please draw responsibly ;)',
            nn_prediction: null,
            articles: []
        }, {
            title: 'SVM',
            articles: [
                        {
                    title: 'Unsupervised Learning first',
                    img: 'assets/pc_hardware_img.jpg',
                    text: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh\n\
        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
                }, {
                    title: 'Unsupervised Learning second',
                    img: 'assets/website_logo.jpg',
                    text: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n\
        sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
                }, {
                    title: 'Unsupervised Learning third',
                    img: 'assets/bsod.png',
                    text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n\
        bbbbbbbbbbbbbbbbbb'
                }
            ]
        }, {
            title: 'K-means',
            articles: [
                        {
                    title: 'Unsupervised Learning first',
                    img: 'assets/pc_hardware_img.jpg',
                    text: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh\n\
        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
                }, {
                    title: 'Unsupervised Learning second',
                    img: 'assets/website_logo.jpg',
                    text: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n\
        sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
                }, {
                    title: 'Unsupervised Learning third',
                    img: 'assets/bsod.png',
                    text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n\
        bbbbbbbbbbbbbbbbbb'
                }
            ]
        }, {
            title: 'PCA',
            articles: [
                        {
                    title: 'Unsupervised Learning first',
                    img: 'assets/pc_hardware_img.jpg',
                    text: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh\n\
        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
                }, {
                    title: 'Unsupervised Learning second',
                    img: 'assets/website_logo.jpg',
                    text: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n\
        sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
                }, {
                    title: 'Unsupervised Learning third',
                    img: 'assets/bsod.png',
                    text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n\
        bbbbbbbbbbbbbbbbbb'
                }
            ]
        }];
    $scope.to_tab = function(index) {
        select_tab($scope, index, '-demos_tab');
    };
    $scope.is_nn = function(index) {
        if (index == 2) {
            return true;
        } else {
            return false;
        }
    };
}]);
