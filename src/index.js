import { StrictMode } from "react";
import ReactDOM from "react-dom";
import fontawesome from "./fontawesome";
import App from "./App";
import store from "./store";
import {Provider} from "react-redux";
const rootElement = document.getElementById("root");
import {getTotalPrice} from './components/CartComponent/cartSlice'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

//let persistor = persistStore(store);
console.log('Store',store);
// store.dispatch(getTotalPrice());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
     {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>,
  rootElement
);
