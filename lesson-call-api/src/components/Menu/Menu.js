import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="navbar navbar-default">
      <Link className="navbar-brand" to="/">
        Call API
      </Link>
      <ul className="nav navbar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product-list">Product Manage</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
