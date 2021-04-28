import "./App.css";
// import { Nav, Navbar } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import AddItem from "./Components/add_item";
import TechList from "./Components/TechList";
import SignUp from "./Components/SignupPage";
import LoginForm from "./Components/LoginForm";
import {DummyData} from "./Components/MockData/DummyData"
import LenderDashboard from "./Components/LenderDashboard";
// import PrivateRoute from "./Components/PrivateRoute";
import UserDashboard from "./Components/UserDashboard";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/HomePage";
import Profile from "./Components/Profile";
import EditAccount from "./Components/EditAccount";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <Navigation />
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/addItem" component={AddItem} />
        <Route path="/lenderDashboard" component={LenderDashboard} />
        <Route path="/userDashboard" component={UserDashboard} />
        <Route path="/editAccount" component={EditAccount} />
        <Route path="/profile" component={Profile} /> 
        <Route path="/editItem/:id" component={"editItem.js"} />
        <Route path="/items">
          <TechList itemList={DummyData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
