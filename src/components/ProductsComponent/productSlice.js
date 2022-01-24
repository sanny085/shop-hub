import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const initialStateProduct = {
  data: data.products
};

export const productSlice = createSlice({
  name: "products",
  initialState : initialStateProduct,
  reducers: {
    
  },
});

// Action creators are generated for each case reducer function
//export const { addToCart, removeToCart, increaseItem, decreaseItem } = productSlice.actions;

export default productSlice.reducer;
