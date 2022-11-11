var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiperr = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const buildSwiperSlider = sliderElm => {
  const sliderIdentifier = sliderElm.dataset.id;
  return new Swiper(`#${sliderElm.id}`, {
    navigation: {
      nextEl: `.swiper-button-next-${sliderIdentifier}`,
      prevEl: `.swiper-button-prev-${sliderIdentifier}`
    },
    pagination: {
      el: `.swiper-pagination-${sliderIdentifier}`,
      type: 'progressbar',
    },
  });
}
// Get all of the swipers on the page
const allSliders = document.querySelectorAll('.swiper');

// Loop over all of the fetched sliders and apply Swiper on each one.
allSliders.forEach(slider => buildSwiperSlider(slider))