function animateMenu(button, image) {
    $(button).mouseenter(function() {
        $(image).animate({opacity: '0.65'}, 200).clearQueue();
    }).mouseleave(function() {
        $(image).animate({opacity: '1'}, 200).clearQueue();
    });
}

function select_tab(self, index, page) {
    self.selected_tab = index;
    for(i = 0; i < self.tabs.length; i++) {
        var tab = '#' + i.toString() + page.toString();
        if(i === index) {
            $(tab).addClass('tab_active');
        } else {
            $(tab).removeClass('tab_active');
        }
    };
}

$(document).ready(function(e) {
    
    animateMenu('#button-0', '#button_img-0');
    animateMenu('#button-1', '#button_img-1');
    animateMenu('#button-2', '#button_img-2');
   
    $('.article_card').click(function(e) {
        var $wrapper = $(this).find('.card_body');
        $(this).find('.expand').css('max-height', $wrapper.find('p').height());
        //$wrapper.toggleClass('expand', 0);
    });
   
});