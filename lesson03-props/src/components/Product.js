import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img alt={this.props.children} src={this.props.image} />
            <div className="caption">
              <h3>{this.props.children}</h3>
              <p>{this.props.price} Vnđ</p>
              <p>
                <a className="btn btn-primary">Mua ngay</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
