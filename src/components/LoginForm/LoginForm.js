import React from "react";
import { Form, Formik } from "formik";
import { schema } from "./schema";
import { FormControl } from "../FormControl/FormControl";
import { Button, Space } from "antd";
import './LoginForm.scss'
export const LoginForm = () => {
  return (
    <Formik
      onSubmit={(values) => console.log(values)}
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={schema}
    >
      {(formik) => {
        return (
          <Form>
            <Space  size={20} direction="vertical" className="login-form-space">
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
              <Button type="submit">Submit</Button>
            </Space>
          </Form>
        );
      }}
    </Formik>
  );
};
