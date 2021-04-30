import "./App.css";
// import { Nav, Navbar } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import AddItem from "./Components/add_item";
import SignUp from "./Components/SignupPage";
import LoginForm from "./Components/LoginForm";
import LenderDashboard from "./Components/LenderDashboard";
// import PrivateRoute from "./Components/PrivateRoute";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/HomePage";
import ItemPage from "./Components/ItemPage";
import AvailableTechList from "./Components/AvailableTechList";
import Profile from "./Components/Profile";
import ItemEdit from "./Components/itemEdit";
import RequestList from "./Components/Requests/RequestList";
import ResponseForm from "./Components/Requests/ResponseForm";

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
