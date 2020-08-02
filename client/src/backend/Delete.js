import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Delete() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const book = {
      name: data.name,
      price: data.price,
      image: data.imageURL,
    };
    console.log(data);
    axios
      .delete(`/products/${data.id}`, book)
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Delete a book</legend>
          <label htmlFor="id">BOOK ID</label>
          <input
            type="text"
            name="id"
            id="id"
            ref={register}
            placeholder="copy and paste the Book Id an paste it here"
          />
          <button type="submit" className="btn red">
            DELETE
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Delete;
