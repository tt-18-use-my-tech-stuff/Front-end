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
} from "reactstrap";
import techitems from "../img/techitems.jpg";

const Card = styled(ReactCard)`
  margin-bottom: 50px;
`;

const RequestCard = ({request}) => {
  return (
    <Card>
      <CardImg top width="100%" src={techitems} alt="Recipe" />
      <CardBody>
        <CardTitle tag="h5">Title: {request.item}</CardTitle>
        <CardSubtitle tag="h5" className="mb-2 text-muted">
          {request.owner
            ? `Owner: ${request.owner}`
            : null
        }
        </CardSubtitle>
        <Badge color="dark" pill>
          Status: {request.status}
        </Badge>
      </CardBody>

      <CardBody>
        <Button>View item</Button>
      </CardBody>
    </Card>
  );
};

export default RequestCard;