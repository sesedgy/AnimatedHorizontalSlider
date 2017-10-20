$.jInvertScroll(['.scroll'],
    {
        height: 6000,
        onScroll: function(percent) {
            $('.character').css('left', $(window).width()/2 - $('.front').position().left);
            //Меняем изображение на "в движении"


            // console.log(percent);
        }
    });

function startLife() {
    $('#selectCharacter').css('visibility', 'hidden');
    $('#startLife').css('visibility', 'visible');
    $(document.body).css('overflow-y', 'visible');
}

$(document).ready(function () {
    $('.character').css('left', $(window).width()/2 - $('.front').position().left);
    $(document.body).css('overflow-y', 'hidden');
});

