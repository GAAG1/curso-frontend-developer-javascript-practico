const menuEmail=document.querySelector(".navbar-email");
const menuDesktop=document.querySelector(".desktop-menu");
const menuMoIcon=document.querySelector(".menu");
const mobileMenu=document.querySelector(".mobile-menu");
const carIcon=document.querySelector(".navbar-shopping-cart");
const lisCarCheck=document.querySelector(".product-detail");

menuEmail.addEventListener("click",toggleMD);
menuMoIcon.addEventListener("click",toggleMM);
carIcon.addEventListener("click",togglecar);

function togglecar(){
    const isMBclosed= mobileMenu.classList.contains ("inactive");
    /* abrir car list */
     if (!isMBclosed){
        mobileMenu.classList.add("inactive");
    };
    lisCarCheck.classList.toggle("inactive");
} ;

function toggleMD(){
    menuDesktop.classList.toggle('inactive');  

}
function toggleMM(){
    const isLCclosed=lisCarCheck.classList.contains("inactive")
    if (!isLCclosed){
        lisCarCheck.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive")
}




