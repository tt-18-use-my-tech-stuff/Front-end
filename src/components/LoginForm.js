import React from "react";
import { useLogin } from "./useLogin";
// import axios from "axios";
import styled from "styled-components";
import { Container, Row, Col, Button } from "reactstrap";

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
  const [values, errors, handleChange, handleSubmit, isSubmitting] = useLogin();

  // if (user && !user.isAuthenticated) return <Redirect to='/home' />

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

// function LoginForm(/*props*/) {

//   // const { values, submit, change, disabled, errors } = props;

//   const [state, setState] = useState({
//     username: "",
//     password: "",
//   })

//   const onSubmit = (evt) => {
//     evt.preventDefault();
//     // submit();
//   }

//   const onChange = (evt) => {
//     // update the inputs
//     setState({...state, [evt.target.name]: evt.target.value})
//   }

//   return (
//     <div className="login-wrapper" onSubmit={onSubmit}>
//       <h3>Log In Here</h3>
//       <form>
//         <label>
//           Username
//           <input
//             type="text"
//             name="username"
//             value={state.username}
//             onChange={onChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             name="password"
//             value={ state.password }
//             onChange={onChange}
//           />
//         </label>
//         <div>
//           <button type="submit">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

export default LoginForm;
