import { useState, useEffect } from "react";
import loginSchema from "../validation/loginSchema";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const useLogin = () => {
  // const [user, setUser] = useState({});
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();
  // console.log('values', values)

  // useEffect(() => {
  //   // if (Object.keys(errors) === 0 && isSubmitting) {
  //   if (isSubmitting) {
  //     //api call to authenticate user using the values object
  //     const authenticatedUser = {
  //       username: values.username,
  //       isAuthenticated: true,
  //     };

  //     setUser(authenticatedUser);
  //   }
  // }, [values, isSubmitting]);

  // const validate = values => {
  //   let errors = {}
  //   if (!values.username) {
  //     errors.username = 'Username is required';
  //   }
  //   if (!values.password) {
  //     errors.password = 'Password is required'
  //   }

  //   return errors;
  // }

  const handleChange = (e) => {
    if (e) e.persist();
    yup
      .reach(loginSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((error) => {
        console.log(error.errors[0]);
        setErrors({ ...errors, [e.target.name]: error.errors[0] });
      });
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    console.log(values);
    setValues({});
    // setErrors(validate(values))
    // setIsSubmitting(true)
    axios
      .post("https://tt18-build-week.herokuapp.com/api/auth/login", values)
      .then((res) => {
        console.log("successful", res.data);
        localStorage.setItem("token", res.data.token);
        history.push("/items");
      })
      .catch((err) => {
        console.log("unsuccesful", err);
      });
     
  };

  useEffect(() => {
    loginSchema.isValid(values).then((valid) => {
      setIsSubmitting(!valid);
    });
  }, [values]);

  return [errors, values, handleChange, handleSubmit, isSubmitting];
};
