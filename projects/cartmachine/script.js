const container=document.querySelector(".container");
const cartBox=document.querySelector(".cart-box");
const cart={
    userCart:[]
}
function cartApp(event){
    const target=event.target;
    if(target.classList.contains("btn")){
        const Element=target.closest(".product");
        getProduct(Element);
    }
}
function getProduct(productCard){
    cart.userCart.push({
        productName:productCard.dataset.name,
        productPrice:productCard.dataset.price,
        productQuantity:1
    });
    console.log(cart);
    ui();
};

function ui(){
    cartBox.innerHTML="";
    const productCart=document.createElement("div");
    productCart.innerHTML=`
    <div>
        <h3>Product Name${cart.userCart.productName}</h3>
        <p>Price${cart.userCart.productPrice}</p>
        <p>Quantity: <span>${cart.userCart.productQuantity}</span></p>
        <button>+</button>
        <button>-</button>
        <button>Delete</button>
        </div>`
    cartBox.append(productCart);
}



container.addEventListener("click",cartApp);