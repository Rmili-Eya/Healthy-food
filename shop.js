if (document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}
function ready(){
    let removeCartItemsButtons=document.getElementsByClassName('btn-danger');
    for (let i=0;i<removeCartItemsButtons.length;i++)
    {
        let button=removeCartItemsButtons[i];
        button.addEventListener('click',removeCartItem)
    }

    let quantityInputs=document.getElementsByClassName('cart-quantity-input');
    for(let i=0;i<quantityInputs.length;i++)
    {
        let input=quantityInputs[i];
        input.addEventListener('click',quantityChanged)
    }
    let addToCartButtons=document.getElementsByClassName('btn-success');
    for (let i=0;i<addToCartButtons.length;i++){
        addButton=addToCartButtons[i];
        addButton.addEventListener('click',addToCart);
    }
}
function removeCartItem(event){
    let buttonClicked=event.target;//recupérer la boutton cliquer 
    buttonClicked.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
}
function addToCart(event){
    
    btnAdd=event.target;
  let shopItem= btnAdd.parentElement.parentElement.parentElement.parentElement.parentElement;
  console.log(shopItem)
  let title =shopItem.getElementsByClassName('card-title')[0].innerText;
  let price =shopItem.getElementsByClassName('card-price')[0].innerText;
 let imageSrc =shopItem.getElementsByClassName('card-img-top')[0].src;
addItemToCart(title,price,imageSrc)
}
function addItemToCart(title,price,imageSrc){
   let row=document.createElement('div') ;
   var cartRowContent = `<div class="row cart-row">
   <div class="col-md-4 cart-item cart-column">
     <img src="${imageSrc}" width="100" height="100" alt="" />
     <span>${title}</span>
   </div>
   <div class="col-md-4 cart-price cart-column">${price}</div>
   <div class="col-md-4 cart-quantity cart-column">
     <input class="cart-quantity-input" type="number" value="1" />
     <button class="btn btn-danger" type="button">Remove</button>
   </div>
 </div>`
   row.innerHTML = cartRowContent;
   let cartItems2=document.getElementsByClassName('cart-items')[0]
    cartItems2.appendChild(row)
    updateCartTotal()
}
function quantityChanged(event){
    let input =event.target;
    if (isNaN(input.value) || input.value<=0)
    {
        input.value=1;
    }
    updateCartTotal()
}


function updateCartTotal(){
    let total=0;
 let cartItems=document.getElementsByClassName('cart-items')[0];
 let cartRows=cartItems.getElementsByClassName('cart-row');
 for (let i=0;i<cartRows.length;i++)
 { 
     let cartRow=cartRows[i];

    let cartQuantity=cartRow.getElementsByClassName('cart-quantity-input')[0];
    let cartPrice=cartRow.getElementsByClassName('cart-price')[0];

    let price =parseFloat(cartPrice.innerHTML.replace('$',''));

    let quantity=cartQuantity.value;
    
   total=total +(price * quantity);


 }
 total=Math.round(total*100)/100;
 let cartTotalPrice=document.getElementsByClassName('cart-total-price')[0].innerHTML='$'+total;
  console.log(cartTotalPrice);
}