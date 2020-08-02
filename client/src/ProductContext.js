import React, { Component } from "react";
// import uuid from "react-uuid";
import axios from "axios";

export const ProductContext = React.createContext();

export class ProductProvider extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      total: 0,
      register: false,
    };
  }

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("item already selected");
    }
  };

  add = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.addTotal();
  };

  minus = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.addTotal();
  };

  removeItem = (id) => {
    const { cart } = this.state;
    cart.forEach((item, index) => {
      if (item._id === id) {
        cart.splice(index, 1);
      }
    });
    this.setState({ cart: cart });
    this.addTotal();
  };

  addTotal = () => {
    const { cart } = this.state;
    const results = cart.reduce((prev, product) => {
      return prev + product.price * product.count;
    }, 0);
    this.setState({ total: results });
  };

  //for the local storage
  componentDidUpdate() {
    localStorage.setItem("cart_data", JSON.stringify(this.state.cart));
    localStorage.setItem("total_data", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const cart_data = JSON.parse(localStorage.getItem("cart_data"));
    if (cart_data !== null) {
      this.setState({ cart: cart_data });
    }
    const total_data = JSON.parse(localStorage.getItem("total_data"));
    if (total_data !== null) {
      this.setState({ total: total_data });
    }

    //getting the products from the database
    const me = async () => {
      fetch("/products")
        .then((res) => res.json())
        .then(
          (allProducts) =>
            this.setState(
              { products: allProducts },
              console.log(`products fetched`, allProducts)
            )
          // console.log(allProducts)
        );
    };
    me();
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, minus, add, removeItem, addTotal } = this;
    return (
      <ProductContext.Provider
        value={{
          products,
          cart,
          total,
          addCart,
          removeItem,
          minus,
          add,
          addTotal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
