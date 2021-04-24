import React, { useState } from "react";
import { Link } from "react-router-dom";
import callApi from "./../../utils/apiCaller";

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

  // add product
  const onSave = (event) => {
    // chan load lai trang
    event.preventDefault();
    // method POST phai gui data len voi key va value tuong ung
    callApi("products", "POST", {
      name: inputValues.txtName,
      price: inputValues.txtPrice,
      status: inputValues.chkbStatus,
    }).then((res) => {
      // console.log(res);
      props.history.goBack();
    });
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

export default ProductActionPage;
