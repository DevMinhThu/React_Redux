import "./App.css";
import Product from "../src/components/Product";
import React, { Component } from "react";

class App extends Component {
  onAddProduct = () => {
    console.log(this.refs.name.value);
  };

  render() {
    const products = [
      {
        id: 1,
        name: "Iphone 6",
        price: "5.000.000",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.bZkciYa3iMTxFeaLgfKqRwHaHa&pid=Api&P=0&w=300&h=300",
        status: true,
      },
      {
        id: 2,
        name: "Iphone 7",
        price: "10.000.000",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.1I7ydy0kmr415yCAjMDRuAHaHa&pid=Api&P=0&w=300&h=300",

        status: true,
      },
      {
        id: 3,
        name: "Iphone X",
        price: "15.000.000",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.oMtrXGAc7udvVgWTVYdolwHaHa&pid=Api&P=0&w=300&h=300",
        status: true,
      },
    ];

    let elements = products.map((product_value, index) => {
      let result = "";

      // nếu đúng trả về product, nếu sai return result
      if (product_value.status) {
        result = (
          <Product
            key={product_value.id}
            price={product_value.price}
            image={product_value.image}
          >
            {/* nhận nội dung bên trong thẻ: this.props.children */}
            {product_value.name}
          </Product>
        );
      }
      return result;
    });
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">Props</a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="row">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">Thêm sản phẩm</h3>
                </div>
                <div className="panel-body">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <label>Tên Sản Phẩm</label>
                      <input type="text" className="form-control" ref="name" />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={this.onAddProduct}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {elements}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-warning">
                  Click me !
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
