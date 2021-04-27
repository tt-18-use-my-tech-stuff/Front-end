import React, { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "../validation/registrationSchema";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button } from "reactstrap";
import { SpinnerDiv, Spinner } from "./styled-components/spinner";
import styled from "styled-components";

const FormContainer = styled.div`
  margin-top: 150px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const SignupPage = () => {
  const initialFormValues = {
    username: "",
    password: "",
    email: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://tt18-build-week.herokuapp.com/api/auth/register",
        formValues
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        history.push("/items");
      })
      .catch((err) => console.log(err.response));
    setFormValues(initialFormValues);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <Container>
      <Row>
        <Col xs="12" md={{ size: 6, offset: 3 }}>
          <FormContainer>
            <div className="signup-form">
              <h2>Sign up</h2>

              <div>
                <form onSubmit={onSubmit}>
                  <div>
                    <Input
                      value={formValues.username}
                      onChange={onChange}
                      name="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <Input
                      value={formValues.password}
                      onChange={onChange}
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>

                  <div>
                    <Input
                      value={formValues.email}
                      onChange={onChange}
                      name="email"
                      type="text"
                      placeholder="email"
                    />
                  </div>

                  <Button type="submit">Sign Up!</Button>
                  <div>
                    {formErrors.userName}
                    {formErrors.password}
                    {formErrors.email}
                  </div>
                </form>
              </div>
            </div>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
