import React, { Component } from "react";
import { ProductContext } from "../ProductContext";
import axios from "axios";

export class Form extends Component {
  static contextType = ProductContext;

  constructor(props) {
    super();
    this.state = {
      name: "",
      surname: "",
      address: "",
      town: "",
      province: "",
      postal: "",
      phone: "",
      email: "",
    };
  }

  handle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (event) => {
    event.preventDefault();
    const { cart } = this.context;

    //this is for the database
    const info = {
      firstname: this.state.name,
      lastname: this.state.surname,
      streetaddress: this.state.address,
      town: this.state.town,
      province: this.state.province,
      postalcode: this.state.postal,
      phone: this.state.phone,
      email: this.state.email,
      cart: cart,
    };

    console.log(info);

    axios.post("/checkout", info).then((res) => console.log(res.data));

    this.setState({
      name: "",
      surname: "",
      address: "",
      town: "",
      province: "",
      postal: "",
      phone: "",
      email: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <fieldset>
            <legend>Delivery information</legend>
            <label htmlFor="name">first name</label>
            <input
              type="text"
              name="name"
              id="info"
              value={this.state.name}
              onChange={this.handle}
              required
              placeholder="Philani"
            />
            <label htmlFor="surname">last name</label>
            <input
              type="text"
              name="surname"
              id="surname"
              value={this.state.surname}
              onChange={this.handle}
              required
              placeholder="sithembiso"
            />
            <label htmlFor="lastname">address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={this.state.address}
              onChange={this.handle}
              required
              placeholder="314 Imam Haron Rd, Lansdowne,"
            />
            <label htmlFor="lastname">town</label>
            <input
              type="text"
              name="town"
              id="town"
              value={this.state.town}
              onChange={this.handle}
              required
              placeholder="Cape town"
            />
            <label htmlFor="lastname">province</label>
            <input
              type="text"
              name="province"
              id="province"
              value={this.state.province}
              onChange={this.handle}
              required
              placeholder="Western Cape"
            />

            <label htmlFor="lastname">zipcode</label>
            <input
              type="number"
              name="postal"
              id="postal"
              value={this.state.postal}
              onChange={this.handle}
              required
              placeholder="7500"
            />
            <label htmlFor="lastname">phonenumber</label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={this.state.phone}
              onChange={this.handle}
              required
              placeholder="0125465734"
            />
            <label htmlFor="lastname">email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handle}
              required
              placeholder="philanisithembiso@gmail.com"
            />

            <br />
            <button className="btn green" type="submit">
              submit
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
