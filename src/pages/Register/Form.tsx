import React, { useCallback } from 'react';
import { Form, Row, Input, Button, Typography } from 'antd';
import Lottie from '../../config/Lottie';
import ShopLottie from '../../assets/login-lottie.json';
import Theme from '../../theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegisterAction } from '../../store/modules/auth';
import { AppState } from '../../store/rootReducer';

type IRegister = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state: AppState) => state.auth);

  const onFinish = useCallback(
    async (values: IRegister) => {
      dispatch(fetchRegisterAction(values));
    },
    [dispatch]
  );

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
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Register
        </Button>
      </Row>
    </Form>
  );
};

export default RegisterForm;
