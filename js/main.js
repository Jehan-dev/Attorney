$(function () {

    $('.slider__inner').slick({
      arrows: true,
      prevArrow: '<button class="slick-arrow slick-prev"></button>',
      nextArrow: '<button class="slick-arrow slick-next"></button>',
      responsive: [
        {
          breakpoint: 641,
          settings: {
            arrows: false,
          }
        },
      ]
    });

    $('.header__nav-btn').on('click', function () {
      $('.header__nav > ul').slideToggle();
    });
}
)