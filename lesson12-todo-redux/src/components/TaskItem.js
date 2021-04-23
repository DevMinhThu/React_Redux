import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

function TaskItem(props) {
  // console.log(props);
  const { task, index } = props;
  // console.log(task);

  const showStatusElement = () => {
    return (
      <span
        className={task.status ? "label label-success" : "label label-danger"}
        onClick={onUpdateStatus}
      >
        {task.status ? "Kích hoạt" : "Ẩn"}
      </span>
    );
  };

  const onUpdateStatus = () => {
    // console.log(task.id);
    props.onUpdateStatus(task.id);
  };

  const onDelete = () => {
    props.onDelete(task.id); // tương tự như: dispatch(actions.deleteTask)
    props.onCloseForm();
  };

  const onUpdate = () => {
    props.onUpdate(task.id);
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.name}</td>
      <td className="text-center">{showStatusElement()}</td>
      <td className="text-center">
        <button type="submit" className="btn btn-warning" onClick={onUpdate}>
          <span className="fa fa-pencil mr-5"></span>Sửa
        </button>
        &nbsp;
        <button type="submit" className="btn btn-danger" onClick={onDelete}>
          <span className="fa fa-trash mr-5"></span>Xóa
        </button>
      </td>
    </tr>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id));
    },

    onDelete: (id) => {
      dispatch(actions.deleteTask(id));
    },

    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
