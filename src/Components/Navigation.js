import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
  const history = useHistory();
  const location = useLocation();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Navbar dark>
      <NavbarBrand tag={Link} to="/" className="mr-auto">
        Use My Tech Stuff
      </NavbarBrand>

      {/* display view recipes, add recipe, and log out if user has token, else display log in and sign up */}
      {localStorage.getItem("token") ? (
        <Nav className="nav-links">
          <NavItem>
            <NavLink
              tag={Link}
              to="/items"
              className={location.pathname === "/items" ? "active" : ""}
            >
              View Items
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/addItem"
              // className={location.pathname === "/addItem" ? "active" : ""}
            >
              Add Item
            </NavLink>
          </NavItem>
          <NavItem onClick={logout}>
            <NavLink tag={Link} to="#">
              Log Out
            </NavLink>
          </NavItem>
        </Nav>
      ) : (
        <Nav className="nav-links">
          <NavItem>
            <NavLink
              tag={Link}
              to="/login"
              className={location.pathname === "/login" ? "active" : ""}
            >
              Log In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/signUp"
              className={location.pathname === "/signUp" ? "active" : ""}
            >
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
      )}
    </Navbar>
  );
};

export default Navigation;
