import { Input as InputAntd } from "antd";
import { Fragment } from "react";
import { ErrorMessage, Field } from "formik";

export const Input = (props) => {
  const { label, name } = props;
  return (
    <Fragment>
      <Field>
        {({ value, name }) => (
          <InputAntd  addonBefore={label} value={value} name={name} {...props}/>
          
        )}
      </Field>
      <ErrorMessage name={name} className="error-message" />
    </Fragment>
  );
};
