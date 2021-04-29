import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";


function UserDashboard () {

    return(
        <div>
        <Navbar bg="light" variant="light">
            <Navbar.Brand >Dashboard</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link >Items Renting</Nav.Link>
                <Nav.Link href={`/requests/owned`}>Pending Response</Nav.Link>
                <Nav.Link href="/requests">Request</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button> 
            </Form>
        </Navbar>
        </div>
    )
}

export default UserDashboard;