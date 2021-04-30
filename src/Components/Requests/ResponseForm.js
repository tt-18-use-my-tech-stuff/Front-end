import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Alert } from "react-bootstrap";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";

const FormContainer = styled.div`
  margin-top: 150px;
  width: 100%;
`;


function ResponseForm() {
  const [formValues, setFormValues] = useState({response: "",});
  const [alert, setAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false)
  const {request_id} = useParams();
  const history = useHistory();
  
  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/requests/${request_id}/respond `, formValues)
      .then((res) => {
        setAlert(!alert);
        history.goBack()

      })
      .catch((err) => {
        setErrorMessage(!errorMessage)
      });
  };
  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      {alert && (
        <Alert variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>You Updated The Status</p>
        </Alert>
      )}
      {errorMessage && (
      <Alert variant="danger">
        <Alert.Heading>Sorry</Alert.Heading>
        <p>Can Only Respond to Pending Request</p>
      </Alert>)}
      <Row>
        <Col xs="12" md={{ size: 6, offset: 3 }}>
          <FormContainer>
            <div>
              <h2>Respond</h2>

              <div>
                <form onSubmit={onSubmit}>
                 <select name="response" value={formValues.response} onChange={onChange}>
                    <option value="">----Select-----</option>
                     <option value="accepted">Accept</option>
                     <option value="declined">Reject</option>
                     <option value="completed">Completed</option>
                 </select>

                  <Button type="submit">Save Changes!</Button>
                </form>
              </div>
            </div>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default ResponseForm;