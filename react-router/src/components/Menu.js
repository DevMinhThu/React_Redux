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

// custom tag Link
/* 
  custom MenuLink giong the Link
  param la 1 object co 3 params
  - label: la noi dung the do
  - to: duong dan URL giong href
  - activeOnlyWhenExact: giong exact, gia tri la boolean
  Khi vao dung URL no se them active vao the li chu khong cho vao the Link
*/
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
