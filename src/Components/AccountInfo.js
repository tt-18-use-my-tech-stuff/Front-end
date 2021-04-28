import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import { Badge } from "reactstrap";

const AccountInfo = () => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <br />
      <br />
      <h1>
        Username: <Badge color="info">{formValues.username}</Badge>
      </h1>
      <br />
      <br />
      <h1>
        Email: <Badge color="info">{formValues.email}</Badge>
      </h1>
      <br />
      <br />
      <h1>
        User ID: <Badge color="info">{formValues.user_id}</Badge>
      </h1>
      <br />
      <br />

      <h1>
        Password:{" "}
        <Badge color="secondary">
          {" "}
          🤫 🤐 hah Nice Try! Im keeping it secret 😶😶
        </Badge>
      </h1>
    </div>
  );
};

export default AccountInfo;
