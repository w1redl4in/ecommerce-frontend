import React from 'react';
import { Row, Col } from 'antd';
import LogInForm from './Form';

const LogIn: React.FC = () => {
  return (
    <Row justify="center" align="middle" style={{ height: '100%' }}>
      <Col span={8}>
        <LogInForm />
      </Col>
    </Row>
  );
};

export default LogIn;
