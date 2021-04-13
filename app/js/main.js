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
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,          
        }
      },
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 1,          
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

  const container1 = document.querySelector('.prodweek__items')
  const container2 = document.querySelector('.desing__items')

  if (container1 && container2) {
    mixitup(container1, {
      selectors: {
        control: '.filter-1'
      }
    });
  
    mixitup(container2, {
      selectors: {
        control: '.filter-2'
      }
    });
  }
});