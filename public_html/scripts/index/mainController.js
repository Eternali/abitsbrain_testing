app.controller('mainController', ['$scope', function($scope) {
    create_menu($scope);
    $scope.main_cards = [
        {
            title: 'What we\'re all about:',
            text: 
'This website is intended to be a starter guide to some of the most important and commonly used \
machine learning algorithms we have today. It is meant for both beginners to wrap their minds \
around concepts, and for people with a bit more experience to refer back to. I will be adding \
demonstrations as time goes on to serve as examples and interactive tools from which to obtain \
inspiration. Thanks for coming, and happy learning!',
            is_first: 1
        }, {
            title: 'What\'s New',
            is_first: 1
        }, {
            title: 'We launched!',
            img: 'assets/website_logo.jpg',
            date: 'September 6, 2016', 
            text: 
'Today\'s the day abitsbrain.com went online! We look forward to adding new content and \
demonstrations to inspire you to continue your machine learning career! We aren\'t starting \
out with much, but have a lot planned for the future! :)',
            num_clicked: 2,
            is_first: 0
        }];
  /*  
    $scope.change_cards = function () {
       $('.article_card').click(function(e) {
        var $wrapper = $(this).find('.card_body');
        if ($(this).num_clicked % 2 === 0) {
            $wrapper.css('max-height', $wrapper.find('p').height());
            $(this).num_clicked += 1;
        } else {
            $wrapper.css('max-height', '20px');
            $(this).num_clicked += 1;
        }
      });
    };
*/
}]);
//angular.bootstrap(document, ['app']);