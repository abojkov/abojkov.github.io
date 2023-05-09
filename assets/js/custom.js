(function ($) {

  'use strict';

  // PRE LOADER
  $('.hero-image').load(setTimeout(function () {
    $('.preloader').fadeOut(500); // set duration in brackets
  }, 1000));

  // Blurry images


  // Close mobile menu navigation on item click
  $('.nav-link').on('click', () => {
    let width = Math.max(window.screen.width, window.innerWidth);
    let shouldHideMenuItems = width <= 991;
    if (shouldHideMenuItems) {
      $('.navbar-toggler').click();
    }
  })

  // Initiate venobox (lightbox feature used in portofilo)
  new VenoBox({
    'share': false,
    'height': '100%',
    'spinner': 'flow'
  });

  // Portfolio details carousel
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Include html functionality from W3Schools
  function includeHTML() {
    let z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName('*');
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain attribute:*/
      file = elmnt.getAttribute('data-htmlinclude');
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState === 4) {
            if (this.status === 200) {elmnt.innerHTML = this.responseText;}
            if (this.status === 404) {elmnt.innerHTML = 'Page not found.';}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute('data-htmlinclude');
            includeHTML();
          }
        }
        xhttp.open('GET', file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  }

  // Portfolio isotope and filter
  $(window).on('load', function() {
    const portfolioIsotope = $('#projects-container').isotope({
      itemSelector: '.project-item'
    });

    $('#portfolio-filters li').on('click', function() {
      $('#portfolio-filters li').removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portfolio)
    $('.venobox').venobox({
      'share': false
    });
  });

  // This is commented because this does not work when the expandable cards are imported with data-htmlinclude.
  // This is implemented locally on every expandable card. A solution has to be found for this.
  // // Expandable card interaction
  // $('.expandable-card-title')
  //   .on('click', function() {
  //     $(this).next().slideToggle();
  //   })
  //   .on('mouseover', function() {
  //     $(this).css('font-weight', 'bold');
  //   })
  //   .on('mouseleave', function() {
  //     $(this).css('font-weight', 'normal');
  //   })

  // Should be last
  includeHTML()

})(window.jQuery);