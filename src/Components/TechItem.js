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
import { useHistory } from "react-router";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
// import { useParams } from "react-router-dom";

const Card = styled(ReactCard)`
  margin-bottom: 50px;
`;

const TechCard = ({ item }) => {
  // const { push } = useHistory();
  const history = useHistory();
  // const params = useParams();
  const confirm = (action) =>
    window.confirm(`Are you sure you want to ${action} ${item.item_name}`);
  //\/\/\/\/\/\/\/\/\/\ CONDITIONAL RENDER LOGIC /\/\/\/\/\/\/\/\/\/\\
  // Declaring variables to be conditionally defined
  let handleSafeClick;
  let handleScaryClick;
  let safeButtonText;
  let scaryButtonText;
  let subtitle;
  if (item.owner) {
    //\/\/\/\/\/\/\/\/\/\ If the item is being viewed as a borrower /\/\/\/\/\/\/\/\/\/\\
    subtitle = `Owner: ${item.owner}`;
    handleSafeClick = (e) => {
      // routes to item detail page
      e.preventDefault();
      history.push(`/items/${item.item_id}`);
    };
    handleScaryClick = () => {
      // requests the item after confirmation
      if (confirm("request")) {
        axiosWithAuth()
          .post(`/requests`,{ item_id: item.item_id})
          .then((res) => {
            console.log(res.data);
            alert(`You're request is ${res.data.status}.`);
          })
          .catch((err) => {
            console.log(err.message);
            alert("Hmmm looks like something went wrong. Try again later.");
          })
          .finally(() => {});
      }
    };
    safeButtonText = "View Item";
    scaryButtonText = "Request Item";
  } else {
    //\/\/\/\/\/\/\/\/\/\ else if the item is being viewed as a lender /\/\/\/\/\/\/\/\/\/\\
    subtitle = item.renter ? `Rented by: ${item.renter}` : "Available";
    handleSafeClick = () => {
      // routes (in theory) to edit item page
      console.log(item);
      history.push(`/items/${item.item_id}`);
    };

    handleScaryClick = () => {
      // deletes item from database after confirmation
      if (confirm("DELETE")) {
        axiosWithAuth()
          .delete(`items/${item.item_id}`)
          .then((res) => {
            console.log(res.data);
            alert("Deletion Successful");
            history.go(0);
          })
          .catch((err) => {
            console.log(err.message);
            alert("Hmmm looks like something went wrong. Try again later.");
          });
      }
    };
    safeButtonText = "Edit Item";
    scaryButtonText = "Delete Item";
  }

  return (
    <Card>
      <CardImg top width="100%" src={techitems} alt="Recipe" />
      <CardBody>
        <CardTitle tag="h5">Title: {item.item_name}</CardTitle>
        <CardSubtitle tag="h5" className="mb-2 text-muted">
          {subtitle}
        </CardSubtitle>
        <Badge color="dark" pill>
          Category: {item.category}
        </Badge>
        <CardText>Description: {item.item_description}</CardText>
        <CardSubtitle tag="h5"> Daily Rental: {item.price}</CardSubtitle>
      </CardBody>

      <CardBody>
        <Button onClick={handleSafeClick}>{safeButtonText}</Button>
        <Button onClick={handleScaryClick}>{scaryButtonText}</Button>
      </CardBody>
    </Card>
  );
};

export default TechCard;
