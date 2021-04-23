import React from "react";

function ProductList(props) {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">Product List</h3>
      </div>
      <div className="panel-body">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>CODE</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>

          {/* show product */}
          <tbody>{props.children}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
