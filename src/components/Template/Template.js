import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
const Template = (props) => {
  const loading = useSelector((state) => state.isLoading);
  return (
    <Fragment>
      {loading && <Loading />}
      {props.children}
    </Fragment>
  );
};

export default Template;
