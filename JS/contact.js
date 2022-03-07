$(document).ready(
  function() {
    $('header').hide().slideDown(1200);
    $('.container h2').hide().fadeIn(3000);
    $('.container p').hide().fadeIn(3000);
    $('form').animate({right: '0'}, 1200);
    $('.outro1').animate({right: '0'}, 1200);
    $('.outro3').animate({left: '0'}, 1200);
    $('footer').css({left: '0'}).hide().fadeIn(2000);
  }
);

$('.toggle-menu').click(function(e) {
  $('.nav-links').toggleClass('active').hide().slideDown(800);
});