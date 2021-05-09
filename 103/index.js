$(function () {
    $('.text-area').html('<p>Hello world</p>');
    $('.text-area p').css('color', 'yellow');


// FIXME:
    $('.text-area').click(function () {
        console.log('tapped');
        $(this).css('color', 'green');
    });

    $('p').hover(
        function () {
            console.log("text elia hover")
            $(this).css('color', 'red');
        }
    );


    $("button").click(function () {
        $('.text-area p').css('color', 'green');
    });

// きた!!
});