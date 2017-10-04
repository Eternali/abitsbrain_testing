var create_menu = function (self) {
    self.title = "A BIT'S BRAIN";
    self.title_background = "assets/background_home-lanczos3.jpg";
    self.logo = "assets/website_logo.jpg";
    self.menu_buttons = [{
            show_home: 0,
            text: 'News',
            link: 'index.html',
            background: 'assets/pc_hardware_img.jpg',
            id: 'news_button'
    }, {
            show_home: 1,
            text: 'Algorithms',
            link: 'algorithms.html',
            background: 'assets/algorithm_btn.jpg',
            id: 'algorithms_button'
    }, {
            show_home: 1,
            text: 'Demonstrations',
            link: 'demos.html',
            background: 'assets/demo_btn.png', 
            id: 'demos_button'
    }];
    self.footer = 'c. abitsbrain.com 2016';
    self.support = 'support us';
    self.support_link = 'support.html';
};
