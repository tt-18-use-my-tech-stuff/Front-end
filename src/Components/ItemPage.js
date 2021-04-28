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
  Badge,
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

  useEffect(() => {
    axiosWithAuth()
      .get(`/items/${item_id}`)
      .then((res) => {
        console.log(res);
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
          <Col xs={{ size: 6, offset: 3 }}>
            <div className="itemPageCard">
              <Card>
                <CardImg src={TechPic} alt="techItems-image" />
                <CardBody className="text-center">
                  <Title>
                    <Badge color="dark" pill>
                      Name:
                    </Badge>
                    <h1>{item.item_name}</h1>

                    {/* <p>from {item.owner}</p> */}
                  </Title>
                  <Title>
                    <Badge color="dark" pill>
                      Category:
                    </Badge>

                    <h3>{item.category}</h3>
                  </Title>
                  <Title>
                    <Badge color="dark" pill>
                      Description:
                    </Badge>
                    <h3>{item.item_description}</h3>
                  </Title>
                  <Title>
                    {/* <h5>price</h5>
                    <h3>{item.price}</h3> */}
                    <Badge color="dark" pill>
                      Daily Price:
                    </Badge>
                    <h1>
                      <Badge color="warning">${item.price}</Badge>
                    </h1>
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
                      color="success"
                      onClick={() => history.push("/items")}
                    >
                      Return
                    </Button>
                  </BtnContainer>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemPage;
