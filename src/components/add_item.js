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

//Component for owner to add an item
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
    alert("New Item Added 🤠");
    setItem({
      name: "",
      description: "",
    });
    // axios
    // .post('url', item)
    // .then(res => {
    //     console.log(res);
    // })
    // .catch(err => console.log(err))
    // TODO(Kaseem): add axios for POST
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
      .then(() => {
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
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      );
    }
  };

  return (
<<<<<<< HEAD
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

              <button disabled={!item.name || !item.description}>
                Add Item
              </button>
              {itemValue()}
              <p>{errors.name}</p>
              <p>{errors.description}</p>
            </form>
            <label>
              Description:
              <Input
                name="description"
                value={item.description}
                onChange={inputChange}
              />
            </label>
            <div>
              <Button type="submit" disabled={!item.name || !item.description}>
                Add Item
              </Button>
            </div>
            {itemValue()}
          </FormContainer>
        </Col>
      </Row>
    </Container>
=======
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
>>>>>>> e8ffbfbf3cbf0dec9126045568c56e89f8be1acc
  );
};

export default AddItem;
