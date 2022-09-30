let loader = document.getElementById("preloader");
window.addEventListener('load', function(){
  setTimeout(() => {
    loader.style.opacity = 0;
  }, "500")
  setTimeout(() => {
    loader.style.display = "none"
    document.body.style.overflow = 'hidden';
    document.body.style.overflowY = 'scroll';
  }, "1000")
});