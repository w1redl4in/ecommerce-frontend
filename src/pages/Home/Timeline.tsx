import React from 'react';
import {
  Row,
  Col,
  Timeline as AntdTimeline,
  Typography,
  Divider,
  Space,
} from 'antd';
import theme from '../../theme/theme';
import FastTravel from '../../assets/fast-travel.json';
import Lottie from '../../config/Lottie';

const Timeline: React.FC = () => {
  return (
    <Row style={{ minHeight: '100vh' }}>
      <Col span={24}>
        <Row align="top" justify="center">
          <Typography.Title style={theme.gradientText}>
            Entrega rápida e segura !
          </Typography.Title>
        </Row>
        <Row
          align="middle"
          justify="start"
          style={{ minHeight: '80vh', paddingLeft: '10%' }}
        >
          <Col span={24}>
            <Row justify="space-around" align="middle">
              <Row>
                <AntdTimeline>
                  <AntdTimeline.Item color="gray">
                    <Typography.Text style={theme.gradientText}>
                      Postado
                    </Typography.Text>
                  </AntdTimeline.Item>
                  <AntdTimeline.Item color="gray">
                    <Typography.Text style={theme.gradientText}>
                      Saiu pra entrega
                    </Typography.Text>
                  </AntdTimeline.Item>
                  <AntdTimeline.Item color="green">
                    <Typography.Text style={theme.gradientText}>
                      Entregue
                    </Typography.Text>
                  </AntdTimeline.Item>
                </AntdTimeline>
              </Row>
              <Row>
                <Lottie
                  animationData={FastTravel}
                  autoplay
                  loop
                  isClickToPauseDisabled
                  height={600}
                  width={600}
                />
              </Row>
            </Row>
          </Col>
        </Row>
      </Col>
      <Divider />
    </Row>
  );
};

export default Timeline;
