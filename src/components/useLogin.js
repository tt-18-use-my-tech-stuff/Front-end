import { useState, useEffect } from "react";

export const useLogin = () => {
  const [user, setUser] = useState({});
  const [values, setValues] = useState({});
  // const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log('values', values)

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

  const validate = values => {
    let errors = {}
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.password) {
      errors.password = 'Password is required'
    }

    return errors;
  }

  const handleChange = e => {
    if (e) e.persist()
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    if (e) e.preventDefault()

    // setErrors(validate(values))
    setIsSubmitting(true)
  }

  return [
    user,
    // errors,
    handleChange,
    handleSubmit
  ]
};
