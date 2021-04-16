import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url:
        "https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json",
      data: null,
    })
      .then((res) => {
        // console.log(res);
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const articles = data.articles;
  console.log(articles);

  return (
    <div className="container">
      <h1>call api</h1>
      <h2>{data.title}</h2>
      <h2>{data.description}</h2>
    </div>
  );
}

export default App;
