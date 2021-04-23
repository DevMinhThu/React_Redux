import "./App.css";
import React from "react";
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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

    return <Switch>{result}</Switch>;
  };
  return (
    <BrowserRouter>
      {/* Menu */}
      <Menu />

      <div className="container">
        <div className="row">{showContentMenu(routes)}</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
