const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);

const nextBtn = document.querySelector('.right_btn');
const prevBtn = document.querySelector('.left_btn');

const dotNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotNav.children);


//arranging slides side by slide

const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

//adding Event Listener
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-{target.style.left})`;
  currentSlide.classList.remove('current-slide');
};
