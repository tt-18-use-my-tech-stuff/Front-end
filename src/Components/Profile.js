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
  const [funMessage, setFunMessage] = useState("");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleClick = () => {
    setFunMessage(<h1> 🔥🎊🎊🎊🙌 🙌 🥳🥳🙌 🙌 🎉🎉🙌🙌🎊🎊🎊🔥</h1>);
  };

  return (
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
            Items Renting
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={{ active: activeTab === "4" }}
            onClick={() => {
              toggle("4");
            }}
          >
            My Items
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
              <h4>Items Renting</h4>
              <UserDashboard />
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <h4>My Items</h4>
              <LenderDashboard />
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="5">
          <Row>
            <Col sm="">
              <Card body>
                <CardTitle>#tt_webft_18</CardTitle>
                <CardText>
                  Think #tt_webft_18 is the best track team at lambda?
                </CardText>
                <Button onClick={handleClick}>Click if you agree!</Button>
              </Card>
              {funMessage}
            </Col>
            <Col sm="">
              <Card body>
                <CardTitle>#tt_webft_18</CardTitle>
                <CardText>
                  Think #tt_webft_18 is the best track team at lambda?
                </CardText>
                <Button onClick={handleClick}>Click if you agree!</Button>
              </Card>
              {funMessage}
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}
export default Profile;
