import React, { useEffect } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
// import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
import {
  actFetchProductsRequest,
  actDeleteProductRequest,
} from "./../../actions/index";

function ProductListPage(props) {
  // cach viet componentDidMount bang hooks
  useEffect(() => {
    // truyen vao 3 tham so la: endpoint, method, data
    // callApi("products", "GET", null).then((res) => {
    //   props.fetchAllProducts(res.data);
    // });
    props.fetchAllProducts();
  }, []);

  // DELETE PRODUCT
  // id này là tham số nhận lại product.id được truyền từ ProductItem sang
  const onDelete = (id) => {
    console.log(id);
    props.onDeleteProduct(id);
  };

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
        // console.log('val',val);
        return (
          <ProductItem
            key={index}
            product={val}
            index={index}
            onDelete={onDelete}
          />
        );
      });
    }
    return result;
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <Link to="/product/add" className="btn btn-info mb-10">
        Add Product
      </Link>
      {/* products trong store */}
      <ProductList>{showProducts(props.products)}</ProductList>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products_key,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      console.log(id);
      dispatch(actDeleteProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
