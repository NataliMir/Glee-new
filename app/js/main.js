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
    starWidth: "11px",
    spacing: "6px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    starSvg: '<svg height="511pt" viewBox="0 -10 511.98685 511" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"/></svg>'
  });

  
  $(".prodweek__star").rateYo({
    starWidth: "17px",
    spacing: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    starSvg: '<svg height="511pt" viewBox="0 -10 511.98685 511" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"/></svg>'
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