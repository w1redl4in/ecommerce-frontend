import React, { useCallback } from 'react';
import { Button, Form, Input, Modal, Row, Typography } from 'antd';
import theme from '../../theme/theme';
import ForgotPassword from '../../assets/forgot-passsword.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/rootReducer';
import {
  closeForgotPasswordModal,
  fetchForgotPasswordAction,
  IEmail,
} from '../../store/modules/forgot-password';

const ForgotPasswordModal: React.FC = () => {
  const dispatch = useDispatch();

  const { visible, isLoading } = useSelector(
    (state: AppState) => state.forgotPassword
  );

  const onFinish = useCallback(
    (values: IEmail) => {
      dispatch(fetchForgotPasswordAction(values));
    },
    [dispatch]
  );

  const handleCloseModal = useCallback(() => {
    dispatch(closeForgotPasswordModal());
  }, [dispatch]);

  return (
    <Modal
      width={800}
      visible={visible}
      bodyStyle={{ height: 400 }}
      footer={null}
      onCancel={handleCloseModal}
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
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="email"
              required
              hasFeedback
              tooltip={{
                title:
                  'E-mail utilizado na criação da conta no nosso Ecommerce',
              }}
              label="Email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'E-mail inválido',
                },
              ]}
            >
              <Input
                size="large"
                style={{ width: 400 }}
                placeholder="exemplo@exemplo.com"
              />
            </Form.Item>
            <Row justify="end">
              <Button htmlType="submit" loading={isLoading}>
                Recuperar
              </Button>
            </Row>
          </Form>
        </Row>
      </Row>
    </Modal>
  );
};

export default ForgotPasswordModal;
