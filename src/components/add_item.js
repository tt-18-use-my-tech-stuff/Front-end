import React, { useState } from "react";
import axios from "axios";
import schema from "../validation/itemSchema";
import * as yup from "yup";
import styled from "styled-components";
import { Container, Row, Col, Button } from "reactstrap";

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

// Component for owner to add an item
const AddItem = () => {
  //New item state
  const [item, setItem] = useState({
    name: "",
    description: "",
  });

  //Change handler
  const inputChange = (event) => {
    validateItem(event);
    setItem({ ...item, [event.target.name]: event.target.value });
  };
  //Submit handler
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("New item added");
  };

  //Errors state
  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });

  //Validation
  const validateItem = (event) => {
    yup
      .reach(schema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrors({
          ...errors,
          [event.target.name]: err.errors[0],
        });
      });
  };

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
    <Container>
      <Row>
        <Col xs="12" md={{ size: 6, offset: 3 }}>
          <FormContainer>
            <h3>Add an Item</h3>
            <form onSubmit={onSubmit}>
              <label>
                Item Name:
                <Input name="name" value={item.name} onChange={inputChange} />
              </label>

              <label>
                Description:
                <Input
                  name="description"
                  value={item.description}
                  onChange={inputChange}
                />
              </label>
              <div>
                <Button
                  type="submit"
                  disabled={!item.name || !item.description}
                >
                  Add Item
                </Button>
              </div>
              {itemValue()}
            </form>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default AddItem;
