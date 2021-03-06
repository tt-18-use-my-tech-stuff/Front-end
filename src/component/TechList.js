import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { SpinnerDiv, Spinner } from "./styled-components/spinner";
import { Button, Form, Input } from "reactstrap";
import TechItem from "./TechItem";

const TechList = ({ itemList, isFetching }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    setSearchTerm(event.target["title"].value);
    event.preventDefault();
  };

  const gotItemList = itemList.length !== 0 ? true : false;

  if (isFetching)
    return (
      <SpinnerDiv>
        <Spinner color="info" />
      </SpinnerDiv>
    );
  else if (gotItemList)
    return (
      <Container>
        <div>
          <Form onSubmit={handleSubmit}>
            <div className="searchBox">
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Search items"
                onChange={handleChange}
                value={searchTerm}
              />

              <Button>Search</Button>
            </div>
          </Form>
        </div>
        <Row>
          {itemList.map((item) => {
            if (
              item.item_name &&
              item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return (
                <Col xs="12" sm="6" md="4" key={item.item_id}>
                  <TechItem item={item} />
                </Col>
              );
            } else return null;
          })}
        </Row>
      </Container>
    );
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

export default TechList;
