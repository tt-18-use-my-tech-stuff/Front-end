import "./App.css";
// import { Nav, Navbar } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
// import PrivateRoute from "./Components/PrivateRoute";
import AddItem from "./Components/add_item";
import TechList from "./Components/TechList";
import SignUp from "./Components/SignupPage";
import LoginForm from "./Components/LoginForm";
import {DummyData} from "./Components/MockData/DummyData"
import LenderDashboard from "./Components/LenderDashboard";
import Navigation from "./Components/Navigation";
import UserDashboard from "./Components/UserDashboard";

function App() {
  return (
    <div className="App">
      {/* <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#">Use My Tech Stuff</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Login</Nav.Link>
          <Nav.Link href="/signUp">Sign Up</Nav.Link>
          <Nav.Link href="/items">Items</Nav.Link>
          <Nav.Link href="/addItem">Add Item</Nav.Link>
        </Nav>
      </Navbar> */}
      <Navigation />
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/addItem" component={AddItem} />

        <Route path="/items">
          <TechList itemList={DummyData} />
        </Route>
        <Route path="/lenderDashboard" component={LenderDashboard} />
        <Route path="/userDashboard" component={UserDashboard} /> 
        <Route path="/items/:id" component={"editItem.js"} />
      </Switch>
    </div>
  );
}

export default App;
