import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import Shop from '../../assets/undraw-buy.svg';
import Shop2 from '../../assets/undraw-cart.svg';
import Shop3 from '../../assets/undraw-smart-buy.svg';

const Marketing: React.FC = () => {
  return (
    <Row justify="center" align="middle" style={{ paddingTop: '4rem' }}>
      <Col span={16}>
        <Row align="middle" justify="space-around">
          <Col>
            <Row justify="center">
              <img src={Shop} alt="" width="200px" />
            </Row>
            <Row justify="center" style={{ paddingTop: '1rem' }}>
              <Typography.Paragraph style={{ color: '#929191' }}>
                Um estoque completo com diversos produtos.
              </Typography.Paragraph>
            </Row>
          </Col>
          <Col>
            <Row justify="center">
              <img src={Shop2} alt="" width="200px" />
            </Row>
            <Row justify="center" style={{ paddingTop: '1rem' }}>
              <Typography.Paragraph
                style={{ color: '#929191', textAlign: 'center' }}
              >
                O importante está nos detalhes, <br /> tenha conhecimento sobre
                cada passo de sua compra.
              </Typography.Paragraph>
            </Row>
          </Col>
          <Col>
            <Row justify="center">
              <img src={Shop3} alt="" width="200px" />
            </Row>
            <Row justify="center" style={{ paddingTop: '1rem' }}>
              <Typography.Paragraph style={{ color: '#929191' }}>
                Receba em sua casa sem burocracia.
              </Typography.Paragraph>
            </Row>
          </Col>
        </Row>
      </Col>
      <Divider />
    </Row>
  );
};

export default Marketing;
