$(document).ready(
  function() {
    $('header').hide().slideDown(1200);
    $('#showcase').hide().slideDown(3000);
    $('#container1').hide().fadeIn(4000);
    $('#img-bg').animate(
      {left: '0'}, 2000
    );
    $('#read').animate(
      {right: '0'}, 2000
    );
    $('#read a').hide().fadeIn(3000);
    $('footer').animate(
      {left: '0'}, 2000
    );
  }
);

$('.toggle-menu').click(function(e) {
  $('.nav-links').toggleClass('active').hide().slideDown(800);
})