import React from "react";
import { Jumbotron, Button } from "reactstrap";
// import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const handleClick = () => {
    localStorage.getItem("token")
      ? history.push("/items")
      : history.push("/signup");
  };
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          Use My Tech Stuff: like AirBnB, but for high end electronics.
        </p>
        <hr className="my-2" />
        <p>
          Are you tired of paying ridiculous fees for camera and other equipment
          rentals? Bypass the middleman and rent from a real person!
        </p>
        <p className="lead">
          <Button onClick={handleClick} color="primary">
            Learn More!
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default HomePage;
