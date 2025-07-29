window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let header = document.querySelector(".main-header");

  if (window.scrollY > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
let autoplayCompleted = false;
let slideCount = 0;

const $carousel = $(".bannercarousel");

$carousel.owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: false,
  navText: [
    // '<i class="fas fa-long-arrow-alt-left"></i>',
    // '<i class="fas fa-long-arrow-alt-right"></i>',
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    1000: { items: 1 },
  },
});