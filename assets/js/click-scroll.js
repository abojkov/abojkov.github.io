//jquery-click-scroll

let sectionArray = [1, 2, 3, 4, 5];

$.each(sectionArray, function (index, value) {
  $(document).scroll(function () {
    let offsetSection = $('#' + 'section_' + value).offset().top - 90;
    let docScroll = $(document).scrollTop();
    let docScroll1 = docScroll + 1;

    let isBottomOfPage = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 100;

    if ((docScroll1 >= offsetSection) || isBottomOfPage) {
      $('.navbar-nav .nav-item .nav-link').removeClass('active');
      $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
      $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
      $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
    }

  });

  $('.click-scroll').eq(index).click(function (e) {
    let offsetClick = $('#' + 'section_' + value).offset().top - 90;
    e.preventDefault();
    $('html, body').animate({
      'scrollTop': offsetClick
    }, 300)
  });

});

$(document).ready(function () {
  $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
  $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
  $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});