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
    $('.more').click(function(){
        document.location="more-drug.html"
    })
    $('.index-serch-input').focus(function(){
        $(this).animate({width:"85%",margin: '10px'}).css('float','left');
        
        $('.pannel').addClass('none')
        $('.hot-search').removeClass('none')
        $('.cancel').animate({right:"10px"}).css('display','inline-block')
    });
    $('.cancel').click(function(){
        $('.index-serch-input').animate({width:"96%",margin: '10px auto'}).css('float','none').val('');
        $('.cancel').animate({right:"-28px"}).css('display','none')
        $('.pannel').addClass('none');
        $('.index-pannel').removeClass('none')
    })
    $('.index-serch-input').keyup(function(){
        $('.pannel').addClass('none');

        $('.search-result').removeClass('none')
    })
    $('.goIndex').click(function() {
        document.location='index.html'
    })
    $('.goCharity').click(function() {
        document.location='find-charity.html'
    })
    $('.goUser').click(function() {
        document.location='user-info.html'
    })
    $('.goAsk').click(function() {
        document.location='ask.html'
    })
});