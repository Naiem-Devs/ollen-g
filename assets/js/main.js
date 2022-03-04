  // Hero Section Btn Group
  const heroBtn = document.querySelectorAll('.hero_slider_btn ul li a')

  heroBtn.forEach(heroBtns => {
      heroBtns.addEventListener('click', () => {
          removeActiveClasses()
          heroBtns.classList.add('active')
      })
  })

  function removeActiveClasses() {
      heroBtn.forEach(heroBtns => {
          heroBtns.classList.remove('active')
      })
  }

  // Search pagination 
  const pagiNav = document.querySelectorAll('.pagination ul li a')

  pagiNav.forEach(pagiNavs => {
      pagiNavs.addEventListener('click', () => {
          removeActiveClassesp()
          pagiNavs.classList.add('active')
      })
  })

  function removeActiveClassesp() {
      pagiNav.forEach(pagiNavs => {
          pagiNavs.classList.remove('active')
      })
  }

// Sticky nav
  var stickyEl = document.querySelector('.header-area')
  var stickyPosition = stickyEl.getBoundingClientRect().top;
  var offset = -20
  window.addEventListener('scroll', function() {
      if (window.pageYOffset >= stickyPosition + offset) {
          stickyEl.style.position = 'fixed';
          stickyEl.style.top = '0px';
      } else {
          stickyEl.style.position = 'static';
          stickyEl.style.top = '';
      }
  });


(function($) {
  "use strict";


 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".spt_slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 4,
    smartSpeed: 500,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });


  // owlCarousel
  $(".hero_wrp").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: false,
    dots: false,
    URLhashListener:true,
    startPosition: 'URLHash',
    smartSpeed: 750,
    center: true,
    // autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    autoplaySpeed: 2000,
    fluidSpeed:true
  });

    // owlCarousel
    $(".cs_solid_slider").owlCarousel({
      loop: true,
      smartSpeed: 750,
      margin: 30,
      items: 3,
      navText: [
        '<i class="fal fa-long-arrow-left"></i>',
        '<i class="fal fa-long-arrow-right"></i>'
      ],
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        767: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  
    // owlCarousel
    $(".think_slider").owlCarousel({
      loop: true,
      smartSpeed: 750,
      margin: 20,
      items: 3,
      navText: [
        '<i class="fal fa-long-arrow-left"></i>',
        '<i class="fal fa-long-arrow-right"></i>'
      ],
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        767: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });



  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });


  $('.cs_slider').flipster({
    itemContainer: '.my-flipster',
    // [string|object]
    // Selector for the container of the flippin' items.

    itemSelector: '.cs_item',
    // [string|object]
    // Selector for children of `itemContainer` to flip

    start: 'center',
    // ['center'|number]
    // Zero based index of the starting item, or use 'center' to start in the middle

    fadeIn: 0,
    // [milliseconds]
    // Speed of the fade in animation after items have been setup

    loop: true,
    // [true|false]
    // Loop around when the start or end is reached

    autoplay: false,
    // [false|milliseconds]
    // If a positive number, Flipster will automatically advance to next item after that number of milliseconds

    pauseOnHover: true,
    // [true|false]
    // If true, autoplay advancement will pause when Flipster is hovered

    style: 'coverflow',
    // [coverflow|carousel|flat|...]
    // Adds a class (e.g. flipster--coverflow) to the flipster element to switch between display styles
    // Create your own theme in CSS and use this setting to have Flipster add the custom class

    spacing: 0.1,
    // [number]
    // Space between items relative to each item's width. 0 for no spacing, negative values to overlap

    click: true,
    // [true|false]
    // Clicking an item switches to that item

    keyboard: true,
    // [true|false]
    // Enable left/right arrow navigation

    scrollwheel: false,
    // [true|false]
    // Enable mousewheel/trackpad navigation; up/left = previous, down/right = next

    touch: true,
    // [true|false]
    // Enable swipe navigation for touch devices

    nav: false,
    // [true|false|'before'|'after']
    // If not false, Flipster will build an unordered list of the items
    // Values true or 'before' will insert the navigation before the items, 'after' will append the navigation after the items

    buttons: true,
    // [true|false|'custom']
    // If true, Flipster will insert Previous / Next buttons with SVG arrows
    // If 'custom', Flipster will not insert the arrows and will instead use the values of `buttonPrev` and `buttonNext`

    buttonPrev: 'Previous',
    // [text|html]
    // Changes the text for the Previous button

    buttonNext: 'Next',
    // [text|html]
    // Changes the text for the Next button

    onItemSwitch: false
    // [function]
    // Callback function when items are switched
    // Arguments received: [currentItem, previousItem]
});


 
})(jQuery);
