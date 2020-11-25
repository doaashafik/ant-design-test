import React from "react";
import { Form, Formik } from "formik";
import { schema } from "./schema";
import { FormControl } from "../FormControl/FormControl";
export const LoginForm = () => {
  return (
    <Formik
     onSubmit={(values) => console.log(values)}
      initialValues={{
        email: "",
        password: "",
      }}
      schemaValidation={schema}
    >
      {(formik) => {
        console.log(formik.errors)
        return (
          <Form>
            <FormControl
              control="input"
              type="text"
              name="email"
              placeholder="Your Email"
              label="Email"
            />
            <FormControl
              control="input"
              type="password"
              name="password"
              placeholder="Your Password"
              label="Password"
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};
