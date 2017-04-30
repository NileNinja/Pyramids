$(document).foundation();


// Grade settings.

window.addEventListener('load', function(){
    Grade(document.querySelectorAll('.gradient-wrap'));
    $('.gredclone').copyCSS('.gradient-wrap', ['background-image']);
    $('div.gradient-wrap').css({'background-image':''});
});