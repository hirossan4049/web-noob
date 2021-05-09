

// FIXME:
$(function (){
    $('.text-area').html('<p>Hello world</p>');
    $('.text-area p').css('color', 'red');
});

$('.text-area').click(function() {
    console.log('tapped');
    $(this).css('color', 'green');
});

$('.text-area').hover(
    function () {
        console.log("text elia hover")
    }
);
