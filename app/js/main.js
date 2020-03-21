$(function(){

  $('.slider__inner').slick({
    prevArrow:'<button class="slick-arrow slick-prev"><div class="hunter"><img src="images/icons/slider-left.png" alt=""></div></button>',
    nextArrow:'<button class="slick-arrow slick-next"><div class="hunter"><img src="images/icons/slider-right.png" alt=""></div></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3500,
  });

  $('.project__inner').slick({
    prevArrow: '<button class="slick-arrow slick-prev"><div class="hunter"><img src="images/icons/slider-left.png" alt=""></div></button>',
    nextArrow: '<button class="slick-arrow slick-next"><div class="hunter"><img src="images/icons/slider-right.png" alt=""></div></button>',
    dots: false,
    infinite: false,
    speed: 1500,
    autoplaySpeed: 3500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });

  
    $(".menu ul li a").click(function () {
      $(".menu ul li a").removeClass("active");
      $(this).toggleClass("active");
    })
  

  
    $(".menu__btn").on('click', function(){
      $(".menu ul").slideToggle();

    });

  
  

});