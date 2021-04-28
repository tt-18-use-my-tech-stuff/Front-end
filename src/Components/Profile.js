import React, { useState } from "react";

import UserDashboard from "../Components/UserDashboard";
import LenderDashboard from "./LenderDashboard";
import EditAccount from "./EditAccount";
import AccountInfo from "./AccountInfo";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

function Profile() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    // <div>
    //     <h1>Your Account</h1>
    //     <div>
    //         <h3>Edit Account</h3>
    //     </div>
    //     <div>
    //         <h3>Items Rented</h3>
    //     </div>
    //     <div>
    //         <h3>Items Own</h3>
    //     </div>

    // </div>
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={{ active: activeTab === "1" }}
            onClick={() => {
              toggle("1");
            }}
          >
            Account
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={{ active: activeTab === "2" }}
            onClick={() => {
              toggle("2");
            }}
          >
            Edit Account
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={{ active: activeTab === "3" }}
            onClick={() => {
              toggle("3");
            }}
          >
            Items Rented
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={{ active: activeTab === "4" }}
            onClick={() => {
              toggle("4");
            }}
          >
            Items Owned
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={{ active: activeTab === "5" }}
            onClick={() => {
              toggle("5");
            }}
          >
            Settings
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Account Information</h4>
              <AccountInfo />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <h4>Edit My Account</h4>
              <EditAccount />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <h4>Items I'm Renting</h4>
              <LenderDashboard />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <h4>Items I Own</h4>
              <UserDashboard />
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="5">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}
export default Profile;
