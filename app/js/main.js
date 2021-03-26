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
    slidesToScroll: 5,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.usernav__link--search').on('click',function() {
    $('.header__input').toggleClass('header__input--active');
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