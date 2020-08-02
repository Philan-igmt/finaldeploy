import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Regiser.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Register() {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const user = {
      username: data.username,
      password: data.password,
    };
    console.log(user);
    axios.post("/register/", user).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      window.location = "/backend";
      return response.data;
    });
  };
  return (
    <div className="allform">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>login as the admin</legend>
            <div>
              <input
                id="username"
                name="username"
                type="text"
                className="validate"
                required
                ref={register}
              />
              <label htmlFor="email">email address</label>
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                className="validate"
                required
                ref={register}
              />
              <label htmlFor="password">password</label>
            </div>
            <button className="btn green" type="submit">
              login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Register;
