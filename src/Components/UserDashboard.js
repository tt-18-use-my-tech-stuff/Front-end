import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import { Col, Container } from "reactstrap";
import { requestData } from "./MockData/RequestData";
import RequestCard from "./RequestCard";

function UserDashboard () {
    const [requests, setRequests] = useState([])
    
    useEffect(()=> {
        setRequests(requestData)
        // axiosWithAuth()
        // .get()
        // .then(res=>{
        //     setRequest(res.data)
        // })
        // .catch(err=> {
        //     console.log(err.response)
        // })
    }, [])
    return(
        <div>
        <header>
            <h1>Your Items</h1>
            <input
                placeholder="Search"
            />
            <button>Search</button>
        </header>
        <nav>
            <ul>
                <li>Request</li>
                <li>Pending Request</li>
                <li>Rent Again</li>
            </ul>
        </nav>
        <Container >
            {requests.map((request)=>{

                return(<Col xs="12" sm="6" md="4" key={request.request_id}>
                  <RequestCard  request={request}/>
                </Col>)
            })}
        </Container >
        </div>
    )
}

export default UserDashboard;