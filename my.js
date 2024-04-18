let clockEl = document.querySelector(".clockp");

function getClockTime() {
  let date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let period = "AM";

  if (hr == 0) {
    hr = 12;
  }

  if (hr > 12) {
    hr = hr - 12;
    period = "PM";
  }
  hr = ("0" + hr).slice(-2);
  min = ("0" + min).slice(-2);
  sec = ("0" + sec).slice(-2);

  clockEl.innerHTML = `${hr}:${min}:${sec} ${period}`;
}

setInterval(getClockTime, 1000);
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slidesWrapper = document.querySelector(".slides-wrapper");

const startAutoSlides = document.querySelector(".start-slide");
const stopAutoSlides = document.querySelector(".stop-slide");

//let currentSlide = 0;
//function goToNextSlide() {
//if (currentSlide === slides.length - 1) {
//currentSlide = 0;
//} else {
// currentSlide += 1;
//}
//loadSlides();
//}

//function goToPrevSlide() {
//if (currentSlide === 0) {
//currentSlide = slides.length - 1;
//} else {
//currentSlide -= 1;
//}
//loadSlides();
//}

//loadSlides();
//sliderIntervalId = setInterval(goToNextSlide, 5000);
let currentSlide = 0;
function loadSlides() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function goToNextSlide() {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }
  loadSlides();
}
function goToPrevSlide() {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  }
  loadSlides();
}

sliderIntervalId = setInterval(goToNextSlide, 5000);
function stopslide() {
  clearInterval(sliderIntervalId);
}
slidesWrapper.addEventListener("mouseenter", stopslide());
function continieslider() {
  sliderIntervalId = setInterval(goToNextSlide, 5000);
}

slidesWrapper.addEventListener("mouseleave", continieslider());
/* const firstbutton = document.querySelectorAll(".first");
const second = document.querySelectorAll(".second");
const three = document.querySelectorAll(".three");
const four = document.querySelectorAll(".four");
const sliderbtns = document.querySelectorAll(".sliderbtn");
  */
/* function changeSlide(moveTo) {
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  sliderbtns[currentSlide].classList.toggle("activebtn");

  sliderbtns[moveTo].classList.toggle("activebtn");

  currentSlide = moveTo;
}

document.querySelectorAll(".sliderbtn").forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (currentSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  });
}); */
