import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import RequestCard from "./RequestCard"
import { axiosWithAuth } from "../helpers/axiosWithAuth"
// import { Alert } from "bootstrap";

const RequestList = (props) => {
    const [requestsMade, setRequestsMade] = useState([]);
    const [itemsRequests, setItemsRequest] = useState([]);
    const [defaultLoading, setDefaulLoading] = useState(false)

    const fetchUserRequest = () => {
        return axiosWithAuth()
        .get("/account/requests")
    }
    const fetchItemsRequest = () => {
        return axiosWithAuth()
        .get("/account/requests/owned")
    }
    useEffect(()=> {
        Promise.all([fetchUserRequest(), fetchItemsRequest()])
            .then(function(res){
                setRequestsMade(res[0].data)
                setItemsRequest(res[1].data)
            })
    }, [])

    const deleteRequest = (id) => {
        console.log(id)
        axiosWithAuth()
            .delete(`/requests/${id}`)
            .then(res=> {
                alert("Request was Deleted")
            })
            .catch(err=> {
                console.log(err.response)
            })
    }
    return (
        <Container style={{ margin: "50px auto" }}>
          
            
            {defaultLoading ?
            <Container >
                {requestsMade.map((request)=>{
                return(<Col xs="12" sm="6" md="4" key={request.request_id}>
                <RequestCard deleteRequest={deleteRequest} request={request}/>
                </Col>)
                })}
            </Container >
            :<Container >
                {itemsRequests.map((request)=>{
                return(<Col xs="12" sm="6" md="4" key={request.request_id}>
                <RequestCard deleteRequest={deleteRequest} request={request}/>
                </Col>)
                })}
        </Container >}
          
         
        </Container>
      );
}

export default RequestList;