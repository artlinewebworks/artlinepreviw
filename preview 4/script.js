let products = [
 {name:"Hoodie",price:1999,img:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b"},
 {name:"Jacket",price:2999,img:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3"},
 {name:"T-Shirt",price:999,img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},
 {name:"Sneakers",price:3999,img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"}
];

let cart=[];

function renderProducts(list=products){
 let html="";
 list.forEach(p=>{
  html+=
  <div class="card">
    <img src="${p.img}">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick='addToCart(${JSON.stringify(p)})'>Add</button>
  </div>;
 });
 document.getElementById("products").innerHTML=html;
}

function addToCart(p){
 cart.push(p);
 updateCart();
}

function updateCart(){
 let total=0;
 let html="";
 cart.forEach(p=>{
  total+=p.price;
  html+=<p>${p.name} - ₹${p.price}</p>;
 });
 document.getElementById("cartItems").innerHTML=html;
 document.getElementById("total").innerText=total;
 document.getElementById("count").innerText=cart.length;
}

function toggleCart(){
 document.getElementById("cart").classList.toggle("open");
}

function sortProducts(type){
 let sorted=[...products];
 if(type==="low") sorted.sort((a,b)=>a.price-b.price);
 if(type==="high") sorted.sort((a,b)=>b.price-a.price);
 renderProducts(sorted);
}

function checkout(){
 let order={
  name:document.getElementById("name").value,
  address:document.getElementById("address").value,
  phone:document.getElementById("phone").value,
  items:cart
 };

 fetch("http://"https://artlinepreviw.onrender.com/order",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(order)
 }).then(()=>alert("Order Placed"));
}

function scrollToShop(){
 document.getElementById("shop").scrollIntoView({behavior:"smooth"});
}

renderProducts();