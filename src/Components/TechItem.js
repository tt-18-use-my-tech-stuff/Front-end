import React from "react";
import styled from "styled-components";

import {
  Card as ReactCard,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
  CardText,
} from "reactstrap";
import techitems from "../img/techitems.jpg";

const Card = styled(ReactCard)`
  margin-bottom: 50px;
`;

const TechCard = ({ item }) => {
  return (
    <Card>
      <CardImg top width="100%" src={techitems} alt="Recipe" />
      <CardBody>
        <CardTitle tag="h5">Title: {item.item_name}</CardTitle>
        <CardSubtitle tag="h5" className="mb-2 text-muted">
          {item.owner
            ? `Owner: ${item.owner}`
            : item.renter
            ? `Rented by: ${item.renter}`
            : ""}
        </CardSubtitle>
        <Badge color="dark" pill>
          Category: {item.category}
        </Badge>
        <CardText>Description: {item.item_description}</CardText>
        <CardSubtitle tag="h5"> Daily Rental: {item.price}</CardSubtitle>
      </CardBody>

      <CardBody>
        <Button>View item</Button>
      </CardBody>
    </Card>
  );
};

export default TechCard;
