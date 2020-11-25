import React from "react";
import { Form } from "formik";
export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      schemaValidation={schema}
    >
      {(formik) => (
        <Form>
          <FormControl type="text" name="email" control="input" />
          <FormControl type="password" name="password" control="input" />
        </Form>
      )}
    </Formik>
  );
};
