import React from "react";
import { Jumbotron, Button } from "reactstrap";
// import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import facebook from "../assets/facebook-brands.svg";
import twitter from "../assets/twitter-brands.svg";
import instagram from "../assets/instagram-brands.svg";

import github from "../assets/github-brands.svg";
import envelope from "../assets/envelope-open-text-solid.svg";

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
        <div className="homePage">
          <div className="jjj">
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">
              Use My Tech Stuff: like AirBnB, but for high end electronics.
            </p>
            <hr className="my-2" />
            <p>
              Are you tired of paying ridiculous fees for camera and other
              equipment rentals? Bypass the middleman and rent from a real
              person!
            </p>
            <p className="lead">
              <Button onClick={handleClick} color="primary">
                Learn More!
              </Button>
            </p>
          </div>
        </div>
      </Jumbotron>
      <footer className="footer">
        <div className="icons">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />

          <img src={github} alt="github" />
          <img src={envelope} alt="envelope" />
        </div>
        <h4>Copyright &copy; Use My Tech Stuff 2021. All Rights Reserved. </h4>
      </footer>
    </div>
  );
};

export default HomePage;
