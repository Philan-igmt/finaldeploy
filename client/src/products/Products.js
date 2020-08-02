import React, { Component } from "react";
import { ProductContext } from "../ProductContext";
import { FaOpencart } from "react-icons/fa";
import "./Products.css";
import { Link } from "react-router-dom";

export class Products extends Component {
  static contextType = ProductContext;

  render() {
    const { products } = this.context;
    return (
      <div className="center">
        <div className="products">
          <div className="aboutdiv">
            <h1 className="thisabout center">Products</h1>
          </div>
          <div className="allproducts">
            {products.map((product) => (
              <div
                key={product._id}
                className="card center"
                style={{ width: "300px" }}
              >
                <div className="card-image">
                  <img
                    src={product.image}
                    style={{ width: "100%", height: "200px" }}
                  />
                  <span className="card-title">{product.name}</span>
                </div>
                <div className="card-content">
                  <p>R{product.price}</p>
                </div>
                <div>
                  <button
                    onClick={() => this.context.addCart(product._id)}
                    className="btn"
                  >
                    add to cart <FaOpencart size="2rem" color="white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link to="/cart" className="center m">
          <button className="btn green">
            go to cart <FaOpencart size="2rem" color="white" />
          </button>
        </Link>
      </div>
    );
  }
}

export default Products;
