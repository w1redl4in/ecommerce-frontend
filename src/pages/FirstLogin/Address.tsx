import React, { useCallback, useEffect } from 'react';
import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import ReactInputMask from 'react-input-mask';
import theme from '../../theme/theme';
import { useHistory } from 'react-router-dom';

const Address: React.FC = () => {
  const history = useHistory();

  const handleHistory = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Row justify="center" align="middle" style={{ minHeight: '80vh' }}>
      <Col span={12}>
        <Card>
          <Row justify="center">
            <Typography.Title level={3} style={theme.gradientText}>
              Cadastro de endereço
            </Typography.Title>
          </Row>
          <Form layout="vertical">
            <Form.Item
              label="CEP"
              name="CEP"
              hasFeedback
              style={{ width: '200px' }}
              rules={[
                {
                  required: true,
                  min: 8,
                },
              ]}
            >
              <ReactInputMask mask="99999-999" maskChar={null} />
            </Form.Item>

            <Form.Item label="test" name="test" hasFeedback>
              <Input />
            </Form.Item>

            <Form.Item label="test" name="test" hasFeedback>
              <Input />
            </Form.Item>
            <Form.Item label="test" name="test" hasFeedback>
              <Input />
            </Form.Item>
            <Form.Item label="test" name="test" hasFeedback>
              <Input />
            </Form.Item>
            <Row justify="end">
              <Button style={theme.backgroundGradient} onClick={handleHistory}>
                <Typography.Text style={{ color: 'white' }}>
                  Ainda não está pronto, clique aqui para voltar para a Home
                </Typography.Text>
              </Button>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Address;
