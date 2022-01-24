import "./App.css";
import "./shop.css";
import "./productDetails.css";
import "./cart.css";
import "./searchedProduct.css";
import "./login.css";
import "./button.css";
import "./orders.css";
import "./modal.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/HeaderComponent/Header";
import Products from "./components/ProductsComponent/Products";
import Footer from "./components/FooterComponent/Footer";
import Buttons from "./components/FooterComponent/Buttons";
import ProductDetails from "./components/ProductsComponent/ProductDetails";
import Cart from "./components/CartComponent/Cart";
import SearchedProduct from "./components/ProductsComponent/SearchedProduct";
import Login from "./components/Users/Login";
import SignUp from "./components/Users/SignUp";
import MyAccount from "./components/OrderComponent/MyAccount";


import Logout from "./components/Users/Logout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Router>
    <ToastContainer position="top-right" />
      <div className="grid-container noselect">
        <Header />
        <main className="main-content noselect">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/shop" component={ProductDetails} />
            <Route exact path="/shop/:id" component={ProductDetails} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/blog" component={SearchedProduct} />
            <Route exact path="/search" component={SearchedProduct} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/myaccount" component={MyAccount} />
            
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </main>
        <Buttons />
        <Footer />
      </div>
    </Router>
  );
}
