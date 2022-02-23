window.onscroll = function (e) {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    let menu = document.getElementsByClassName("navbar")[0];
    
    if(window.scrollY > 80)
        menu.style.background = "#5d0068";
    else
        menu.style.background = "transparent";

    if(window.scrollY > 600)
        sidebar.style.right="0px";
    else
        sidebar.style.right="-40px";
  };

function openclose(obj){
    i = obj.getElementsByClassName("fa-solid")[0];
    if(i.classList.contains("fa-plus")){
        i.classList.remove("fa-plus");
        i.classList.add("fa-minus")
    }
    else{
        i.classList.remove("fa-minus")
        i.classList.add("fa-plus");
    }
}
function modal(){
    document.querySelector("#Modal").classList.add("show");
    document.querySelector("#Modal").style.display= "block";
}
function modalClose(){
    document.querySelector("#Modal").classList.add("show");
    document.querySelector("#Modal").style.display= "none";

}
function comingsoon(obj){
    
    obj.children[0].innerHTML = "Coming Soon!";
}
function back(){

}