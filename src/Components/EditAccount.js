import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Alert } from "react-bootstrap";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import styled from "styled-components"

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

function EditAccount(){
    const [formValues, setFormValues] = useState({username: "", password: "", email: ""})
    const [alert, setAlert] = useState(false)

    useEffect(()=>{
        axiosWithAuth()
            .get("/account")
            .then(res=>{
                setFormValues(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])

    const onSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .put("/account", formValues)
        .then(res=>{
            setAlert(!false)
        })
        .catch(err=>{
            console.log(err.response)
        })
    }
    const onChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    return(
    <Container>
        {alert && <Alert variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          You Updated your Account
        </p>
      </Alert>}
        <Row>
          <Col xs="12" md={{ size: 6, offset: 3 }}>
            <FormContainer>
              <div className="signup-form">
                <h2>Edit Account</h2>
  
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
                    {/* <div>
                      <Input
                        value={formValues.password}
                        onChange={onChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                    </div> */}
  
                    <div>
                      <Input
                        value={formValues.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                        placeholder="email"
                      />
                    </div>
  
                    <Button type="submit">Save Changes!</Button>
                  </form>
                </div>
              </div>
            </FormContainer>
          </Col>
        </Row>
      </Container>)
}

export default EditAccount;