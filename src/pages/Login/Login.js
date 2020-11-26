import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import './Login.scss'
const Login = () => {
  return (
    <div className="login-container">
      <Row justify="center" align="middle">
        <Col span={16} className="login-container-col">
          <Row>
            <Col  xs={24} md={12}>
              <UserOutlined className="usr-icon"/>
              <LoginForm className="login-form"/>
            </Col>
            <Col  xs={0} md={12} className="login-image-col">
              <div className="login-image"/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
//1px 17px 16px 1px #000
