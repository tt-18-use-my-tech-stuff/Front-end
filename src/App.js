import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
// import PrivateRoute from "./Components/PrivateRoute";
import AddItem from "./Components/add_item";
import TechList from "./Components/TechList";
import SignUp from "./Components/Signup";
import LoginForm from "./Components/LoginForm";


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" variant="dark" >
        <Navbar.Brand href="#">Use My Tech Stuff</Navbar.Brand>
      <Nav >
        <Nav.Link href="/">Login</Nav.Link>
        <Nav.Link href="/signUp">Sign Up</Nav.Link>
        <Nav.Link href="/items">Items</Nav.Link>
        <Nav.Link href="/addItem">Add Item</Nav.Link>
      </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/addItem" component={AddItem} />
        <Route path="/items" component={TechList} />
        <Route path="/items/:id" component ={"editItem.js"} />
      </Switch>

      </div>
  );
}

export default App;
