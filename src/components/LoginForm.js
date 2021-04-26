import React, { useState } from "react";
// import axios from "axios";

function LoginForm() {

  const [state, setState] = useState({
    username: "",
    password: "",
  })

  const onChange = (e) => {
    // update the inputs
    setState({...state, [e.target.name]: e.target.value})
  }

  return (
    <div className="login-wrapper">
      <h1>Log In Here</h1>
      <h3>If you have an existing account...</h3>
      <form>
        <label>
          Username
          <input 
            type="text"
            name="username"
            value={ state.username }
            onChange={onChange}
          />
        </label>
        <label>
          Password
          <input 
            type="password"
            name="password"
            value={ state.password }
            onChange={onChange}
          />
        </label>
        <div>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;

