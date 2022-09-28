let loader = document.getElementById("preloader");

window.addEventListener('load', function(){
  loader.style.display = "none";
  document.body.style.overflow = 'hidden';
  threedot();
  setInterval(() => {
    threedot();
  }, 4000);
  document.body.style.overflowY = 'scroll';
});
window.addEventListener('onload', function(){
});

let dot1 = document.getElementsByClassName("dot1")[0];
let dot2 = document.getElementsByClassName("dot2")[0];
let dot3 = document.getElementsByClassName("dot3")[0];
function threedot(){
  dot1.style.display = "none";
  dot2.style.display = "none";
  dot3.style.display = "none";
  setTimeout(() => {
    dot1.style.display = "inline";
  }, 1000);
  setTimeout(() => {
    dot2.style.display = "inline";
  }, 2000);
  setTimeout(() => {
    dot3.style.display = "inline";
  }, 3000);
}
