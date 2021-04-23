import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";

function TaskList(props) {
  const [inputValues, setInputValues] = useState({
    filterName: "",
    filterStatus: -1,
  });

  const onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    props.onFilter(
      name === "filterName" ? value : inputValues.filterName,
      name === "filterStatus" ? value : inputValues.filterStatus
    );

    setInputValues({ ...inputValues, [name]: value });
  };

  const { tasks } = props;

  // render elm task
  let elmTasks = tasks.map((task_value, index) => {
    // console.log(task_value);
    return (
      <TaskItem
        key={task_value.id}
        index={index}
        task={task_value}
        onUpdate={props.onUpdate}
      />
    );
  });

  return (
    <table className="table table-bordered table-hover mt-15">
      <thead>
        <tr>
          <th className="text-center">STT</th>
          <th className="text-center">Tên</th>
          <th className="text-center">Trạng Thái</th>
          <th className="text-center">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
            <input
              type="text"
              className="form-control"
              name="filterName"
              value={inputValues.filterName}
              onChange={onChange}
            />
          </td>
          <td>
            <select
              className="form-control"
              name="filterStatus"
              value={inputValues.filterStatus}
              onChange={onChange}
            >
              <option value={-1}>Tất Cả</option>
              <option value={0}>Ẩn</option>
              <option value={1}>Kích Hoạt</option>
            </select>
          </td>
          <td></td>
        </tr>
        {/* get data here */}
        {elmTasks}
      </tbody>
    </table>
  );
}

// truyen state cua store ==> props
// param state chinh la cua store
const mapStateToProps = (state) => {
  // console.log(state);
  // tasks laf props duoc chuyen tu state tasks
  return {
    tasks: state.tasks_key,
  };
};

// ket noi voi store de lay data
export default connect(mapStateToProps, null)(TaskList);
