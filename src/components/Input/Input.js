import { Input as InputAntd } from "antd";
import { Fragment } from "react";

export const Input = (props) => {
  return (
    <Fragment>
      <Label />
      <Field {...props} component={InputAntd} />
      <ErrorMessage />
    </Fragment>
  )
};
