import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import { axiosWithAuth } from "../component/helpers/axiosWithAuth";
import styled from "styled-components";

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

// const initialErrors = {
//   item_name: "",
//   item_description: ""
// }

const ItemEdit = () => {
  const [item, setItem] = useState(initialValue);
  // Will add errors later on
  // const [ errors, setErrors ] = useState(initialValue);
  // const [ disabled, setDisable ] = useState(true);
  const { item_id } = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log(useParams);
    console.log(item_id);
    axiosWithAuth()
      .get(`/items/${item_id}`)
      .then((res) => {
        console.log("item edit response", res.data);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [item_id]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newItem = {
      item_name: item.item_name.trim(),
      item_description: item.item_description.trim(),
      price: Number(item.price),
      category: item.category.trim(),
    };
    axiosWithAuth()
      .put(`/items/${item_id}`, newItem)
      .then((res) => {
        console.log(res);
        setItem(initialValue);
        history.push("/items");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <Container>
      <Row>
        <Col xs="12" md={{ size: 6, offset: 3 }}>
          <FormContainer>
            <h3>Edit an Item</h3>
            <form onSubmit={submitHandler}>
              <label>
                Item Name:
                <Input
                  name="item_name"
                  type="text"
                  value={item.item_name}
                  onChange={onChange}
                />
              </label>

              <label>
                Description:
                <Input
                  name="item_description"
                  type="text"
                  value={item.item_description}
                  onChange={onChange}
                />
              </label>
              <label>
                Price:
                <Input
                  name="price"
                  type="text"
                  valueAsNumber={item.price}
                  value={item.price}
                  onChange={onChange}
                />
              </label>
              <label>
                Category:
                <Input
                  name="category"
                  type="text"
                  value={item.category}
                  onChange={onChange}
                />
              </label>
              <Button>Save Changes</Button>
            </form>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemEdit;
