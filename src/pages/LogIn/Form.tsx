import React, { useCallback } from 'react';
import { Form, Row, Input, Button, Typography } from 'antd';
import Lottie from '../../config/Lottie';
import ShopLottie from '../../assets/login-lottie.json';
import Theme from '../../theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginAction } from '../../store/modules/auth';
import { AppState } from '../../store/rootReducer';
import theme from '../../theme/theme';
import { openForgotPasswordModal } from '../../store/modules/forgot-password';

type Login = {
  email: string;
  password: string;
};

const LogInForm: React.FC = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state: AppState) => state.auth);

  const onFinish = useCallback(
    async (values: Login) => {
      dispatch(fetchLoginAction(values));
    },
    [dispatch]
  );

  const handleForgotPasswordWorkFlow = useCallback(() => {
    dispatch(openForgotPasswordModal());
  }, [dispatch]);

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Row justify="center" align="middle">
        <Typography.Title
          level={2}
          style={{ color: Theme.colors.primary, paddingTop: '1.5rem' }}
        >
          Log In
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
      <Row justify="space-between" align="middle">
        <Row
          style={{ cursor: 'pointer' }}
          onClick={handleForgotPasswordWorkFlow}
        >
          <Typography.Text style={theme.gradientText} underline>
            Esqueceu sua senha?
          </Typography.Text>
        </Row>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Sign In
        </Button>
      </Row>
    </Form>
  );
};

export default LogInForm;
