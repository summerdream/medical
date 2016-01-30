// JavaScript Document
document.body.addEventListener('touchstart', function () { }); 
  

$(function(){
    $('.gender input').click(function(){
        $('.gender').removeClass('gender-checked')
        $(this).parent().addClass('gender-checked')
    })
});