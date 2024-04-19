$(document).ready(function(){
    $('.dialog-footer .btn').on('click', function(){
        $(this).parents('.dialog').addClass('hide');
    });
    $('.sheet .btn-close, .sheet-footer .btn, .sheet-overlay').on('click', function(){
        $(this).parents('.sheet').addClass('hide');
    });
});