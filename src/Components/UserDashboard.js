import React, {useState, useEffect} from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import RequestList from "./Requests/RequestList";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import { requested, yourequest } from "../Components/MockData/RequestData";
import ItemsRequested from "./Requests/ItemsRequested";


function UserDashboard () {
    const [requestsMade, setRequestsMade] = useState([]);
    const [itemsRequests, setItemsRequest] = useState([]);
    const [ toggle, setToggle ] = useState(true);

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
                console.log(requestsMade)
                setItemsRequest(res[1].data)
            })
            .catch(err=>{
                console.log(err.response)
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

    return(
        <div>
        <Navbar bg="light" variant="light">
            <Navbar.Brand >Dashboard</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#" >Items</Nav.Link>
                <Nav.Link href="#"onClick={()=>setToggle(false)}>Requested</Nav.Link>
                <Nav.Link href="#" onClick={()=>setToggle(true)}>My Request</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search By Title" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button> 
            </Form>
        </Navbar>
        {
            toggle? <RequestList 
            requestsMade={requestsMade} 
            deleteRequest={deleteRequest}
        /> 
        :
            <ItemsRequested 
            itemsRequests={itemsRequests} 
            deleteRequest={deleteRequest}
        /> 
        } 
        </div>
    )
}

export default UserDashboard;