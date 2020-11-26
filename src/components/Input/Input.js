import { Input as InputAntd } from "antd";
import { Fragment } from "react";
import { ErrorMessage, Field } from "formik";

export const Input = (props) => {
  const { label, name } = props;
  return (
    <Fragment>
      <Field>
        {({ field, form }) => {
          const { value } = field;
          const settings = {
            ...field,
            ...props,
            value: value[name],
            addonBefore: label,
          };
          return (
            <Fragment>
              <InputAntd {...settings} />
              <ErrorMessage
                name={name}
                {...form.errors[name]}
                component="div"
                className="error-message"
              />
            </Fragment>
          );
        }}
      </Field>
    </Fragment>
  );
};
