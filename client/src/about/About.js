import React from "react";
import "./About.css";
import Footer from "../footer/Footer";

function About() {
  return (
    <div className="allabout">
      <div className="aboutdiv">
        <h1 className="thisabout">About</h1>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.530232998841!2d18.62472141521106!3d-33.90175048064709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc50865bf1c175%3A0xba32c83da1a161ac!2s49%20Durban%20Rd%2C%20Unclear%2C%20Cape%20Town%2C%207530!5e0!3m2!1sen!2sza!4v1595932052984!5m2!1sen!2sza"
        width="100%"
        height="350px"
      ></iframe>
      <h4>Our Mission</h4>
      <div className="container">
        <p>
          Our mission is to provide quality but affordable books for education,
          entertainment, self-development and self-fulfillment; to all when the
          need arises by providing a wide range of books to satisfy our
          students,Making our books accessible in the market.
        </p>
        <h4>Our Vision</h4>
        <p>
          Our vision is to become the largest and leading book distributor in
          South Africa and around the world when time goes by. And providing
          consultancy services to local and underground publishers who want to
          expand their services to other booksellers.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
