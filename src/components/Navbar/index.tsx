import { Badge, Button, Row, Space, Typography } from 'antd';
import React from 'react';
import useToken from '../../hooks/auth';
import BuyLogo from '../../assets/buy.svg';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import theme from '../../theme/theme';

const Navbar: React.FC = () => {
  const token = useToken();

  return (
    <Row align="middle" justify="space-between" style={{ padding: '0 2rem' }}>
      <Row align="middle">
        <Space size="large">
          <img src={BuyLogo} alt="logo" width="50px" />
          <Typography.Link>E-commerce</Typography.Link>
        </Space>
      </Row>

      <Row
        justify="center"
        style={{
          fontSize: '1.2rem',
        }}
      >
        <Space size="large">
          <Typography.Link style={theme.gradientText}>Home</Typography.Link>
          <Typography.Link style={theme.gradientText}>Produtos</Typography.Link>
        </Space>
      </Row>
      <Row align="middle">
        <Space size="large">
          {!token ? (
            <>
              <Link to="/login">
                <Button>Log In</Button>
              </Link>
              <Link to="/register">
                <Button type="primary" style={theme.backgroundGradient}>
                  Sign Up
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/cart">
                <Badge count={0} showZero offset={[1, -7]}>
                  <Typography.Text>Carrinho</Typography.Text>
                </Badge>
              </Link>
              <Avatar />
            </>
          )}
        </Space>
      </Row>
    </Row>
  );
};

export default Navbar;
