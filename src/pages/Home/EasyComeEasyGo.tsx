import React from 'react';
import { Col, Divider, Row, Typography, Space } from 'antd';
import theme from '../../theme/theme';
import Lottie from '../../config/Lottie';
import EasyComeEasyGoLottie from '../../assets/easycomeasygo.json';

const EasyComeEasyGo: React.FC = () => {
  return (
    <Row style={{ minHeight: '100vh' }}>
      <Col span={24}>
        <Row justify="center" align="middle" style={{ height: '100%' }}>
          <Col span={24}>
            <Row justify="center">
              <Space direction="vertical">
                <Typography.Title level={1} style={theme.gradientText}>
                  Easy come, easy go!
                </Typography.Title>
                <Row justify="center">
                  <Typography.Text style={{ opacity: '0.6' }}>
                    Rápido de comprar e fácil de receber.
                  </Typography.Text>
                </Row>
              </Space>
            </Row>
            <Lottie
              animationData={EasyComeEasyGoLottie}
              autoplay
              height={600}
              width={900}
              isClickToPauseDisabled
              loop
            />
          </Col>
        </Row>
      </Col>
      <Divider />
    </Row>
  );
};

export default EasyComeEasyGo;
