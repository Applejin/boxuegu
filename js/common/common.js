define(['jquery'],function($){
    $('.navs a').click(function(){
        $(this).next().slideToggle();
    });

});