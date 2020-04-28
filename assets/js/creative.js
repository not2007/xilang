(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#brand1").addClass("hideBrand");
      $("#brand2").addClass("showBrand");
      $("#brand1").removeClass("showBrand");
      $("#brand2").removeClass("hideBrand");
      $("#mainNav").addClass("navbar-shrink");
      $("#lilis1").addClass("dradText");
      $("#lilis1").removeClass("whiteText");
      $("#lilis2").addClass("dradText");
      $("#lilis2").removeClass("whiteText");
      $("#lilis3").addClass("dradText");
      $("#lilis3").removeClass("whiteText");
      $("#lilis4").addClass("dradText");
      $("#lilis4").removeClass("whiteText");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#brand1").removeClass("hideBrand");
      $("#brand2").removeClass("showBrand");
      $("#brand1").addClass("showBrand");
      $("#brand2").addClass("hideBrand");
      $("#lilis1").removeClass("dradText");
      $("#lilis1").addClass("forceWhite");
      $("#lilis2").removeClass("dradText");
      $("#lilis2").addClass("whiteText");
      $("#lilis3").removeClass("dradText");
      $("#lilis3").addClass("whiteText");
      $("#lilis4").removeClass("dradText");
      $("#lilis4").addClass("whiteText");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);



  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
