let isScrollToBot = true;
let isCharacterMove = false;
let isCharacterMoveTimer = null;

let lastScrollTop = 0;

//If character is move, we change images
setInterval(function() {
    if(isCharacterMove){
        if(isScrollToBot) {
            if ($('#characterImage').attr('src') === './images/character/character-move-to-right-1.png') {
                $('#characterImage').attr('src', './images/character/character-move-to-right-2.png')
            }else{
                $('#characterImage').attr('src', './images/character/character-move-to-right-1.png')
            }
        }else{
            if ($('#characterImage').attr('src') === './images/character/character-move-to-left-1.png') {
                $('#characterImage').attr('src', './images/character/character-move-to-left-2.png')
            }else{
                $('#characterImage').attr('src', './images/character/character-move-to-left-1.png')
            }
        }
    }
}, 300);

//Get scroll direction and check our character is move or stand
$(window).scroll(function(event){
    let st = $(this).scrollTop();
    isScrollToBot = st > lastScrollTop;
    lastScrollTop = st;

    isCharacterMove = true;
    if(isCharacterMoveTimer !== null) {
        clearTimeout(isCharacterMoveTimer);
    }
    isCharacterMoveTimer = setTimeout(function() {
        isCharacterMove = false;
        if(isScrollToBot){
            $('#characterImage').attr('src', './images/character/character-to-right.png')
        }else{
            $('#characterImage').attr('src', './images/character/character-to-left.png')
        }
    }, 200);
});
