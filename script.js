let buttonAction = document.querySelectorAll("button");

// let buttonDoger = document.getElementById("button-doger");
// let buttonPink = document.getElementById("button-pink");

let imgStarbuck = document.getElementById("starbucks");

let navToggle = document.querySelector(".nav-toggle");

let mobileNav = document.querySelector(".mobile-nav");

buttonAction[0].addEventListener("click", () => {
  imgStarbuck.src = "./assets/img1.png";
  imgStarbuck.classList.remove("perkecil-doger");

  imgStarbuck.classList.add("animate__animated", "animate__zoomInRight");
  setTimeout(() => {
    imgStarbuck.classList.remove("animate__animated", "animate__zoomInRight");
  }, 1000);
});

buttonAction[1].addEventListener("click", () => {
  imgStarbuck.src = "./assets/img2.png";
  imgStarbuck.classList.add("perkecil-doger");

  imgStarbuck.classList.add("animate__animated", "animate__zoomInRight");
  setTimeout(() => {
    imgStarbuck.classList.remove("animate__animated", "animate__zoomInRight");
  }, 1000);
});

buttonAction[2].addEventListener("click", () => {
  imgStarbuck.src = "./assets/img3.png";
  imgStarbuck.classList.remove("perkecil-doger");

  imgStarbuck.classList.add("animate__animated", "animate__zoomInRight");
  setTimeout(() => {
    imgStarbuck.classList.remove("animate__animated", "animate__zoomInRight");
  }, 1000);
});

navToggle.addEventListener("click", () => {
  if (mobileNav.style.display === "none") {
    mobileNav.style.display = "block";
    mobileNav.style.right = "0";
  } else {
    mobileNav.style.display = "none";
    mobileNav.style.right = "100%";
  }
});
