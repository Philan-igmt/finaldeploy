import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="wholefooter">
      <div className="footer center">
        <h5>
          Made with <i className="material-icons red-text">favorite</i> by
          Philan ISithembiso Ndhlela &copy;2020
        </h5>
        <div className="flogo">
          <h3>Supported by</h3>
          <a href="https://www.lifechoices.co.za/">
            <img
              className="lcLogo"
              src="https://blogs.sun.ac.za/tyggi/files/2010/08/Logo-Life-Choices.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
