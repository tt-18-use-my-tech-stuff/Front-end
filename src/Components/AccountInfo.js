import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import { Badge } from "reactstrap";
import { SpinnerDiv, Spinner } from "./styled-components/spinner";

const AccountInfo = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    axiosWithAuth()
      .get("/account")
      .then((res) => {
        console.log(res);
        setFormValues(res.data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
        setIsFetching(false);
      });
  }, []);

  if (isFetching)
    return (
      <SpinnerDiv>
        <Spinner color="info" />
      </SpinnerDiv>
    );
  else
    return (
      <div>
        <br />
        <br />
        <h2>
          Username: <Badge color="info">{formValues.username}</Badge>
        </h2>
        <br />
        <br />
        <h2>
          Email: <Badge color="info">{formValues.email}</Badge>
        </h2>
        <br />
        <br />
        <h2>
          User ID: <Badge color="info">{formValues.user_id}</Badge>
        </h2>
        <br />
        <br />

        <h2>
          Password: <Badge color="secondary"> 🤫 🤐 😶</Badge>
        </h2>
      </div>
    );
};

export default AccountInfo;
