import React, { useState, useHistory } from "react";
import { useLogin } from "./useLogin";
import axios from "axios";
import styled from "styled-components";
import { Container, Row, Col, Button } from "reactstrap";
import useToken from "../hooks/useToken";

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

function LoginForm() {
  const [errors, values, handleChange, handleSubmit, isSubmitting] = useLogin();

  return (
    <Container>
      <Row>
        <Col xs="12" md={{ size: 6, offset: 3 }}>
          <FormContainer>
            <div className="login-wrapper">
              <h3>Log In Here</h3>
              <form>
                <div>
                  <label>
                    Username
                    <Input
                      type="text"
                      name="username"
                      onChange={handleChange}
                    />
                    <p>{errors.username}</p>
                  </label>
                </div>
                <div>
                  <label>
                    Password
                    <Input
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                    <p>{errors.password}</p>
                  </label>
                </div>

                <div>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
}


export default LoginForm;
