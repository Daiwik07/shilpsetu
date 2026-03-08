let cart = [];
let popupItem = {};

function addToCart(name,price,img){

cart.push({name,price,img,qty:1});

localStorage.setItem("cart", JSON.stringify(cart));

updateCart();

}

function updateCart(){

let cartItems = document.getElementById("cart-items");
let total = 0;

cartItems.innerHTML="";

if(cart.length === 0){

document.getElementById("empty-cart").style.display="block";

}else{

document.getElementById("empty-cart").style.display="none";

}

cart.forEach((item,index) => {

let li = document.createElement("li");

li.innerHTML = `

<img src="${item.img}" class="cart-img">

<span class="cart-name">${item.name}</span>

<button class="qty-btn" onclick="changeQty(${index},-1)">-</button>

${item.qty}

<button class="qty-btn" onclick="changeQty(${index},1)">+</button>

<button class="qty-btn remove-btn" onclick="removeItem(${index})">x</button>

`;

cartItems.appendChild(li);

total += item.price * item.qty;

});

document.getElementById("total").textContent = total;

document.getElementById("cart-count").textContent = cart.length;

}

function changeQty(i,val){

cart[i].qty += val;

if(cart[i].qty <=0){
cart.splice(i,1);
}

updateCart();

}

function removeItem(i){

cart.splice(i,1);
updateCart();

}

function toggleCart(){

document.getElementById("cart").classList.toggle("open");

}

function openPopup(name,price,img){

popupItem={name,price};

document.getElementById("popup").style.display="flex";

document.getElementById("popup-img").src=img;

document.getElementById("popup-title").textContent=name;

document.getElementById("popup-price").textContent="₹"+price;

}

function closePopup(){

document.getElementById("popup").style.display="none";

}

function popupAdd(){

addToCart(popupItem.name,popupItem.price);

closePopup();

}

function searchProducts(){

let input=document.getElementById("search").value.toLowerCase();

let products=document.querySelectorAll(".product");

products.forEach(p => {

let name=p.querySelector("h2").textContent.toLowerCase();

if(name.includes(input)){

p.style.display="block";

}else{

p.style.display="none";

}

});

}