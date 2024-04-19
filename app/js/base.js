$(document).ready(function(){
    $('.dialog .btn-close, .dialog-footer .btn, .modal-overlay').on('click', function(){
        $(this).parents('.dialog').addClass('hide');
    });
    $('.sheet .btn-close, .sheet-footer .btn, .modal-overlay').on('click', function(){
        $(this).parents('.sheet').addClass('hide');
    });
});