$(document).ready(function() {
    $('.btn-list button').on('click',function () {
        var indexBtn = $(this).index();
        var dronItem = $('.dron-item');

        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        $(dronItem).removeClass('bounceOutDown');
        $(dronItem).eq(indexBtn).addClass('bounceOutDown');
    });
    $('.md-trigger').on('click', function(){
        $('.md-modal').addClass('md-show');
    });

    $('.md-close, .md-overlay').on('click', function(){
        $('.md-modal').removeClass('md-show');
    });
});
