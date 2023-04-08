let videoPro = document.querySelector("#videoPro");
let radioBtns = document.querySelectorAll('input[type="radio"]');
let coloring = document.querySelector(".coloring");
const stoppedVid = document.querySelector(".stopped");
const deepPurple = document.querySelector('.input[value="Deep Purple"]');
deepPurple.click();
let videoProSmall = document.querySelector(".videoPro");

const inputs = document.querySelectorAll("input");
const Gold = document.querySelectorAll(".gold");

inputs.forEach((input) => {
  input.addEventListener("click", function (e) {
    const demo = Gold.forEach((img) => {
      const attr = img.getAttribute("src");
      let target = e.currentTarget.value;
      if (target == "Gold") {
        console.log("here we go again");
        for (let i = 0; i < Gold.length; i++) {
          // let index = Array.prototype.indexOf.call(Gold, Gold[i]);
          Gold[0].setAttribute("src", "images/stopped-pro-beyond-vid 1.jpg");
          Gold[1].setAttribute("src", "images/meet dynamic island 1.jpeg");
          Gold[2].setAttribute(
            "src",
            "images/The mastermind behind it all 1.jpeg"
          );
          Gold[3].setAttribute("src", "images/always-on-display.jpg");
          Gold[4].setAttribute("src", "images/ceramic gold.jpg");
          Gold[4].style.width = "65%";
          Gold[5].setAttribute("src", "images/selfie gold.jpg");
          const sizeFlex = document.querySelector(".size-flex");
          sizeFlex.style.paddingTop = "5rem";
          Gold[6].setAttribute("src", "images/promax gold.jpg");
          Gold[7].setAttribute("src", "images/pro gold.jpg");
          Gold[7].classList.add("small");
          Gold[7].classList.add("iphone-size");
        }
      }
    });
  });
});

window.addEventListener("load", () => {
  checkMediaQuery();
  window.addEventListener("resize", checkMediaQuery);
  function checkMediaQuery() {
    if (window.matchMedia("(max-width: 560px)").matches) {
      console.log("Viewport matches media query");
      videoProSmall.play();
      videoProSmall.classList.add("play");
      videoPro.classList.add("videoPro");
      stoppedVid.style.margin = "0";
      stoppedVid.classList.remove("active");
      videoProSmall.addEventListener("ended", () => {
        videoProSmall.classList.remove("play");
        stoppedVid.classList.add("active");
      });
    } else {
      console.log("Viewport does not match media query");
      videoProSmall.classList.remove("play");
      // videoPro.classList.remove("videoPro");
      videoPro.classList.add("videoPro-large");
      stoppedVid.style.margin = "1rem";
      videoPro.addEventListener("ended", () => {
        videoPro.classList.add("active");
        stoppedVid.classList.add("active");
      });
      // videoPro.classList.remove("active");
      // stoppedVid.classList.remove("active");
    }
  }
});

const transitIn = document.querySelectorAll(".ad");
const fadeIn = document.querySelectorAll(".fadein");

radioBtns.forEach((btn) => {
  btn.addEventListener("change", function () {
    coloring.textContent = this.value;
  });
});

const beyondHeader = document.querySelector(".beyond-header");

const navBar = document.querySelector("nav");
const stick = document.querySelector(".stick");
const beyondHolder = document.querySelector(".beyond-holder");

window.addEventListener("scroll", (e) => {
  let scrollY = window.scrollY;
  let stickingArea = beyondHolder.offsetTop - navBar.offsetHeight + 35;

  if (scrollY > stickingArea) {
    beyondHeader.classList.add("active");
    beyondHolder.classList.add("active");
  } else {
    beyondHeader.classList.remove("active");
    beyondHolder.classList.add("active");
  }

  let transitPosition = window.innerHeight / 1.2;
  transitIn.forEach((transit) => {
    const transitPlace = transit.getBoundingClientRect().top;

    if (transitPlace < transitPosition) {
      transit.classList.add("show");
    } else {
      transit.classList.remove("show");
    }
  });

  fadeIn.forEach((fade) => {
    transitPosition = window.innerHeight / 1.5;
    let fadePosition = fade.getBoundingClientRect().top;
    if (fadePosition < transitPosition) {
      fade.classList.add("fade-in");
    } else {
      fade.classList.remove("fade-in");
    }
  });
});
