import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import callApi from "./../../utils/apiCaller";
import { connect } from "react-redux";
import { actAddProduct, actAddProductRequest } from "../../actions/index";

function ProductActionPage(props) {
  const [inputValues, setInputValues] = useState({
    id: "",
    txtName: "",
    txtPrice: "",
    chkbStatus: "",
  });

  // handle change input va nhan value khi nhap vao input
  const onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    // set lai state voi moi name la 1 value tuong ung
    setInputValues({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    if (props.match) {
      let id = props.match.params.id;
      callApi(`products/${id}`, "GET", null).then((res) => {
        let data = res.data;
        setInputValues({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.chkbStatus,
        });
      });
    }
  }, []);

  // add product
  const onSave = (event) => {
    // chan load lai trang
    event.preventDefault();

    // neu co id la update
    const { id } = inputValues;
    const product = {
      id: id,
      name: inputValues.txtName,
      price: inputValues.txtPrice,
      status: inputValues.chkbStatus,
    };
    if (id) {
      //update
      callApi(`products/${id}`, "PUT", {
        name: inputValues.txtName,
        price: inputValues.txtPrice,
        status: inputValues.chkbStatus,
      }).then((res) => {
        props.history.goBack();
      });
    } else {
      // // method POST phai gui data len voi key va value tuong ung
      // callApi("products", "POST", {
      //   name: inputValues.txtName,
      //   price: inputValues.txtPrice,
      //   status: inputValues.chkbStatus,
      // }).then((res) => {
      //   // console.log(res);
      //   props.history.goBack();
      // });
      props.onAddProduct(product);
      props.history.goBack();
    }
  };

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <form onSubmit={onSave}>
        <div className="form-group">
          <label>Name Product</label>
          <input
            type="text"
            className="form-control"
            name="txtName"
            value={inputValues.txtName}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            name="txtPrice"
            value={inputValues.txtPrice}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label>Status</label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="chkbStatus"
              value={inputValues.chkbStatus}
              onChange={onChange}
              checked={inputValues.chkbStatus}
            />
            Stocking
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <Link to="/product-list" className="btn btn-danger ml-10">
          Back
        </Link>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductActionPage);
