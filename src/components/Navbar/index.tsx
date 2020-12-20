import { Badge, Button, Row, Space, Typography } from 'antd';
import React from 'react';
import useToken from '../../hooks/auth';
import BuyLogo from '../../assets/buy.svg';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';

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
          <Typography.Link
            style={{
              background:
                '-webkit-linear-gradient(rgb(255, 81, 47), rgb(221, 36, 118))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Home
          </Typography.Link>
          <Typography.Link
            style={{
              background:
                '-webkit-linear-gradient(rgb(255, 81, 47), rgb(221, 36, 118))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Produtos
          </Typography.Link>
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
                <Button type="primary">Sign Up</Button>
              </Link>
            </>
          ) : (
            <>
              <div style={{ cursor: 'pointer' }}>
                <Badge count={5} showZero offset={[1, -7]}>
                  <Typography.Text>Carrinho</Typography.Text>
                </Badge>
              </div>
              <Avatar />
            </>
          )}
        </Space>
      </Row>
    </Row>
  );
};

export default Navbar;
