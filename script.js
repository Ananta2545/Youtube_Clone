var menu_icon = document.querySelector('.menu-icon');
var side_bar = document.querySelector('.side-bar');

menu_icon.onclick = function(){
    side_bar.classList.toggle("small-side-bar");
}

