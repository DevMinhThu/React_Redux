import "./App.css";
import Header from "../src/components/Header";
import Product from "../src/components/Product";
function App() {
  return (
    <div>
      <Header />
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Product />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default App;
