import React from 'react';
import { Row, Button, Typography, Space } from 'antd';
import Theme from '../../theme/theme';

const Header: React.FC = () => {
  return (
    <Row justify="end" align="middle" style={{ height: '100%' }}>
      <Row
        justify="space-between"
        align="middle"
        style={{ width: '100%', height: '100%' }}
      >
        <Row align="middle">
          <Typography.Title level={3} style={{ color: Theme.colors.secondary }}>
            Ecommerce
          </Typography.Title>
        </Row>

        <Space size="large">
          <Typography.Link strong>Produtos</Typography.Link>
          <Button size="large">Log In</Button>
          <Button type="primary" size="large">
            Sign Up
          </Button>
        </Space>
      </Row>
    </Row>
  );
};

export default Header;
