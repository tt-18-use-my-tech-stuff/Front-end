import "./App.css";
// import { Nav, Navbar } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import AddItem from "./components/add_item";
import SignUp from "./components/SignupPage";
import LoginForm from "./components/LoginForm";
import LenderDashboard from "./components/LenderDashboard";
// import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import ItemPage from "./components/ItemPage";
import AvailableTechList from "./components/AvailableTechList";
import Profile from "./components/Profile";
import ItemEdit from "./components/itemEdit";
import RequestList from "./components/Requests/RequestList";
import ResponseForm from "./components/Requests/ResponseForm";

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

        <Route path="/profile" component={Profile} />

        <Route path="/lenderDashboard" component={LenderDashboard} />
        <Route path="/editItem/:item_id" component={ItemEdit} />
        <Route path="/items/:item_id" component={ItemPage} />
        <Route path="/items">
          <AvailableTechList />
        </Route>

        {/* <Route pathe="/rentedItems" /> */}
        <Route exact path="/requests/:request_id" component={ResponseForm}/>
        <Route exact path="/requests" component={RequestList} />

      </Switch>
    </div>
  );
}

export default App;
