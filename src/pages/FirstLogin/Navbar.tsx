import React from 'react';
import { Col, Row } from 'antd';
import Logo from '../../assets/LOGO.svg';

const FirstLoginNavbar: React.FC = () => {
  return (
    <Col span={24} style={{ padding: '20px 0' }}>
      <Row align="middle" justify="center">
        <img src={Logo} alt="logo" />
      </Row>
    </Col>
  );
};

export default FirstLoginNavbar;
