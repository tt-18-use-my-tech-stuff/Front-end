import "./App.css";
// import { Nav, Navbar } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import AddItem from "./component/add_item";
import SignUp from "./component/SignupPage";
import LoginForm from "./component/LoginForm";
import LenderDashboard from "./component/LenderDashboard";
// import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./component/Navigation";
import HomePage from "./component/HomePage";
import ItemPage from "./component/ItemPage";
import AvailableTechList from "./component/AvailableTechList";
import Profile from "./component/Profile";
import ItemEdit from "./component/itemEdit";
import RequestList from "./component/Requests/RequestList";
import ResponseForm from "./component/Requests/ResponseForm";

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
        <Route exact path="/requests/:request_id" component={ResponseForm} />
        <Route exact path="/requests" component={RequestList} />
      </Switch>
    </div>
  );
}

export default App;
