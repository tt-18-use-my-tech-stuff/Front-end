import { useState, useEffect } from "react";
import loginSchema from "../validation/loginSchema";
import * as yup from "yup";

export const useLogin = () => {
  const [user, setUser] = useState({});
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false);

  // console.log('values', values)

  useEffect(() => {
    // if (Object.keys(errors) === 0 && isSubmitting) {
    if(isSubmitting) {
      //api call to authenticate user using the values object
      const authenticatedUser = {
        username: values.username,
        isAuthenticated: true
      }

      setUser(authenticatedUser)
    }
  }, [values, isSubmitting])

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

  const handleChange = e => {
    if (e) e.persist()
    yup.reach(loginSchema, e.target.name)
    .validate(e.target.value)
    .then(() => {
      setErrors({...errors, [e.target.name]: ""})
    })
    .catch((error) => {
      setErrors({...setErrors, [e.target.name]: error.errors[0]})
    })
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    if (e) e.preventDefault()
    console.log(values);
    setValues({})
    // setErrors(validate(values))
    // setIsSubmitting(true)
  }

  useEffect(() => {
    loginSchema.isValid(values).then((valid) => {
      setIsSubmitting(!valid);
    });
  }, [setIsSubmitting, values]);

  return [
    errors,
    values,
    handleChange,
    handleSubmit,
    isSubmitting
  ]
};
