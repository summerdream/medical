// JavaScript Document
document.body.addEventListener('touchstart', function () { }); 
  

$(function(){
    $('.gender input').click(function(){
        $('.gender').removeClass('gender-checked')
        $(this).parent().addClass('gender-checked')
    })
    $('.purple-btn').click(function(e) {
    	e.preventDefault();//阻止提交
    	$(this).css('opacity','0.8');
    	$('.tips').html('提交成功').show();
    	setTimeout("$('.tips').hide();$('.purple-btn').css('opacity','1')",1000)
    })
});