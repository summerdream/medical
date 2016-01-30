// JavaScript Document
document.body.addEventListener('touchstart', function () { }); 
  

$(function(){
    $('.gender input').click(function(){
        $('.gender').removeClass('gender-checked')
        $(this).parent().addClass('gender-checked')
    })
    $('.purple-btn').click(function(e) {
    	e.preventDefault();//阻止提交
    	$('.tips').html('提交成功').show();
    	setTimeout("$('.tips').hide()",1000)
    })
});