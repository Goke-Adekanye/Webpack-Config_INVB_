// import { navbar, navToggler } from "./common";
// import "./main.css";

const navToggler = document.getElementById('nav-toggler');
const navbar = document.querySelector('.header');

// ********** toggle nav ************
navToggler.addEventListener("click", () => navbar.classList.toggle("nav-open"));

// ********** fixed navbar ************
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ********** client logo slider ************
$(document).ready(function () {
  $(".client-logos").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
