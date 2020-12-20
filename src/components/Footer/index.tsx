import React from 'react';
import { Row, Col } from 'antd';
import { Container, Waves } from './styles';

const Footer: React.FC = () => {
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Container>
          <Waves />
        </Container>
      </Col>
    </Row>
  );
};

export default Footer;
