import * as Types from "./../constants/ActionTypes";
import callApi from "./../utils/apiCaller";

// === GET PRODUCT ===
/* 
    ACTION CALL API
    Khi gỌi action actFetchProductsRequest 
    ===> nó call API lấy data về và lưu vao store thông qua action actFetchProducts
*/
export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      dispatch(actFetchProducts(res.data));
    });
  };
};

// action lấy data lưu vao store
export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    payload: products,
  };
};

// === DELETE PRODUCT ===
export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "DELETE", null).then((res) => {
      dispatch(actDeleteProduct(id));
    });
  };
};

export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    payload: id,
  };
};

// === ADD PRODUCT ===
export const actAddProductRequest = (product) => {
  return (dispatch) => {
    return callApi("products", "POST", product).then((res) => {
      dispatch(actAddProduct(res.data));
    });
  };
};

export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    payload: product,
  };
};

// === EDIT PRODUCT ===
export const actGetProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "GET", null).then((res) => {
      dispatch(actGetProduct(res.data));
    });
  };
};

export const actGetProduct = (product) => {
  return {
    type: Types.EDIT_PRODUCT,
    payload: product,
  };
};
