import React, { useState } from "react";
import { Card, Form, Select, Button, Input, message, Space } from "antd";
const NORMAL_STATE = "normal";
const CHECK_RESPONSE_STATE = "check";
const CONTACT_STATE = "contact";
const WAITING_STATE = "wait";

const LoginModule = () => {
  const [chatState, setChatState] = useState(NORMAL_STATE);
  const [conversationDetails, setConversationDetails] = useState({});
  const [queries, setQueries] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [convo, setConvo] = useState([]);
  const [value, setValue] = useState("");

    const handleLogin = async () => {
        console.log('pressed');
    }

    return (
      <Card
        title="Hello, ask me a question!"
        className="elevated rounded"
        bodyStyle={{ minHeight: "70vh" }}
        footer={null}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            onFinish={handleLogin}
            onFinishFailed={() => {}}
            autoComplete="off"
          >
            <div style = {{display: "flex", flexDirection: "column", paddingTop: "10vh"}}>
                <Form.Item
                label="Student ID"
                name="student_id"
                rules={[{ required: true, message: "Please input your student id" }]}
                >
                <Input />
                </Form.Item>
                <Form.Item
                label="First Name"
                name="firstname"
                rules={[{ required: true, message: "Please input your first name" }]}
                >
                <Input />
                </Form.Item>
                <Form.Item
                label="Last Name"
                name="lastname"
                rules={[{ required: true, message: "Please input your last name" }]}
                >
                <Input />
                </Form.Item>
                <Form.Item
                label="TMU Email"
                name="email"
                rules={[{ required: true, message: "Please input your official school email" }]}
                >
                <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 10, span: 24 }}>
                <Button type="primary" htmlType="submit" style={{borderRadius: "5px"}}>
                    Login
                </Button>
                </Form.Item>
            </div>
          </Form>
        </div>
      </Card>
    );
};

export default LoginModule;