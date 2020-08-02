import React, { useContext } from "react";
import "./Backend.css";
import { ProductContext } from "../ProductContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import Upadate from "./Upadate";
import Delete from "./Delete";

const Backend = () => {
  const state = useContext(ProductContext);
  const list = state.products.map((item) => (
    <div key={item._id}>
      <li className="grey">name:{item.name}</li>
      <li className="blue">price:R{item.price}</li>
      <li className="red">Image URL:{item.image}</li>
      <li className="green">book id:{item._id}</li>
    </div>
  ));

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const book = {
      name: data.name,
      price: data.price,
      image: data.imageURL,
    };
    console.log(book);
    axios.post("/products", book).then((res) => console.log(res.data));
  };

  return (
    <div className="backend">
      <h2>Hello admin</h2>
      <div className="allbackend center">
        <div className="list">
          <h5>The raw list of all products</h5>
          <ul>{list}</ul>
        </div>
        <div className="addproduct">
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <legend>add a book</legend>
              <label htmlFor="price">price</label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="e.g 500"
                ref={register}
              />
              <label htmlFor="name">name</label>
              <input type="text" name="name" id="name" ref={register} />
              <label htmlFor="imageURL">imageURL</label>
              <input
                type="text"
                name="imageURL"
                id="imageURL"
                placeholder='this take the URL without "inverted commas" e.g https://imageUrl '
                ref={register}
              />
              <button className="btn green">Add</button>
            </fieldset>
          </form>
        </div>
        <Upadate />
        <Delete />
      </div>
    </div>
  );
};

export default Backend;
