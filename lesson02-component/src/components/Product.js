import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thumbnail">
            <img
              alt="iphone 6"
              src="https://tse2.mm.bing.net/th?id=OIP.c5eWsa26vDe-RWOCRCPvuwHaD4&pid=Api&P=0&w=357&h=188"
            />
            <div className="caption">
              <h3>IPhone 6</h3>
              <p>1000$</p>
            </div>
          </div>
          <button type="button" class="btn btn-success">
            Mua hàng
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
