import * as yup from "yup";

export default yup.object().shape({
  item_name: yup.string().required("Item name is required"),
  item_description: yup.string().required("Description is required"),
  price: yup.number().required("Price is required"),
  category: yup.string().required("Category required")
});
