import * as yup from "yup";

export default yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().required().min("Valid email is required"),
  password: yup.string().required("Password is required"),
});
