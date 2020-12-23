import React from 'react';
import { Button, Form, Input, Modal, Row, Typography } from 'antd';
import theme from '../../theme/theme';
import ForgotPassword from '../../assets/forgot-passsword.svg';

const ForgotPasswordModal: React.FC = () => {
  return (
    <Modal
      width={800}
      visible
      bodyStyle={{ height: 400 }}
      footer={null}
      centered
      title={
        <Typography.Title level={3} style={theme.gradientText}>
          Recuperação de senha
        </Typography.Title>
      }
    >
      <Row
        justify="center"
        align="middle"
        style={{ width: '100%', height: '100%' }}
      >
        <Row
          align="middle"
          justify="space-around"
          style={{ width: '100%', height: '100%' }}
        >
          <img src={ForgotPassword} alt="forgot password" width="300" />
          <Form layout="vertical">
            <Form.Item
              label="Email"
              rules={[
                {
                  required: true,
                  type: 'email',
                },
              ]}
            >
              <Input size="large" style={{ width: 400 }} />
            </Form.Item>
            <Row justify="end">
              <Button>Recuperar</Button>
            </Row>
          </Form>
        </Row>
      </Row>
    </Modal>
  );
};

export default ForgotPasswordModal;
