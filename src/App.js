import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
// import PrivateRoute from "./Components/PrivateRoute";
import AddItem from "./Components/add_item";
import TechList from "./Components/TechList";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" variant="dark" >
        <Navbar.Brand href="#">Use My Tech Stuff</Navbar.Brand>
      <Nav >
        <Nav.Link href="/">Login</Nav.Link>
        <Nav.Link href="/signUp">SignUp</Nav.Link>
        <Nav.Link href="/items">Items</Nav.Link>
        <Nav.Link href="/addItem">Add Item</Nav.Link>
      </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={"Login.js"} />
        <Route path="/signUp" component={"SignUp.js"} />
        <Route path="/addItem" component={AddItem} />
        <Route path="/items" component={TechList} />
        <Route path="/items/:id" component ={"editItem.js"} />
      </Switch>

      </div>
  );
}

export default App;
