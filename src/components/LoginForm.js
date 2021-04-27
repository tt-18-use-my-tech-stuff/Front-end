import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useLogin } from "./useLogin";
// import axios from "axios";

function LoginForm() {
  const [values, errors, handleChange, handleSubmit, isSubmitting] = useLogin();

  // if (user && !user.isAuthenticated) return <Redirect to='/home' />
  // const [test, setTest] = useLocalStorage("testy");

  return (
    <div className="login-wrapper">
      {/* <button onClick={setTest("e")} /> */}
      <h3>Log In Here</h3>
      <form>
        <label>
          Username
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={handleChange} />
        </label>

        <div>
          <button disabled={isSubmitting} type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
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
