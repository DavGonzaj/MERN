import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductForm from "./components/Form";
import ProductsList from "./components/ProductList";
import ViewProduct from "./views/View";
import UpdateProduct from "./views/Update";
function App() {
  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <ProductForm />
          <hr />
          <h1>All Products</h1>
          <ProductsList />
        </div>
      </Route>

      <Route path="/products/:id">
        <ViewProduct />
      </Route>
      <Route path="/:id/edit">
        <UpdateProduct />
      </Route>
    </Router>
  );
}

export default App;
