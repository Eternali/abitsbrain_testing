app.controller('mainController', ['$scope', function($scope) {
    $scope.selected_tab = 0;
    create_menu($scope);
    $scope.tabs = [
        {
            title: 'Supervised Learning',
            articles: [
                        {
                    title: 'More is coming!',
                    text: 'Come back soon for manageable explanations of other supervised \
                           learning algorithms such as logistic regresssion and neural networks!',
                    is_end: 1
                }, {
                    title: 'Linear Regression',
                    img: 'assets/linear_reg_simple.png',
                    text: 
'Linear regression is one of the simplest machine learning algorithm out there and it is \
great for teaching the fundamental principles and concepts of machine learning. \n\
The goal of this algorithm is to learn a line that fits a set of training data the best in order \
to predict the outcome of unseen data. For example, linear regression could be used to predict \
housing prices. You could feed the algorithm a set of training data with features such as floor \
area, number of bathrooms, number of bedrooms, and geographical location. Then give it the \
"answers", that is the selling price of each house, and the linear regression algorithm could \
learn a line of best fit for the data. You could then give it features from a new house you \
are looking to sell and the algorithm could estimate the price you could expect to sell the \
house at. The advantageous thing about this, and all, machine learning algorithms is that you \
could have thousands, if not millions, of dimensions to your data, yet the algorithm would still \
be able to learn it. \n\nLinear regression can also be expanded to learning very complex, \
non-linear hypotheses, this is called "multivariate" linear regression and can much more \
accurately fit datasets.',
                    is_end: 0
                }, {
                    title: 'Logistic Regression',
                    img: 'assets/log_reg_1.png', // make own logistic regression graph pic
                    text:
'Logistic regression is a commonly used supervised machine learning algorithm and is what is \
known as a classifier. What this means, is that instead of learning a hypothesis to predict \
indistinct numerical projections of unseen data (basically just finding a line of best fit), \
it will learn to classify data into distinct groups, which it can then extrapolate to unseen data\
(it can predict the class of new data points). Logistic regression, and variations on it, are used \
with a relatively high frequency to predict problems that require a distinct, whole, answer. Examples of \
problems logistic regression can be used for include predicting if a person has cancer or not. \
Analysing a picture of a roadway, and classifying things it "sees" (classes in this example could \
be a car, bike, pedestrian, and/or bus). The way a logistic regression algorithm will generally \
go about learning a dataset is by learning \'K\' binary classifications, that is, \
learning to define each class (1 through \'K\') against the entire dataset (this is known as \
a one-versus-all classification). It then, generally, puts the binary classifications together \
so that each data point will be run through each hypothesis (one per class), and the class that \
outputs the highest probability will be the data point\'s predicted class.', 
                    is_end: 0
                }/*, {
                    title: 'Neural Networks',
                    img: 'assets/bsod.png',
                    text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n\
        bbbbbbbbbbbbbbbbbb'
                }*/
            ]
        }, {
            title: 'Unsupervised Learning',
            articles: [
                        /*{
                    title: 'K-Means',
                    img: 'assets/pc_hardware_img.jpg',
                    text: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh\n\
        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
                }, {
                    title: 'Principal Component Analysis',
                    img: 'assets/website_logo.jpg',
                    text: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n\
        sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
                }, {
                    title: 'Anomoly Detection',
                    img: 'assets/bsod.png',
                    text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n\
        bbbbbbbbbbbbbbbbbb'
                }*/
                {
                    title: 'These explanations are on the way!',
                    text: 'Sorry for the wait, we have not yet released the unsupervised \
                           learning algorithm explanations, but they are on the way! Thank \
                           you for your patience!',
                    is_end: 1
                }
            ]
        }];
    $scope.to_tab = function(index) {
        select_tab($scope, index, '-algorithms_tab');
    };
    $scope.nToArray = function(text) {
        return text.split('\n');
    };
}]);



/*
angular.module('AlgorithmsApp').filter('nToArray', function () {
    return function(text){
        text = String(text).trim();
        return (text.length > 0 ? '<p>' + text.replace(/[\r\n]+/g, '</p><p>') + '</p>' : null);
    }
});
*/
