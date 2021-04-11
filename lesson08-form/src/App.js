import "./App.css";
import React, { useState } from "react";

function App() {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  // dat name trong input trung voi state
  const [inputValues, setInputValues] = useState({
    txtUserName: "code",
    txtPassword: "123",
    txtDesc: "detail...",
    sltGender: 0,
    radioLang: "en",
    checkBoxStatus: false,
  });

  // lang nghe su thay doi trong input
  const onHandleChange = (event) => {
    // lay ra value vua nhap vao o input
    // console.log(event.target.value);
    // luu value vua nhap vao state
    // setUserName({
    //   userName: event.target.value,
    // });
    /**
     * Xu ly voi nhieu o input
     * lay value cua cac o input thong qua name
     * name: la name dat cho moi o input (txtName, txtPassword,...)
     */
    // const target = event.target;
    // const name = target.name;
    // const value = target.value;

    /**
     * use destructuring
     * name: txtName, txtPassword
     * nếu không sử dụng destructuring thì => event.target.name
     */
    const { name } = event.target;

    // xu ly cho checkbox
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setInputValues({ ...inputValues, [name]: value });
  };

  const onHandleSubmit = (event) => {
    // chăn không cho submit
    event.preventDefault();
    console.log(inputValues);
  };

  return (
    <div className="container mt-30">
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Form</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={onHandleSubmit}>
                {/* user */}
                <div className="form-group">
                  <label>Username: </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={onHandleChange}
                    name="txtUserName"
                    value={inputValues.txtUserName}
                  />
                </div>
                {/* password */}
                <div className="form-group">
                  <label>PassWord: </label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={onHandleChange}
                    name="txtPassword"
                    value={inputValues.txtPassword}
                  />
                </div>
                {/* use textarea */}
                <div className="form-group">
                  <label>Detail: </label>
                  <textarea
                    row="3"
                    className="form-control"
                    onChange={onHandleChange}
                    name="txtDesc"
                    value={inputValues.txtDesc}
                  ></textarea>
                </div>
                {/* use select */}
                <label>Gender: </label>
                <select
                  className="form-control bt-10"
                  value={inputValues.sltGender}
                  onChange={onHandleChange}
                  name="sltGender"
                >
                  <option value={0}>Female</option>
                  <option value={1}>Male</option>
                </select>
                {/* radio */}
                <label>Language: </label>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="radioLang"
                      value="en"
                      onChange={onHandleChange}
                      checked={inputValues.radioLang === "en"}
                    />
                    English
                  </label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="radioLang"
                      value="vi"
                      onChange={onHandleChange}
                      checked={inputValues.radioLang === "vi"}
                    />
                    Vietnamese
                  </label>
                </div>
                {/* check-box */}
                <label>Status: </label>
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="checkBoxStatus"
                      onChange={onHandleChange}
                      value={true}
                      checked={inputValues.checkBoxStatus === true}
                    />
                    Status
                  </label>
                </div>
                {/* button */}
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                &nbsp;
                <button type="reset" className="btn btn-default">
                  Delete All
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
