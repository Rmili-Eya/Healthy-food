let btns=document.getElementsByClassName('btn')
for(let i=0;i<btns.length;i++){
    addbtn=btns[i];
    addbtn.addEventListener('click',addtocart);
}
function addtocart(event){
    btnclick=event.target;
    CardItems=btnclick.parentElement.parentElement.parentElement;
    titre=CardItems.getElementsByClassName('card-title')[0].innerText;
    price=CardItems.getElementsByClassName('pris')[0].innerText;
    imagesrc=CardItems.getElementsByClassName('card-img-top')[0].src;
    console.log(titre,price,imagesrc)

    additemcard(titre,price,imagesrc)
}






function additemcard(titre,price,imagesrc){
var cartrow=document.createElement('div')
  var cartrowcontents=`<div>
  <img class="img"src="${imagesrc}"
  <span>${titre}</span>
  <span>${price}</span>
  </div>`
  cartrow.innerHTML=cartrowcontents
  var cartitems = document.getElementsByClassName('cart-items')[0]
  cartitems.appendChild(cartrow)

}