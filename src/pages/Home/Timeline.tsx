import React from 'react';
import { Row, Col, Timeline as AntdTimeline, Typography, Divider } from 'antd';
import theme from '../../theme/theme';
import Question from '../../assets/question.svg';

const Timeline: React.FC = () => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={10}>
        <Row justify="center" align="middle">
          <AntdTimeline
            pending={
              <Typography.Title level={4} style={theme.gradientText}>
                Está esperando o que?
              </Typography.Title>
            }
          >
            <AntdTimeline.Item>
              <Typography.Text style={theme.gradientText}>
                do conforto da sua casa
              </Typography.Text>
            </AntdTimeline.Item>
            <AntdTimeline.Item>
              <Typography.Text style={theme.gradientText}>
                fácil acesso
              </Typography.Text>
            </AntdTimeline.Item>
            <AntdTimeline.Item>
              <Typography.Text style={theme.gradientText}>
                interface user-friendly
              </Typography.Text>
            </AntdTimeline.Item>
            <AntdTimeline.Item>
              <Typography.Text style={theme.gradientText}>
                diversos produtos
              </Typography.Text>
            </AntdTimeline.Item>
            <AntdTimeline.Item>
              <Typography.Text style={theme.gradientText}>
                descontos todos os dias
              </Typography.Text>
            </AntdTimeline.Item>
          </AntdTimeline>
        </Row>
      </Col>
      <Col span={10}>
        <Row justify="center" align="middle">
          <img src={Question} alt="question" width="80%" />
        </Row>
      </Col>
      <Divider />
    </Row>
  );
};

export default Timeline;
