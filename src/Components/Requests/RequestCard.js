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
import techitems from "../../img/techitems.jpg";

const Card = styled(ReactCard)`
  margin-bottom: 50px;
`;

const RequestCard = (props) => {
  const {request, deleteRequest} = props;
  return (
    <Card>
      <CardImg top width="100%" src={techitems} alt="Recipe" />
      <CardBody>
        <CardTitle tag="h5">Title: {request.item_name}</CardTitle>
        <CardSubtitle tag="h5" className="mb-2 text-muted">
          {request.owner
            ? `Owner: ${request.owner}`
            : `Renter: ${request.requester}`
        }
        </CardSubtitle>
        <Badge color="dark" pill>
          Status: {request.status ? request.status : "Unavailable"}
        </Badge>
      </CardBody>

      <CardBody>
        {request.requester && <Button onClick={()=>console.log("route to response")}>Respond</Button>}
        {request.owner && <Button onClick={()=>deleteRequest(request.request_id)}>Delete</Button>}
      </CardBody>
    </Card>
  );
};

export default RequestCard;