(function() {
  (function($) {
    $(function() {
      $('#scroller').simplyScroll({
        frameRate: 60
      });
    });
  })(jQuery);

  $(document).ready(function() {
    jQuery(window).scroll(function() {
      var threshold;
      threshold = 700;
      if (jQuery(window).scrollTop() >= 830) {
        $('.logo').addClass('active');
      } else {
        $('.logo').removeClass('active');
      }
    });
  });

  $('.showmenu').bind('click', function() {
    $('.menusection').toggleClass('show');
  });

  $('.menulink').bind('click', function() {
    $('.menusection').toggleClass('show');
  });

  $(document).click(function(e) {
    if (!$('.menusection').is(e.target) && $('.menusection').has(e.target).length === 0) {
      $('.menusection').removeClass('show');
    }
  });

}).call(this);
