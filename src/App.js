import "./App.css";
// import { Nav, Navbar } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import AddItem from "./Components/add_item";
import TechList from "./Components/TechList";
import SignUp from "./Components/SignupPage";
import LoginForm from "./Components/LoginForm";
import { DummyData } from "./Components/MockData/DummyData";
import LenderDashboard from "./Components/LenderDashboard";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/HomePage";
import ItemPage from "./Components/ItemPage";
import AvailableTechList from "./Components/AvailableTechList";

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
        <Route path="/editItem/:item_id" component={"editItem.js"} />
        <Route path="/items/:item_id" component={ItemPage} />
        <Route path="/items">
          <AvailableTechList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
