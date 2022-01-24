import React from "react";
import data from "../../data";
import ProductsHeader from "./ProductsHeader";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";


function Product(props) {
  const productsData=useSelector(state=>state.products?.data)
  console.log(productsData)
  return (
    <div className="products">
      <ProductsHeader />
      <div className="products-container">
        <div className="product-cards" dir="ltr">
          {productsData.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
      <div className="related-products">
          <div className="related-products-header">
            <h1>Related Products</h1>
          </div>
          <div className="related-products-card">
          {productsData.map((product) => (
            <ProductCard product={product}  />
          ))}
          </div>
        </div>
    </div>
  );
}

export default Product;
