var swiper1 = new Swiper(".mySwiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  freeMode: true,
  coverflowEffect: {
    rotate: 50,
    stretch: -25,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  speed: 1800,
  autoplay: {
    delay: 1300,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  loop: true,
});

var swiper2 = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: -25,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  speed: 1800,
  autoplay: {
    delay: 1300,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});

var swiper3 = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  speed: 1800,
  autoplay: {
    delay: 1300,
    disableOnInteraction: false,
  },
  loop: true,
});

var swiper4 = new Swiper(".mySwiper3", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

let circles = document.getElementsByClassName("milestonz")[0];
let pagin = document.getElementsByClassName("mySwiper1")[0];
window.onload = function () {
  //modal();
  if (window.scrollY > 80) document.getElementsByClassName("navbar")[0].style.background = "#5d0068";
  else document.getElementsByClassName("navbar")[0].style.background = "transparent";
}

window.onscroll = function (e) {
  let sidebar = document.getElementsByClassName("sidebar")[0];
  let menu = document.getElementsByClassName("navbar")[0];

  if (window.scrollY > 80 || document.getElementsByClassName("responsive-navbar-nav")[0].style.display == "flex") menu.style.background = "#5d0068";
  else menu.style.background = "transparent";

  if (window.scrollY > 600 && window.outerWidth > 576) sidebar.style.right = "0px";
  else sidebar.style.right = "-40px";
};

function openclose(obj) {
  i = obj.getElementsByClassName("fa-solid")[0];
  if (i.classList.contains("fa-plus")) {
    i.classList.remove("fa-plus");
    i.classList.add("fa-minus");
  } else {
    i.classList.remove("fa-minus");
    i.classList.add("fa-plus");
  }
}
function modal() {
  document.querySelector("#Modal").classList.add("show");
  document.querySelector("#Modal").style.display = "block";
}
function modalClose() {
  document.querySelector("#Modal").classList.add("show");
  document.querySelector("#Modal").style.display = "none";
}
function comingsoon(obj) {
  obj.setAttribute("data-text", obj.children[0].innerHTML);
  obj.children[0].innerHTML = "Coming Soon!";
}
function back(obj) {
  obj.children[0].innerHTML = obj.getAttribute("data-text");
}

function onSubmit(token) {
  document.getElementById("demo-form").submit();
}

function ChangeActiveMilestone(e) {
  if (!e.classList.contains("active-milstone")) {
    let Milestones = document.getElementsByClassName("milestones");
    for (let i = 0; i < Milestones.length; i++) {
      if (Milestones[i].classList.contains("active-milstone")) {
        Milestones[i].classList.remove("active-milstone");
      }
    }
    e.classList.add("active-milstone");
  }
}

MenuOpenClose();
function MenuOpenClose() {
  let menu = document.getElementsByClassName("responsive-navbar-nav")[0];
  if (menu.style.display == "none") {
    menu.style.display = "flex";
    document.getElementsByClassName("navbar")[0].style.background = "#5d0068";
  }
  else {
    menu.style.display = "none";
    if (window.scrollY < 80)
      document.getElementsByClassName("navbar")[0].style.background = "none";
  }
  openState = !openState;
}