import React, { useState, useEffect } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import callApi from "./../../utils/apiCaller";

function ProductListPage(props) {
  const [products, setProducts] = useState([]);

  // cach viet componentDidMount bang hooks
  useEffect(() => {
    // truyen vao 3 tham so la: endpoint, method, data
    callApi("products", "GET", null).then((res) => {
      console.log("res in callApi", res);
      setProducts(res.data);
    });
  }, []);

  // let products = [];

  // call api by axios
  // axios({
  //   method: "GET",
  //   url: "https://608282675dbd2c0017579b33.mockapi.io/api/products",
  //   data: null,
  // })
  //   .then((res) => {
  //     products = res.data;
  //     console.log("data in param res", res);
  //     console.log("data in variable products", products);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // let { products } = props; // goi props products trong mapStateToProps

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

const mapStateToProps = (state) => {
  return {
    products: state.products_key,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
