$('.categories__slider').slick({
  arrows: false,
  centerMode: true,
  infinite: true,
  centerPadding: '250px',
  slidesToShow: 1,
  speed: 500,
  dots: true,  
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 376,
      settings: {
        centerPadding: '30px',
      }
    }
  ]
})

$('.header-top__btn').on('click', function () {
  $('.header-top__info').toggleClass('header-top__info--show');
  $('.header-top__btn').toggleClass('header-top__btn--show');
})

