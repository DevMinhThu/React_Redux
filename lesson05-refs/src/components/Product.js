import React, { Component } from "react";

class Product extends Component {
  onAddToCard = () => {
    alert("test function no params");
    console.log("test function no params");
  };

  onAddToCard2(text) {
    alert(text);
  }

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
                <a className="btn btn-primary" onClick={this.onAddToCard}>
                  Buy now
                </a>
                {/* truyền có tham số khi gọi hàm sử dụng arrow function */}
                <a
                  className="btn btn-success"
                  onClick={() => {
                    this.onAddToCard2(this.props.children);
                  }}
                >
                  Buy now 2
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
