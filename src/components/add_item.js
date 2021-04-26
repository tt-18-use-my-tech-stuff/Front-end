import React, { useState } from "react";
import axios from "axios";

// Component for owner to add an item
const AddItem = () => {
  //New item state
  const [item, setItem] = useState({
    name: "",
    description: "",
  });

  //Change handler
  const inputChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };
  //Submit handler
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("New item added");
  };

  //Errors
  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });

  //Validation
  const validateItem = () => {};

  //logic for displaying added items on screen
  let itemValue = () => {
    if (item.name !== "" && item.description !== "") {
      return (
        <div>
          <p>{JSON.stringify(item.name)}</p>
          <p>{JSON.stringify(item.description)}</p>
        </div>
      );
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Item Name:
        <input name="name" value={item.name} onChange={inputChange} />
      </label>

      <label>
        Description:
        <input
          name="description"
          value={item.description}
          onChange={inputChange}
        />
      </label>

      <button disabled={!item.name || !item.description}>Add Item</button>
      {itemValue()}
    </form>
  );
};

export default AddItem;
