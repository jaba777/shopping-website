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



const boxTitle=[
    {
        img: './Images/airpod-12black.jpg',
        title: 'Airpod 12',
        price: "25",
        id: 0
    },
    {
        img: './Images/pro-3-Black.jpg',
        title: 'Pro 3 Black',
        price: "30",
        id: 1
    },
    {
        img: './Images/pro2.jpg',
        title: 'Pro 2 Black',
        price: "35",
        id: 2
    },
    {
        img: './Images/Pro5.jpg',
        title: 'Pro 5 White',
        price: "28",
        id: 3
    },
    {
        img: './Images/reon-white.jpg',
        title: 'Reon White',
        price: "40",
        id: 4
    },
    {
        img: './Images/Torima-gaming.jpg',
        title: 'Torima',
        price: "40",
        id: 5
    },
    {
        img: './Images/Airdots-black.jpg',
        title: 'Airdots black',
        price: "60",
        id: 6
    },
    {
        img: './Images/Pro-5 white.jpg',
        title: 'Pro 5 white',
        price: "60",
        id: 7
    },
];

let sectionIndex=0;
const cartContent=document.querySelector('.cart-content');


let addCart=document.querySelectorAll('.add-cart').forEach(function(index,ind){
  index.addEventListener('click', function(){
      sectionIndex=ind;
      cart.classList.add('active');
      let cartBox=document.createElement('div');
      cartBox.className='cart-box';
      cartBox.innerHTML=`
      <img src=${boxTitle[sectionIndex].img}  alt=${boxTitle[sectionIndex].title} class="cart-img">
      <div class="detail-box">
          <div class="cart-product-title">${boxTitle[sectionIndex].title}</div>
          <div class="cart-price">$ ${boxTitle[sectionIndex].price}</div>
          <input type="number" min="1" value="1" class="cart-quantity">
      </div>
      <i class="fas fa-trash cart-remove"></i>
      `;
     cartContent.appendChild(cartBox);
  })
})

