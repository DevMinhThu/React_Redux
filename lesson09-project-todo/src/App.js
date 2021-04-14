import "./App.css";
import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // dung thay cho componentWillMount de luu data vao state
  // khi component render thi useEffect duoc goi toi
  useEffect(() => {
    if (localStorage && localStorage.getItem("tasks")) {
      const task = JSON.parse(localStorage.getItem("tasks"));
      setTasks(task);
    }
  }, []);

  const onGenerateData = () => {
    const taskList = [
      {
        id: generateId(),
        name: "ReactJS",
        status: true,
      },
      {
        id: generateId(),
        name: "Node JS",
        status: false,
      },
      {
        id: generateId(),
        name: "Vue JS",
        status: true,
      },
    ];
    // console.log(tasks);
    // se tu hieu la gan data tk taskList vao state tasks
    setTasks(taskList);

    // luu data tren trinh duyet va chuyen sang dang chuoi (string)
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

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

  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        <div className={"col-xs-4 col-sm-4 col-md-4 col-lg-4"}>
          <TaskForm />
        </div>
        <div className={"col-xs-8 col-sm-8 col-md-8 col-lg-8"}>
          <button type="button" className="btn btn-primary">
            Thêm Công Việc
          </button>
          <button
            type="button"
            className="btn btn-danger ml-5"
            onClick={onGenerateData}
          >
            Generate data
          </button>
          {/* Search - Sort */}
          <Control />

          {/* List */}
          <TaskList taskProps={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
