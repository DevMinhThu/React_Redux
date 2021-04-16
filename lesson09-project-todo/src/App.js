import "./App.css";
import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import _ from "lodash";

function App(props) {
  let [tasks, setTasks] = useState([]);
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const [taskEditing, setTaskEditing] = useState(null);
  const [filter, setFilter] = useState({ name: "", status: -1 });
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState(-1);
  const [keyword, setKeyword] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortValue, setSortValue] = useState(1);

  // dung thay cho componentWillMount de luu data vao state
  // khi component render thi useEffect duoc goi toi, chi chay dung 1 lan
  useEffect(() => {
    if (localStorage && localStorage.getItem("tasks")) {
      const task = JSON.parse(localStorage.getItem("tasks"));
      setTasks(task);
    }
  }, []);

  // const onGenerateData = () => {
  //   const taskList = [
  //     {
  //       id: generateId(),
  //       name: "ReactJS",
  //       status: true,
  //     },
  //     {
  //       id: generateId(),
  //       name: "Node JS",
  //       status: false,
  //     },
  //     {
  //       id: generateId(),
  //       name: "Vue JS",
  //       status: true,
  //     },
  //   ];
  //   // console.log(tasks);
  //   // se tu hieu la gan data tk taskList vao state tasks
  //   setTasks(taskList);

  //   // luu data tren trinh duyet va chuyen sang dang chuoi (string)
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // };

  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  const generateId = () => {
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4()
    );
  };

  // handle close form
  const onCloseForm = () => {
    setIsDisplayForm(false);
  };

  const onShowForm = () => {
    setIsDisplayForm(true);
  };

  // handle onSubmit
  const onSubmit = (data) => {
    console.log(data);

    if (data.id === "") {
      data.id = generateId();
      tasks.push(data);
    } else {
      //editing
      let index = findIndex(data.id);
      tasks[index] = data;
    }

    setTasks(tasks);
    setTaskEditing(null);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // console.log(data);
  };

  const elmTaskForm = isDisplayForm ? (
    <TaskForm
      onSubmit={onSubmit}
      onCloseForm={onCloseForm}
      task={taskEditing}
    />
  ) : (
    ""
  );

  // add tasks
  const onToggleForm = () => {
    if (isDisplayForm && taskEditing !== null) {
      setTaskEditing(null);
      setIsDisplayForm(true);
    } else {
      setIsDisplayForm(!isDisplayForm);
      setTaskEditing(null);
    }
  };

  // tim vi tri item muon update
  const findIndex = (id) => {
    let result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };

  const onUpdateStatus = (id) => {
    // console.log(id);
    // let index = findIndex(id);
    let index = _.findIndex(tasks, (task) => {
      return task.id === id;
    });
    console.log(index);
    tasks[index].status = !tasks[index].status;
    setTasks(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // if (index !== -1) {
    //   tasks[index].status = !tasks[index].status;
    //   setTasks(tasks);
    //   localStorage.setItem("tasks", JSON.stringify(tasks));
    // }
  };

  const onDelete = (id) => {
    let index = findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      setTasks(tasks);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    onCloseForm();
  };

  // sua
  const onUpdate = (id) => {
    let index = findIndex(id);
    const taskEditing = tasks[index];
    console.log(taskEditing);
    setTaskEditing(taskEditing);
    onShowForm();
  };

  // loc data
  const onFilter = (filterName, filterStatus) => {
    console.log(filterName, "-", filterStatus);
    // ep kieu sang number
    setFilterName(filterName);
    setFilterStatus(filterStatus);
  };

  tasks = tasks.filter((task) => {
    return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  });

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
  if (filterName) {
    tasks = tasks.filter((task) => {
      return task.name.toLowerCase().indexOf(filterName) !== -1;
    });

    // loc data theo status
    tasks = tasks.filter((task) => {
      if (filter.status === -1) {
        return task;
      } else {
        return task.status === (filter.status === 1 ? true : false);
      }
    });
  }

  if (filterStatus) {
    tasks = tasks.filter((task) => {
      if (filterStatus === "-1" || filterStatus === -1) {
        return task;
      } else {
        return (
          task.status === (parseInt(filterStatus, 10) === 1 ? true : false)
        );
      }
    });
  }

  if (filterName) {
    tasks = tasks.filter((task) => {
      return task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
    });
  }

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

  if (sortBy === "name") {
    tasks.sort((a, b) => {
      if (a.name > b.name) return sortValue;
      else if (a.name < b.name) return -sortValue;
      else return 0;
    });
  } else {
    tasks.sort((a, b) => {
      if (a.status > b.status) return -sortValue;
      else if (a.status < b.status) return sortValue;
      else return 0;
    });
  }

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
            taskProps={tasks}
            onUpdateStatus={onUpdateStatus}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onFilter={onFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
