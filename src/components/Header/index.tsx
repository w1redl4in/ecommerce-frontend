import React from 'react';
import { Row, Button, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import theme from '../../theme/theme';
import EcommerceLogo from '../Logo';

const Header: React.FC = () => {
  return (
    <Row justify="end" align="middle" style={{ height: '100%' }}>
      <Row
        justify="space-between"
        align="middle"
        style={{ width: '100%', height: '100%' }}
      >
        <Row align="middle">
          <EcommerceLogo />
        </Row>

        <Space size="large">
          <Link to="/">
            <Typography.Link strong>Produtos</Typography.Link>
          </Link>
          <Link to="/login">
            <Button size="large">Log In</Button>
          </Link>
          <Link to="/register">
            <Button
              type="primary"
              size="large"
              style={theme.backgroundGradient}
            >
              Register
            </Button>
          </Link>
        </Space>
      </Row>
    </Row>
  );
};

export default Header;
