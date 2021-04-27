import * as yup from "yup";

export default yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required").min(8, "Valid password is required"),
});
