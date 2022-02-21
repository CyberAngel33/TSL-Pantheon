window.onscroll = function (e) {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    let menu = document.getElementsByClassName("navbar")[0];
    if(window.scrollY > 600){
        sidebar.style.right="0px";
        menu.style.background = "#5d0068";
    }
    else{
        sidebar.style.right="-40px";
        menu.style.background = "transparent";
    }
  };