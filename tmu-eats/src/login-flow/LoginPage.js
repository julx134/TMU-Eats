import React, { useEffect } from "react";
import { Row, Col } from "antd";
import Graphic from './components/Graphic'
import "../App.css";


const LoginPage = () => {

  return (
    <div className="home">
      <Row
        style={{
          marginTop: "10vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          zIndex: 3,
          marginBottom: "20vh",
        }}
      >
        <Col xs={24} md={12}>
          <Graphic />
        </Col>
        <Col xs={24} md={12}>
          <Row>
            <Col xs={0} md={2}></Col>
            <Col xs={24} md={20}>
                <Graphic/>
            </Col>
            <Col xs={0} md={2}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;