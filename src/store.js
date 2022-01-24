import { configureStore } from '@reduxjs/toolkit'

import productReducer from './components/ProductsComponent/productSlice'
import authReducer from './components/Users/authSlice'
import cartReducer from './components/CartComponent/cartSlice'

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

// const reducers = combineReducers({
//   products: productReducer,
//   authentication: authReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['navigation'], 
// };


// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk],
// });

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    authentication: authReducer,

  },
})

export default store;