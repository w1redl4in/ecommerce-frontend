import { Badge, Button, Dropdown, Row, Space, Typography } from 'antd';
import React from 'react';
import useToken from '../../hooks/auth';
import BuyLogo from '../../assets/buy.svg';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import DropdownMenu from './Dropdown';
import theme from '../../theme/theme';
import { DownOutlined } from '@ant-design/icons';

const Navbar: React.FC = () => {
  const token = useToken();

  return (
    <Row
      align="middle"
      justify="space-between"
      className="container"
      style={{ padding: '0 2rem' }}
    >
      <Row align="middle">
        <Space size="large">
          <img src={BuyLogo} alt="logo" width="50px" />
          <Typography.Link>Ecommerce</Typography.Link>
        </Space>
      </Row>
      <Row
        justify="center"
        style={{
          fontSize: '1.2rem',
        }}
        className="items"
      >
        <Space size="large">
          <Typography.Link style={theme.gradientText}>Home</Typography.Link>
          <Typography.Link style={theme.gradientText}>
            <Dropdown overlay={DropdownMenu}>
              <Link to="/products" component={Typography.Link}>
                Produtos{' '}
                <DownOutlined
                  style={(theme.gradientText, { fontSize: '0.9rem' })}
                />
              </Link>
            </Dropdown>
          </Typography.Link>
        </Space>
      </Row>

      <Row align="middle" className="buttons">
        <Space size="large">
          {!token ? (
            <>
              <Link to="/login">
                <Button size="large">Log In</Button>
              </Link>
              <Link to="/register">
                <Button
                  type="primary"
                  size="large"
                  style={theme.backgroundGradient}
                >
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
