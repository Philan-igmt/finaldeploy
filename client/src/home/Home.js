import React from "react";
import "./Home.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="this">
        <span className="thiss">Invest in </span>
        <span className="red-text">Knowledge</span>
      </h1>
      <button
        style={{ zIndex: "0" }}
        className="waves-effect waves-black btn-large red"
      >
        <Link className="shopnow" to="/products">
          Shop now
        </Link>
      </button>
    </div>
  );
}

export default Home;
