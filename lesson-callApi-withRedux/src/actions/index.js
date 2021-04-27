import * as Types from "./../constants/ActionTypes";
import callApi from "./../utils/apiCaller";

// action call API
/* 
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
