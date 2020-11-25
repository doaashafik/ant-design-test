import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import LoginImage from "../../assets/images/login.png";
import LoginImageAside from "../../assets/images/login-aside.jpg";

const Login = () => {
  return (
    <div className="login-container">
      <Row>
        <Col span={20}>
          <Row>
            <Col className="login-form" span={12}>
              <UserOutlined
                style={{
                  fontSize: "50px",
                  margin: "50px auto",
                  display: "block",
                }}
              />
              <LoginForm />
            </Col>
            <Col className="login-image" span={12}>
              <img src={LoginImageAside} alt="login" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
//1px 17px 16px 1px #000
