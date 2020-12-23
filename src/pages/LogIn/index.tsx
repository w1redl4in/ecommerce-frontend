import React from 'react';
import { Row, Col } from 'antd';
import LogInForm from './Form';
import ForgotPasswordModal from './ForgotPasswordModal';

const LogIn: React.FC = () => {
  return (
    <Row justify="center" align="middle" style={{ height: '100%' }}>
      <Col span={8}>
        <LogInForm />
      </Col>
      <ForgotPasswordModal />
    </Row>
  );
};

export default LogIn;
