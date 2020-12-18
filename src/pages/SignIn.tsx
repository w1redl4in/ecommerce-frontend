import React, { useCallback, useState } from 'react';
import { Row, Form, Input, Col, Button, notification } from 'antd';
import Lottie from '../config/Lottie';
import LoginLottie from '../assets/login-lottie.json';
import { ecommerceApi } from '../services/api';

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = useCallback(async (values: any) => {
    setLoading((load) => true);
    setTimeout(async () => {
      try {
        const response = await ecommerceApi.post('/auth', {
          email: values.email,
          password: values.password,
        });
        console.log(response);
        setLoading((load) => !load);
        notification.success({
          message: 'Sucesso!',
          description: 'Você logou com sucesso.',
          placement: 'topLeft',
        });
      } catch (error) {
        console.log('error', error.data);
        setLoading((load) => !load);
        notification.error({
          message: 'Erro!',
          description: 'Dados inválidos.',
          placement: 'topLeft',
        });
      }
    }, 2000);
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
            <Button type="primary" htmlType="submit" loading={loading}>
              Sign In
            </Button>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default SignIn;
