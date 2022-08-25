var swiper = new Swiper(".mySwiper1", {
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
    type: "progressbar"
  },
  loop: true,
});


let circles = document.getElementsByClassName("milestonz")[0];
let pagin = document.getElementsByClassName("mySwiper1")[0];
window.onload = function(){
  //modal();
}

window.onscroll = function (e) {
  let sidebar = document.getElementsByClassName("sidebar")[0];
  let menu = document.getElementsByClassName("navbar")[0];

  if (window.scrollY > 80) menu.style.background = "#5d0068";
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

function darker(e) {
  let games = document.getElementsByClassName("games");
  for (let i = 0; i < games.length; i++) {
    if (games[i] != e) {
      games[i].style.filter = "grayscale(100%) blur(1px)";
    }
  }
}
function backfromdark(e) {
  let games = document.getElementsByClassName("games");
  for (let i = 0; i < games.length; i++) {
    if (games[i] != e) {
      games[i].style.filter = "grayscale(0%) blur(0px)";
    }
  }
}

function ChangeActiveMilestone(e){
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

let openState = 0;
let menu = document.getElementsByClassName("responsive-nav")[0];
function MenuOpenClose(){
  if(!openState)
    menu.style.display = "block";
  else
    menu.style.display = "none";
  openState = !openState;
}