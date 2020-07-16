$(document).ready(function()  {

//for sticky navgation
$('.js--section-features').waypoint(function (direction) {
  if (direction == 'down') {
    $('nav').addClass('sticky');
  } else {
    $('nav').removeClass('sticky');
  }
}, {
  offset: '60px;'
});

$('.js--scroll-to-plan').click(function() {
  $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 500)
})

$('.js--scroll-to-start').click(function() {
  $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500)
})

//scroll on buttons

/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window')
}, {
  offset: '25%'
})
*/
})
