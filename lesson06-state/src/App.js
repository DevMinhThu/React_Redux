import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
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
      ],

      isActive: false,
    };
  }

  // handle setState
  onSetState = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    let elements = this.state.products.map((product_value, index) => {
      let result = "";
      // nếu đúng trả về product, nếu sai return result
      if (product_value.status && this.state.isActive) {
        result = (
          <tr key={product_value.index}>
            <td>{index}</td>
            <td>{product_value.name}</td>
            <td>
              <span className="label label-success">
                {product_value.price} VNĐ
              </span>
            </td>
          </tr>
        );
      }
      return result;
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">State</a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="row">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                <tbody>{elements}</tbody>
              </table>
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.onSetState}
              >
                Active :{this.state.isActive === true ? "true" : "false"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
