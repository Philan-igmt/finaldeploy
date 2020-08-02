import React, { useState, useEffect, useContext } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Nav.css";
import { FaOpencart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FaShopify } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext";

const Nav = () => {
  const state = useContext(ProductContext);

  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });

  const [log, setLog] = useState(false);
  return (
    <nav>
      <div className="nav-wrapper container black">
        <Link to="/" className="brand-logo ">
          <span>Books</span>
          <span className="library">Library</span>
        </Link>
        <a
          to="#"
          className="sidenav-trigger show-on-med-and-down"
          data-target="slide-out"
        >
          <i className="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down ">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Shop</Link>
          </li>

          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link
              className="tooltipped"
              data-position="bottom"
              data-tooltip="cart"
              to="/cart"
            >
              cart
              <FaOpencart size="2rem" color="white" />
              <sup
                style={{ padding: "5px", borderRadius: "50%" }}
                className="new red badge"
              >
                {state.cart.length}
              </sup>
            </Link>
          </li>
        </ul>
      </div>

      {/* side nav */}
      <ul id="slide-out" className="sidenav">
        <li>
          <Link to="/">
            <FaHome size="2rem" color="black" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfo size="2rem" color="black" />
            About
          </Link>
        </li>
        <li>
          <Link to="/products">Shop</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>

        <li>
          <Link
            className="tooltipped"
            data-position="bottom"
            data-tooltip="cart"
            to="/cart"
          >
            <FaOpencart size="2rem" color="black" />
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
