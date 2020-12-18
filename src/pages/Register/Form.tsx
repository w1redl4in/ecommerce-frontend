import React, { useState, useCallback } from 'react';
import { Form, Row, notification, Input, Button, Typography } from 'antd';
import { ecommerceApi } from '../../services/api';
import Lottie from '../../config/Lottie';
import ShopLottie from '../../assets/login-lottie.json';
import Theme from '../../theme/theme';

const RegisterForm: React.FC = () => {
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
    <Form layout="vertical" onFinish={onFinish}>
      <Row justify="center" align="middle">
        <Typography.Title
          level={2}
          style={{ color: Theme.colors.primary, paddingTop: '1.5rem' }}
        >
          Register
        </Typography.Title>
        <Lottie
          animationData={ShopLottie}
          autoplay
          loop
          height={200}
          width={200}
          isClickToPauseDisabled
        />
      </Row>
      <Form.Item
        label="Nome"
        name="name"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Campo Nome é obrigatório',
            min: 2,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="E-mail"
        name="email"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Campo E-mail é obrigatório',
            type: 'email',
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
            message: 'Campo Senha é obrigatório',
            min: 6,
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
  );
};

export default RegisterForm;
