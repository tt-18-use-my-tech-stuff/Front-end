import React, { useState } from "react";
import axios from "axios";
import schema from "../validation/itemSchema";
import * as yup from "yup";
import styled from "styled-components";
import { Container, Row, Col, Button } from "reactstrap";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import { useHistory } from "react-router";

const FormContainer = styled.div`
  margin-top: 150px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const initialValue = {
  item_name: "",
  item_description: "",
  price: 0,
  category: "",
};

//Component for owner to add an item
const AddItem = () => {
  //New item state
  const [item, setItem] = useState(initialValue);
  const history = useHistory();

  //Change handler
  const inputChange = (event) => {
    const { name, value } = event.target;
    const isPrice = name === "price";
    setItem({
      ...item,
      [name]: isPrice ? (isNaN(Number(value)) ? 0 : Number(value)) : value,
    });
    validateItem(name, item[name]);
  };

  //Submit handler
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("New item added");
    console.log(item);

    axiosWithAuth()
      .post("/items", item)
      .then((res) => {
        alert("New Item Added 🤠");
        history.push("/items");
      })
      .catch((err) => {
        console.log(err);
      });
    setItem(initialValue);
  };

  //Errors state
  const [errors, setErrors] = useState({
    item_name: "",
    item_description: "",
    price: 0,
    category: "",
  });

  //Validation
  const validateItem = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  };

  //logic for displaying added items on screen
  // let itemValue = () => {
  //   if (item.name !== "" && item.description !== "") {
  //     return (
  //       <div>
  //         <p>{item.name}</p>
  //         <p>{item.description}</p>
  //       </div>
  //     );
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col xs="12" md={{ size: 6, offset: 3 }}>
          <FormContainer>
            <h3>Add an Item</h3>
            <form onSubmit={onSubmit}>
              <label>
                Item Name:
                <Input
                  name="item_name"
                  value={item.item_name}
                  onChange={inputChange}
                />
              </label>
              <label>
                Description:
                <Input
                  name="item_description"
                  type="text"
                  value={item.item_description}
                  onChange={inputChange}
                />
              </label>
              <label>
                Price:
                <Input
                  name="price"
                  type="number"
                  valueAsNumber={item.price}
                  onChange={inputChange}
                />
              </label>
              <label>
                Category:
                <Input
                  name="category"
                  type="text"
                  value={item.category}
                  onChange={inputChange}
                />
              </label>
              <div>
                <Button
                  type="submit"
                  disabled={!item.item_name || !item.item_description}
                >
                  Add Item
                </Button>
              </div>
            </form>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default AddItem;
