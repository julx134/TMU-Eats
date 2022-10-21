import React, { useState, useEffect } from "react";
import { Card, Form, Button, Input, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";

const LoginModule = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "227140293213-9cljm3o56aknvjk0ucmnocm78inn20pl.apps.googleusercontent.com",
      callback: handleResponse,
    });

    google.accounts.id.renderButton(document.getElementById("loginButton"), {
      theme: "filled_blue",
      size: "large",
    });
  }, []);

  function handleResponse(response) {
    const user = jwt_decode(response.credential);
    console.log(user.email_verified);
    if (user.email_verified === true) {
      navigate("/home");
    }
  }

  return (
    <Card
      title="Login with your account"
      className="elevated rounded"
      bodyStyle={{ minHeight: "70vh" }}
      footer={null}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <center>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                  width: "100%",
                  height: "4vh",
                  backgroundColor: "#1a72ee",
                }}
              >
                <h4 style={{ color: "#FFFFFF" }}>Log in</h4>
              </Button>
            </center>

            <div style={{ marginTop: "1vh", marginBottom: "1vh" }}>
              <center>
                <h3>Or</h3>
              </center>
            </div>
            <center>
              <div id="loginButton"></div>
            </center>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
};

export default LoginModule;
