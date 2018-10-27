import './port-page.scss';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function(){
  $('.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    const carousel = e.relatedTarget,
    			currSlide = (carousel.relative(carousel.current()) + 1).toString().padStart(2, '0'),
    			totalSlides = (carousel.items().length).toString().padStart(2, '0');

    $('.slider-counter').text(currSlide+ ' / ' + totalSlides);
  }).owlCarousel({
    items:1,
    margin:64,
    nav: true,
    loop: true,
    dots: false,
    navContainer: ".sh-owl-nav",
    smartSpeed: 600
  });
});
