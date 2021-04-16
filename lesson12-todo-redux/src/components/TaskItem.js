import React from "react";

function TaskItem(props) {
  // console.log(props);
  const { task, index } = props;
  // console.log(task);

  const onUpdateStatus = () => {
    // console.log(task.id);
    props.onUpdateStatus(task.id);
  };

  const onDelete = () => {
    props.onDelete(task.id);
  };

  const onUpdate = () => {
    props.onUpdate(task.id);
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.name}</td>
      <td className="text-center">
        <span
          className={task.status ? "label label-success" : "label label-danger"}
          onClick={onUpdateStatus}
        >
          {task.status ? "Kích hoạt" : "Ẩn"}
        </span>
      </td>
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

export default TaskItem;
