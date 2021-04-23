import "./App.css";
import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
// import Demo from "./trainning/demo";
import { connect } from "react-redux";
import * as actions from "./actions/index";

function App(props) {
  const [taskEditing, setTaskEditing] = useState(null);
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState(-1);
  const [keyword, setKeyword] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortValue, setSortValue] = useState(1);

  const { isDisplayForm } = props;

  const onShowForm = () => {
    // setIsDisplayForm(true);
  };

  const elmTaskForm = isDisplayForm ? <TaskForm task={taskEditing} /> : "";

  // add tasks
  const onToggleForm = () => {
    // if (isDisplayForm && taskEditing !== null) {
    //   setTaskEditing(null);
    //   // setIsDisplayForm(true);
    // } else {
    //   // setIsDisplayForm(!isDisplayForm);
    //   setTaskEditing(null);
    // }
    props.onToggleForm();
  };

  // tim vi tri item muon update
  // const findIndex = (id) => {
  //   let result = -1;
  //   tasks.forEach((task, index) => {
  //     if (task.id === id) {
  //       result = index;
  //     }
  //   });
  //   return result;
  // };

  // sua
  // const onUpdate = (id) => {
  //   let index = findIndex(id);
  //   const taskEditing = tasks[index];
  //   console.log(taskEditing);
  //   setTaskEditing(taskEditing);
  //   onShowForm();
  // };

  // loc data
  const onFilter = (filterName, filterStatus) => {
    console.log(filterName, "-", filterStatus);
    // ep kieu sang number
    setFilterName(filterName);
    setFilterStatus(filterStatus);
  };

  // tasks = tasks.filter((task) => {
  //   return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  // });

  // tasks = _.filter(tasks, (task) => {
  //   return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  // });

  // loc data theo name
  // if (filter) {
  //   if (filter.name) {
  //     tasks = tasks.filter((task) => {
  //       return task.name.toLowerCase().indexOf(filter.name) !== -1;
  //     });
  //   }

  // if (filterName) {
  //   tasks = tasks.filter((task) => {
  //     return task.name.toLowerCase().indexOf(filterName) !== -1;
  //   });

  //   // loc data theo status
  //   tasks = tasks.filter((task) => {
  //     if (filterStatus === -1) {
  //       return task;
  //     } else {
  //       return task.status === (filterStatus === 1 ? true : false);
  //     }
  //   });
  // }

  // if (filterStatus) {
  //   tasks = tasks.filter((task) => {
  //     if (filterStatus === "-1" || filterStatus === -1) {
  //       return task;
  //     } else {
  //       return (
  //         task.status === (parseInt(filterStatus, 10) === 1 ? true : false)
  //       );
  //     }
  //   });
  // }

  // if (filterName) {
  //   tasks = tasks.filter((task) => {
  //     return task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
  //   });
  // }

  // search form
  const onSearch = (keyword) => {
    setKeyword(keyword);
  };

  // sort
  const onSort = (sortBy, sortValue) => {
    console.log(sortBy, "-", sortValue);
    setSortBy(sortBy);
    setSortValue(sortValue);
    // console.log(sortBy);
    // console.log(sortValue);
  };

  // if (sortBy === "name") {
  //   tasks.sort((a, b) => {
  //     if (a.name > b.name) {
  //       return sortValue;
  //     } else if (a.name < b.name) {
  //       return -sortValue;
  //     } else return 0;
  //   });
  // } else {
  //   tasks.sort((a, b) => {
  //     if (a.status > b.status) {
  //       return -sortValue;
  //     } else if (a.status < b.status) {
  //       return sortValue;
  //     } else return 0;
  //   });
  // }

  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        <div
          className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}
        >
          {elmTaskForm}
        </div>
        <div
          className={
            isDisplayForm
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
          }
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={onToggleForm}
          >
            Thêm Công Việc
          </button>
          {/* <button
            type="button"
            className="btn btn-danger ml-5"
            onClick={onGenerateData}
          >
            Generate data
          </button> */}
          {/* Search - Sort */}
          <Control
            onSearch={onSearch}
            onSort={onSort}
            sortBy={sortBy}
            sortValue={sortValue}
          />

          {/* List */}
          <TaskList
            // taskProps={tasks}
            // onUpdate={onUpdate}
            onFilter={onFilter}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm_key,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
