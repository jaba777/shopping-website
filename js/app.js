// Cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
//open Cart
cartIcon.addEventListener('click',()=>{
    cart.classList.add('active');
})
//Close Cart
closeCart.addEventListener('click',()=>{
    cart.classList.remove('active');
})


// Cart Working

if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready);
} else{
    ready();
}

function ready(){
    let removeCartButtons=document.getElementsByClassName('cart-remove');
    for(let i=0;i<removeCartButtons;i++){
        let button=removeCartButtons[i];
        button.addEventListener('click',removeCartItem);
    }
}

function removeCartItem(){
    
}