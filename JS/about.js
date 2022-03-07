$(document).ready(
  function() {
    $('header').hide().slideDown(1200);
    $('#info').hide().fadeIn(1000);
    $('#testimonials').hide().fadeIn(3000);
    $('#testimonial1').animate(
      {left: '0'}, 2000    //Slides in from the left
    );
    $('#testimonial2').animate(
      {right: '0'}, 2000    //Slides in from the right
    );
    $('footer').animate(
      {left: '0'}, 2000     //Slides in from the left
    );
  }
);

$('.toggle-menu').click(function(e) {
  $('.nav-links').toggleClass('active').hide().slideDown(800);
});