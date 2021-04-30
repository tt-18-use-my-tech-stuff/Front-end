import React from "react";
import { Container, Row, Col } from "reactstrap";
import RequestCard from "./RequestCard";
// import {requested} from "../MockData/RequestData";

const RequestList = (props) => {
    const { requestsMade, deleteRequest, response } = props;
   console.log("RequestedMade", requestsMade)
    
    return (
        <Container style={{ margin: "50px auto", display: "flex" }}>
            <Container >
            <Row>
            {
                requestsMade === "You have made no requests" ?
                <p>You have made no requests</p>
                :
                requestsMade.map((request)=>{
                return(<Col xs="12" sm="6" md="4" key={request.request_id}>
                <RequestCard request={request} deleteRequest={deleteRequest} response={response}/>
                </Col>)
                })}
            </Row>
        </Container >
          
         
        </Container>
      );
}

export default RequestList;