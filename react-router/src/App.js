import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import routes from "./routes";

function App() {
  const showContentMenu = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((val, index) => {
        return (
          <Route
            key={index}
            path={val.path}
            exact={val.exact}
            component={val.main}
          />
        );
      });
    }
    return result;
  };
  return (
    <Router>
      <div className="App">
        {/* Menu de chuyen huong */}
        <Menu />
        {/* Content, render theme ycomponent khi click */}
        <Switch>{showContentMenu(routes)}</Switch>
      </div>
    </Router>
  );
}

export default App;
