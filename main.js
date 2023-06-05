const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector(".desktop-menu");
const menuHamIcon=document.querySelector(".menu");
const mobileMenu=document.querySelector(".mobile-menu");
const menuCarritoIcon=document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer=document.querySelector("#shoppingCartContainer")
const productDetailContainer=document.querySelector("#productDetail")
const productDetailClose=document.querySelector(".product-detail-close")

const cargar=document.querySelector("body").onload=function() {
    const p1 =ProductList();
};

const cardContainer=document.querySelector(".cards-container")


menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);
menuCarritoIcon.addEventListener("click",toggleCarritoshoppingCartContainer)
productDetailClose.addEventListener("click",closeProductDetailAside)

function toggleDesktopMenu(){
    const shoppingCartContainerClose=shoppingCartContainer.classList.contains("inactive")
    const productDetailContainerClose=productDetailContainer.classList.contains("inactive")

    if(!shoppingCartContainerClose){
        shoppingCartContainer.classList.add("inactive")
    }

    if(!productDetailContainerClose){
        productDetailContainer.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    const shoppingCartContainerClose=shoppingCartContainer.classList.contains("inactive")
    const productDetailContainerClose=productDetailContainer.classList.contains("inactive")

    if(!shoppingCartContainerClose){
        shoppingCartContainer.classList.add("inactive")
    }    

    if(!productDetailContainerClose){
            productDetailContainer.classList.add("inactive")
        }

    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoshoppingCartContainer(){
    const mobileMenuClose=mobileMenu.classList.contains("inactive")  
    const menuEmailClose=desktopMenu.classList.contains("inactive")
    const productDetailContainerClose=productDetailContainer.classList.contains("inactive")

    if(!mobileMenuClose){
        mobileMenu.classList.add("inactive")
    }

    if(!menuEmailClose){
        desktopMenu.classList.add("inactive")
    }    

    if(!productDetailContainerClose){
            productDetailContainer.classList.add("inactive")
        }

    shoppingCartContainer.classList.toggle("inactive")
}

function closeProductDetailAside(){
    const shoppingCartContainerClose=shoppingCartContainer.classList.contains("inactive")
    const mobileMenuClose=mobileMenu.classList.contains("inactive")
    const menuEmailClose=desktopMenu.classList.contains("inactive")

    if(!shoppingCartContainerClose){
        shoppingCartContainer.classList.add("inactive")
    }

    if(!mobileMenuClose){
        mobileMenu.classList.add("inactive")
    }

    if(!menuEmailClose){
        desktopMenu.classList.add("inactive")
    }

    productDetailContainer.classList.add("inactive")

}

function ProductList(){
    fetch("./tienda.json")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        data.catalogo.forEach(element => {
            cardContainer.innerHTML+=
            `<div class="product-card">
                <img src="${element.producto.fotos}" alt="">
                <div class="product-info">
                    <div>
                        <p>${element.producto.precio}</p>
                        <p>${element.producto.nombre}</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
        });
    })
}






