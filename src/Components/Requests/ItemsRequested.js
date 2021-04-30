import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import RequestCard from "./RequestCard";
// import {yourequest} from "../MockData/RequestData";

const ItemsRequested = (props) => {
    const { itemsRequests, deleteRequest, response } = props;
   console.log("ItemsRequested", itemsRequests)
    return (
        <Container style={{ margin: "50px auto", display: "flex" }}>
            <Container >
            <Row>
            {
                itemsRequests === "You have no requests" ?
                <p>You have no requests</p>
                :itemsRequests.map((request)=>{
                return(<Col xs="12" sm="6" md="4" key={request.request_id}>
                <RequestCard request={request} deleteRequest={deleteRequest} response={response}/>
                </Col>)
                })
            }
            </Row>
            </Container >
          
         
        </Container>
      );
}

export default ItemsRequested;