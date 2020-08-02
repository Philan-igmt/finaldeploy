import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
// import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./nav/Nav";
import Home from "./home/Home";
import Cart from "./Cart/Cart";
import Products from "./products/Products";
import About from "./about/About";
import { ProductProvider } from "./ProductContext";
import ThankYou from "./success/ThankYou";
import Register from "./register/Register";
import Backend from "./backend/Backend";

const App = () => {
  useEffect(() => {
    //initializing materialize css
    M.AutoInit();
  });

  return (
    <Router>
      <ProductProvider>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/admin" component={Backend} />
            {/* <Route path="/backend" component={Backend} /> */}
          </Switch>
        </div>
      </ProductProvider>
    </Router>
  );
};

export default App;
