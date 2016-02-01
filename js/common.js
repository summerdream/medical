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
    $(".item" ).on( "swipeleft", function(e){
        var index=parseInt($(e.target).parent().attr('data-index'))+1;
        if(index<2){
            $('[data-slide-to='+index+']').click()
        }

    }).on("swiperight", function(e){
        var index=parseInt($(e.target).parent().attr('data-index'))-1;
        if(index>-1){
            $('[data-slide-to='+index+']').click()
        }

    } );

    $('.index-serch-input').focus(function(){
        document.location='search.html'
    })
    $('.serch-input').keyup(function(){

        $('.hot-search').addClass('none')

        $('.search-result').removeClass('none')
    })
});