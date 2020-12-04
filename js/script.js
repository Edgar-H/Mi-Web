/* function showMenu() {
    document.getElementById('menu').classList.toggle('hide')
} */

jQuery('document').ready(function($){

    var menuBtn= $('.menu-icon'),
        menu=$('.navigation ul');

    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }

    });

});