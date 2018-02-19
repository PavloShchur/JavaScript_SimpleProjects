var $sun = $('.sun');
var $win = $(window);

$win.on('scroll', function () {
   var top = $win.scrollTop();
   $sun.css('transform', 'rotate(' + top +  'deg)')
});