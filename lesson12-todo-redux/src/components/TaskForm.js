import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

function TaskForm(props) {
  const [inputValues, setInputValues] = useState({
    id: "",
    name: "",
    status: false,
  });

  // console.log('before',props.task);

  useEffect(() => {
    if (props.task) {
      setInputValues({
        id: props.task.id,
        name: props.task.name,
        status: props.task.status,
      });
    }
  }, [props.task]);

  // use giong nhu componentWillReceiveProps
  useEffect(() => {
    if (props.task) {
      setInputValues({
        id: props.task.id,
        name: props.task.name,
        status: props.task.status,
      });
    } else if (!props.task) {
      setInputValues({
        id: "",
        name: "",
        status: false,
      });
    }
  }, [props.task]);

  const onChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }

    setInputValues({ ...inputValues, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValues);
    // THUC THI ACTION
    props.onAddTask(inputValues); // tuong duong voi dispatch(action.addTask(task))

    // cancel & Close Form
    onClear();
    onCloseForm();
  };

  const onCloseForm = () => {
    props.onCloseForm();
  };

  const onClear = () => {
    setInputValues({
      name: "",
      status: false,
    });
  };

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">
          {inputValues.id !== "" ? "Cập nhật công việc" : "Thêm Công Việc"}
          <span className="fa fa-times-circle text-right" onClick={onCloseForm}>
            x
          </span>
        </h3>
      </div>
      <div className="panel-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Tên :</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={inputValues.name}
              onChange={onChange}
            />
          </div>
          <label>Trạng Thái :</label>
          <select
            className="form-control"
            name="status"
            value={inputValues.status}
            onChange={onChange}
          >
            <option value={true}>Kích Hoạt</option>
            <option value={false}>Ẩn</option>
          </select>
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning">
              <span className="fa fa-plus mr-5"></span>Lưu Lại
            </button>
            &nbsp;
            <button type="button" className="btn btn-danger" onClick={onClear}>
              <span className="fa fa-close mr-5"></span>Hủy Bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

// onAddTask la props duoc chuyen tu dispatch sang props
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      // console.log("param in onAddTask", task);
      dispatch(actions.addTask(task));
    },

    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
