import * as yup from "yup";

export default yup.object().shape({
  item_name: yup.string().required("Item name is required"),
  item_description: yup.string().required("Description is required"),
  price: yup
    .number()
    .min(1, `Price must be at least $1`)
    .max(999999.99, `Price must be at most $999999.99`)
    .required(`Price is required`),
  category: yup.string().required("Category required"),
});
