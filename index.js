const menuEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuMoIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carIcon = document.querySelector(".navbar-shopping-cart");
const lisCarCheck = document.querySelector(".product-detail");
const cardsContainer= document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleMD);
menuMoIcon.addEventListener("click", toggleMM);
carIcon.addEventListener("click", togglecar);

function togglecar() {
  const isMBclosed = mobileMenu.classList.contains("inactive");
  const isMDclosed = menuDesktop.classList.contains("inactive");

  /* abrir car list */
  if (!isMBclosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isMDclosed) {
    menuDesktop.classList.add("inactive");
  }
  lisCarCheck.classList.toggle("inactive");
}
function toggleMD() {
  const isLCclosed = lisCarCheck.classList.contains("inactive");
  if (!isLCclosed) {
    lisCarCheck.classList.add("inactive");
  }
  menuDesktop.classList.toggle("inactive");
}
function toggleMM() {
  const isLCclosed = lisCarCheck.classList.contains("inactive");
  if (!isLCclosed) {
    lisCarCheck.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

const productlist = [];
productlist.push({
  name: "celular",
  price: 120,
  imagen:
    "https://i.pinimg.com/originals/9f/4c/c5/9f4cc55de7314756057faeb936f0cd88.png",
});
productlist.push({
  name: "bike",
  price: 200,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productlist.push({
  name: "Portatil HP",
  price: 1500,
  imagen:
    "https://img.freepik.com/vector-gratis/icono-portatil-abierto-ilustracion-dibujos-animados_107791-4113.jpg?w=2000",
});

 function renderProduct(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
      
        const imgproduct= document.createElement("img");
        imgproduct.setAttribute("src", product.imagen);
      
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
       
        const productInfoDiv = document.createElement("div");
      
        const precio = document.createElement("p");
        precio.innerText="$ "+product.price;
      
        const name= document.createElement("p");
        name.innerText=product.name;
      
        const figure= document.createElement("figure");
        const imgCar = document.createElement("img");
        imgCar.setAttribute("src", "./icons/bt_add_to_cart.svg");
      
        productCard.appendChild(imgproduct);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figure)
        productInfoDiv.appendChild(precio);
        productInfoDiv.appendChild(name);
        figure.appendChild(imgCar);
       cardsContainer.appendChild(productCard);
      
      };
 }
 renderProduct(productlist);