import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { SpinnerDiv, Spinner } from "./styled-components/spinner";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import { Button, Form, Label, Input } from "reactstrap";
import TechItem from "./TechItem";
import TechList from "./TechList";

const AvailableTechList = () => {
  const [itemList, setItemList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axiosWithAuth()
      .get("https://tt18-build-week.herokuapp.com/api/items/available")
      .then((res) => {
        console.log(res);
        setItemList(res.data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
        setIsFetching(false);
      });
  }, []);

  const gotItemList = itemList.length !== 0 ? true : false;

  if (isFetching)
    return (
      <SpinnerDiv>
        <Spinner color="info" />
      </SpinnerDiv>
    );
  else if (gotItemList)
    return <TechList itemList={itemList} isFetching={isFetching} />;
  else if (!gotItemList)
    return (
      <Container style={{ margin: "50px auto" }}>
        <Row>
          <Col xs="12" lg={{ size: 4, offset: 4 }}>
            <Card>
              <CardBody>Looks like there's nothing listed yet</CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  else return <></>;
};

export default AvailableTechList;
