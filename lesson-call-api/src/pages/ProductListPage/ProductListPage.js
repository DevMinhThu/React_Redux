import React from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";

function ProductListPage() {
  let products = [
    {
      stt: 1,
      id: 2,
      name: "Iphone",
      price: 1000,
      status: true,
      action: true,
    },
  ];

  // show product function
  const showProducts = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((val, index) => {
        return <ProductItem key={index} product={val} index={index} />;
      });
    }
    return result;
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <button type="button" className="btn btn-info mb-10">
        Add Product
      </button>
      <ProductList>{showProducts(products)}</ProductList>
    </div>
  );
}

export default ProductListPage;
