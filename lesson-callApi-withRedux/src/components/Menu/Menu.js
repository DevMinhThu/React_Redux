import React from "react";
import { Link, Route } from "react-router-dom";

const menu = [
  {
    name: "Home",
    to: "/",
    exact: true,
  },
  {
    name: "Product Manage",
    to: "/product-list",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active abc" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};

const showMenu = () => {
  let result = null;
  if (menu.length > 0) {
    result = menu.map((val, index) => {
      return (
        <MenuLink
          key={index}
          label={val.name}
          to={val.to}
          activeOnlyWhenExact={val.exact}
        />
      );
    });
  }
  return result;
};

function Menu() {
  return (
    <div className="navbar navbar-default">
      <a className="navbar-brand">Call API</a>
      <ul className="nav navbar-nav">{showMenu()}</ul>
    </div>
  );
}

export default Menu;
