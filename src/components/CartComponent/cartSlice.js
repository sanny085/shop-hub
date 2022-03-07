import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'; 
import { useSelector, useDispatch } from "react-redux";

const initialCart = { 
  cartItems : [],
  cartTotalQuantity : 0,
  cartTotalAmount : 0,
};


export const cartSlice = createSlice({
  name: "cart",
  initialState : initialCart,
  
  reducers: {
    addToCart: (state, action) => { 
       
      const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id)

      if(itemIndex >=0) {  
        state.cartItems[itemIndex].quantity += 1;
        toast.info('Product is added to cart', {
            position: "top-right",
            autoClose: 2000, 
            });
      } else{
        const tempProduct = {...action.payload, quantity : 1}
        // console.log('action cart 2', tempProduct) 
        state.cartItems.push(tempProduct)
        console.log('ADDTOCart Function', state?.cartItems && state?.cartItems)
        toast.success(`${tempProduct.name} Added to Cart!`, {
            position: "top-right",
            autoClose: 2000, 
            });
      } 
    },

    removeToCart: (state, action) => {
      const removedItem = state.cartItems.filter((item) =>
          item._id !== action.payload._id
      )
      state.cartItems = removedItem;
      toast.error(`${action.payload.name} removed from cart`, {
        position: "top-right",
        autoClose: 2000, 
        });
    },


    increaseItem: (state, action) => {
    
      // state.data[action.payload - 1].quantity += 1;
      const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id)
      if(state.cartItems[itemIndex].quantity >= 1){
          state.cartItems[itemIndex].quantity +=1
      } 
     
    },
    decreaseItem: (state, action) => {
     // state.data[action.payload - 1].quantity -= 1;
     const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id)
        if(state.cartItems[itemIndex].quantity > 1){
            state.cartItems[itemIndex].quantity -=1
        }
    },

    clearItemsFromCart: (state) => {
        state.cartItems = [];
        toast.error(`Your Cart is empty`, {
            position: "top-right",
            autoClose: 1000, 
            });
    }, 

    // getTotalPrice : (state) => {
    //   // console.log('we are connecting',state)
      
    //   //   let {total, quantity} = state.cartItems.reduce(
    //   //       (Accumulator, cardItem) => {
    //   //           console.log('Total 1',Accumulator, cardItem);
    //   //           const { price, quantity } = cardItem;
    //   //           const priceInt = parseInt(price.substring(1));
    //   //           console.log('Accurate : ', priceInt);
               
    //   //           const itemTotal = priceInt * quantity;

    //   //           Accumulator.total += itemTotal;
    //   //           Accumulator.quantity += quantity;
    //   //           return Accumulator;
    //   //       },
    //   //       { total:'$0', quantity: 0}
    //   //   );
    //   //   console.log('Total 2',total, quantity);
    //   //   let letter = '$';
 
    //     state.cartTotalQuantity = quantity;
    //     state.cartTotalAmount = total;

    // },
    getTotalPrice : (state) => {
      console.log('we are connecting add to1',state.cartItems)
      
      let total=0;
      let quantitys=0;
      console.log('state sunnay checkpost 1:---',state)

      state.cartItems.map((item,index)=>{
        console.log('we are connecting 2 ',item)
        const { price, quantity } = item;
        const priceInt = parseInt(price.substring(1));
        console.log('Accurate : ', priceInt);
       
        total += priceInt * quantity;
        quantitys += quantity;

        console.log('Accurate 2',total);


      })
      state.cartTotalQuantity = quantitys;
      let letter = '$'
      state.cartTotalAmount = letter.concat(total.toString());
 
    }
   
  },
  
});

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, increaseItem, decreaseItem, clearItemsFromCart ,getTotalPrice } = cartSlice.actions;
console.log('cartSlice',removeToCart())
export default cartSlice.reducer;
