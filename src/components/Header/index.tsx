import React from 'react';
import { Row, Button, Typography, Space, Divider } from 'antd';
import { ShoppingFilled } from '@ant-design/icons';
import Theme from '../../theme/theme';
import * as Styles from './styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Row justify="end" align="middle" style={{ height: '100%' }}>
      <Row
        justify="space-between"
        align="middle"
        style={{ width: '100%', height: '100%' }}
      >
        <Row align="middle">
          <Styles.EcommerceLogo>
            <ShoppingFilled style={{ fontSize: '2rem' }} />
          </Styles.EcommerceLogo>
          <Divider type="vertical" />
          <Typography.Title
            level={1}
            style={{ color: Theme.colors.primary, fontFamily: 'Cinzel' }}
          >
            Ecommerce
          </Typography.Title>
        </Row>

        <Space size="large">
          <Typography.Link strong>Produtos</Typography.Link>
          <Link to="/login">
            <Button size="large">Log In</Button>
          </Link>
          <Link to="/register">
            <Button type="primary" size="large">
              Register
            </Button>
          </Link>
        </Space>
      </Row>
    </Row>
  );
};

export default Header;
