import * as Yup from "yup";

export const schema = Yup.object().shape({
  email: Yup.string().email().required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});
