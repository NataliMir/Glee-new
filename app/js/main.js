$(function() {  
  $('.slidermain').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });
  
  $('.sliderpartners').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.usernav__link--search').on('click',function() {
    $('.header__input').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.header__btn, .menu__link').on('click',function() {
    $('.header__nav').toggleClass('header__nav--active');
    $('body').toggleClass('lock');
  });

  mixitup('.prodweek__items', {
    selectors: {
      control: '.filter-1'
    }
  });

  mixitup('.desing__items', {
    selectors: {
      control: '.filter-2'
    }
  });  
  
  // var containerEl1 = document.querySelector('[data-ref="container-1"]');
  // var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  // var config = {
  //   controls: {
  //     scope: 'local'
  //   }
  // };
 
  // var mixer1 = mixitup(containerEl1, config);
  // var mixer2 = mixitup(containerEl2, config);
});