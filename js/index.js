$(document).ready(function(){
    let $toggleButton = $('.toggle-button');

    //Hamburger Menu Button
    $toggleButton.on('click', function(){
        $(this).toggleClass('button-open');
        $('#menu-navbar').slideToggle();
    });
});