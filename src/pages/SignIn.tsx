import React, { useCallback } from 'react';
import { Row, Form, Input, Col, Button } from 'antd';
import Lottie from '../config/Lottie';
import LoginLottie from '../assets/login-lottie.json';

const SignIn: React.FC = () => {
  const onFinish = useCallback((values: any) => {
    console.log(values);
  }, []);

  return (
    <Row justify="center" align="middle" style={{ height: '100%' }}>
      <Col span={8}>
        <Form layout="vertical" onFinish={onFinish}>
          <Row justify="center">
            <Lottie
              animationData={LoginLottie}
              autoplay
              loop
              height={200}
              width={200}
              isClickToPauseDisabled
            />
          </Row>
          <Form.Item
            label="E-mail"
            name="email"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Campo e-mail é obrigatório',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Senha"
            name="password"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Campo e-mail é obrigatório',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Row justify="end">
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default SignIn;
