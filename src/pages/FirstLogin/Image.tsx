import React, { ChangeEvent, useCallback, useState } from 'react';
import { Avatar, Button, Col, Form, Input, Row, Space, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  changeComponentAction,
  fetchImageAction,
} from '../../store/modules/application';
import theme from '../../theme/theme';
import { useDispatch } from 'react-redux';
import Address from './Address';

interface FormImage {
  image: string;
}

const Image: React.FC = () => {
  const dispatch = useDispatch();

  const [temporaryImage, setTemporaryImage] = useState('');

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTemporaryImage(event.target.value);
  }, []);

  const onFinish = useCallback(
    (values: FormImage) => {
      console.log(values.image);
      setTemporaryImage(values.image);
      dispatch(changeComponentAction(Address));
      if (values.image) dispatch(fetchImageAction(values.image));
    },
    [dispatch]
  );

  return (
    <Col span={24}>
      <Row justify="center" align="middle" style={{ minHeight: '80vh' }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Space direction="vertical" size="large">
            <Row justify="center" align="middle">
              <Avatar size={256} src={temporaryImage} icon={<UserOutlined />} />
            </Row>
            <Row>
              <Typography.Title level={3} style={theme.gradientText}>
                Você pode nos ajudar a te conhecer melhor, nos envie uma URL de
                uma foto sua.
              </Typography.Title>
            </Row>
            <Form.Item
              name="image"
              help="É totalmente opcional"
              label="URL"
              hasFeedback
              tooltip="Pode ser o link de uma imagem do Facebook, LinkedIn, Github ou de qualquer outro lugar."
            >
              <Input onChange={onChange} />
            </Form.Item>
            <Row justify="end">
              <Button htmlType="submit">Continuar</Button>
            </Row>
          </Space>
        </Form>
      </Row>
    </Col>
  );
};

export default Image;
