$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    $("li").removeClass('active');
    $(this).parent().addClass('active');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });

  $('.navbar').affix({offset: {top: 150}});
  $('.navbar').on('affixed.bs.affix', function(){
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $(this).addClass('animated slideInDown').one(animationEnd, function(){
      $(this).removeClass('animated slideInDown');
    });
  });

  $('[data-toggle="tooltip"]').tooltip();
});
