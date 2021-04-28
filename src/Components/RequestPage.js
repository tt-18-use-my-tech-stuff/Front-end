import React from "react";
import { Col, Container } from "reactstrap";
import RequestCard from "./RequestCard";

function RequestPage({requests}) {
    return(
        <Container >
                {requests.map((request)=>{
                    return(<Col xs="12" sm="6" md="4" key={request.request_id}>
                      <RequestCard  request={request}/>
                    </Col>)
                })}
        </Container > 
    )
}