import React, { useEffect, useState } from "react";
// import { axiosWithAuth } from "./helpers/axiosWithAuth";
import { Col, Container } from "reactstrap";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
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
        <Navbar bg="light" variant="light">
            <Navbar.Brand >Your Items</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link >Request</Nav.Link>
                <Nav.Link href="/pending">Pending Request</Nav.Link>
                <Nav.Link href="/request-again">Rent Again</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button> 
            </Form>
        </Navbar>
        {requests ?
        <Container >
            {requests.map((request)=>{

                return(<Col xs="12" sm="6" md="4" key={request.request_id}>
                  <RequestCard  request={request}/>
                </Col>)
            })}
        </Container >
        : <p>You have not placed any requests</p>}
        </div>
    )
}

export default UserDashboard;