import React from "react";
import { Route, Link } from "react-router-dom";

const menu = [
  {
    to: "/",
    name: "Home",
    exact: true,
  },
  {
    to: "/about",
    name: "About",
    exact: false,
  },
  {
    to: "/contact",
    name: "Contact",
    exact: false,
  },
];

// custom menu
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active abc" : "";
        return (
          <li className={`my-li ${active}`}>
            <Link className="my-link" to={to}>
              {label}
            </Link>
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
    <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">{showMenu()}</ul>
    </nav>
  );
}

export default Menu;
