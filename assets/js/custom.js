(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets
  });

  // CUSTOM LINK
  $('.custom-link').click(function () {
    let el = $(this).attr('href');
    let elWrapped = $(el);
    let header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      let offset = element.offset();
      let offsetTop = offset.top;
      let totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

})(window.jQuery);