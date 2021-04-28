import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  Button,
} from "reactstrap";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import { useHistory } from "react-router-dom";
// import { DummyData } from "./MockData/DummyData";
import TechPic from "../img/techitems.jpg";

const Title = styled.div`
  margin-bottom: 20px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ItemPage = () => {
  const { item_id } = useParams();
  const [item, setItem] = useState({});
  const history = useHistory();
  console.log(item_id);

  useEffect(() => {
    axiosWithAuth()
      .get(`/items/${item_id}`)
      .then((res) => {
        console.log(item_id);
        setItem(res.data);
      })
      .catch((err) => console.log(err));
  }, [item_id]);

  const routeToItemEdit = (item) => {
    console.log("edit item button");
  };
  const deleteItem = (id) => {
    console.log("delete item button");
  };

  return (
    <div className="itemPageContainer">
      <Container>
        <Row>
          <Col xs={{ size: 8, offset: 2 }}>
            <Card>
              <CardImg src={TechPic} alt="techItems-image" />
              <CardBody className="text-center">
                <Title>
                  <h2>{item.item_name}</h2>
                  <p>from {item.owner}</p>
                </Title>
                <Title>
                  <h5>item_description</h5>
                  <p>{item.item_description}</p>
                </Title>
                <Title>
                  <h5>price</h5>
                  <p>{item.price}</p>
                </Title>
                <Title>
                  <h5>category</h5>
                  <p>{item.category}</p>
                </Title>

                <BtnContainer>
                  <Button
                    color="primary"
                    onClick={(e) => routeToItemEdit(item)}
                    key={item.id}
                  >
                    Edit Item
                  </Button>
                  <Button color="danger" onClick={() => deleteItem()}>
                    Delete Item
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => history.push("/items")}
                  >
                    Return
                  </Button>
                </BtnContainer>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemPage;