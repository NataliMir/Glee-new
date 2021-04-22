$(function() { 
  $('.product__button').on('click',function() {
    $('.product__button').removeClass('product__button--active');
    $(this).addClass('product__button--active');
  });

  
  $('.product__button--list').on('click',function() {    
    $('.product__inner').addClass('product__inner--list');
    $('.product__content').addClass('product__content--list');
    $('.product__items').addClass('product__items--list');
    $('.product__item').addClass('product__item--list');
    $('.prodweek__article').addClass('prodweek__article--list');
    $('.pagination').addClass('pagination--list');    
  });
  
  
  $('.product__button--grid').on('click',function() {    
    $('.product__inner').removeClass('product__inner--list');
    $('.product__content').removeClass('product__content--list');
    $('.product__items').removeClass('product__items--list');
    $('.product__item').removeClass('product__item--list');
    $('.prodweek__article').removeClass('prodweek__article--list');
    $('.pagination').removeClass('pagination--list');
  });

  $(".star").rateYo({
    starWidth: "12px",
    spacing: "6px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });

  $(".prodweek__star").rateYo({
    starWidth: "17px",
    spacing: "6px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });

  $('.option__input--price').ionRangeSlider({
    type: "double",    

    onStart: function (data) {
      $('.option__from').text(data.from);
      $('.option__to').text(data.to);      
    },
    onChange: function (data) {
      $('.option__from').text(data.from);
      $('.option__to').text(data.to);      
    },      
  });
  
  $('.slidermain').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });
  
  $('.partners').slick({
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

  $('.product__filter').on('click',function() {
    $('.product__options').toggleClass('product__options--active');
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