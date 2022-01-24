import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeToCart, increaseItem, decreaseItem, clearItemsFromCart,getTotalPrice} from "./cartSlice"

function Cart(props) {

const dispatch = useDispatch();
const {cartItems, cartTotalAmount,cartTotalQuantity }=useSelector(state=>state.cart)
const state1 = useSelector(state=>state)

 
console.log('Cart cart Item', state1);

useEffect(()=>{
  dispatch(getTotalPrice());
},[cartItems])

//const totalAmount=useSelector(state=>state.cart.cartTotalAmount)
console.log('cart Item',cartItems);

console.log({cartItems:cartItems})
return (
    <div className="cart-wrapper noselect">
      <div className="cart-header">
        <h3>Shopping Cart</h3>
      </div>

      {
        cartItems.length === 0 ? (
        <div className="cart-checkout">
          <br/>
           <div className="cart-shipping"><h4>Cart is Empty</h4></div>
          <br/>
        </div>
        ) : (
          <>
        <div className="cart-list">
        <ul>
         {cartItems.map((item,index)=> <li className="cart-item">
            <div className="cart-item-img">
            {console.log('Removed Item', item)}
            <img
              src={item.image}
              width="90"
              height="38"
              alt="cart item"
            />
            </div>
            <div className="cart-item-name">
              <span>{item.name} </span>
            </div>
            <div className="cart-item-qty">
              {item.quantity>1 ? <span onClick={()=>dispatch(decreaseItem(item))}><FontAwesomeIcon icon={['fas','minus']}/></span>
                           :<span onClick={()=>dispatch(removeToCart(item))} className="cart-delete-item"><FontAwesomeIcon icon={['far','trash-alt']}/></span>
              }
              <input type='number' value={item.quantity} disabled/>
              <span onClick={()=>dispatch(increaseItem(item))}><FontAwesomeIcon icon={['fas','plus']}/></span>
            </div>
            <div className="cart-item-price">{parseInt(item.price.substring(1)) * item.quantity}</div>
          </li>
         )}
        </ul>
      </div>

      
        <div className="cart-checkout-button">
            <button onClick={()=>dispatch(clearItemsFromCart())}>Clear Card</button>
        </div>
      
      
      <div className="cart-checkout">
        {/* <div className="cart-total"><h4>Total :</h4><span>${cartItems.length > 0 ? cartItems.reduce((a, b) => a +  parseInt(b.price.substring(1)), 0 ) : 0 } </span></div> */}
        <div className="cart-total"><h4>Total :</h4><span>{cartTotalAmount &&  cartTotalAmount} </span></div>
       
        <div className="cart-shipping"><h4>Shipping :</h4><span>Free Shipping</span></div>
        <div className="cart-checkout-button">
          <button>Proceed to Checkout</button>
        </div>
      </div>
      </>
      
      )
      }
     
    </div>
  );
}

export default Cart;
