import React from "react";

function Menu() {
  return (
    <div className="navbar navbar-default">
      <a className="navbar-brand" href="#">
        Call API
      </a>
      <ul className="nav navbar-nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Product Manage</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
