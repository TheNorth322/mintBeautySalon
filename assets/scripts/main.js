new WOW().init();
const navbar = document.querySelector('.nav');
const navbar_scroll = VanillaScrollspy(navbar, 1000, 'easeInOutQuint');
navbar_scroll.init();

const logo = document.querySelector('.logo')
const logo_scroll = VanillaScrollspy(logo, 1000, 'easeInOutQuint')
logo_scroll.init()

const arrow = document.querySelector('.first_list_down_arrow')
const arrow_scroll = VanillaScrollspy(arrow, 1000, 'easeInOutQuint')
arrow_scroll.init()

$('.galary_carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

