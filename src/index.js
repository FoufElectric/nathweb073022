const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const theWholeNav = document.getElementsByTagName("nav")[0];

const navSlide = () => {
  // toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // toggle nav
    // this adds a delay to the animation so that each item comes in a bit later than the last
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.35
        }s`;
      }
    });
    // burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// This makes the nav FIXED

// window.onscroll = function (ev) {
//   if (window.scrollY > 80) {
//     theWholeNav.classList.add("nav-scrolling");
//     nav.classList.add("nav-links-scrolling");
//   } else {
//     theWholeNav.classList.remove("nav-scrolling");
//     nav.classList.remove("nav-links-scrolling");
//   }
// };
