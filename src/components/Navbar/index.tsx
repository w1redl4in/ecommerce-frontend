import { Badge, Button, Row, Space, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <Row align="middle" justify="space-around">
      <Row>Logo</Row>
      <Row>
        <Space size="large">
          <Typography.Link>Criar produto</Typography.Link>
          <Typography.Link>Produtos</Typography.Link>
        </Space>
      </Row>
      <Row align="middle">
        <Space size="large">
          <Avatar
            src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
            shape="circle"
          />

          <div style={{ cursor: 'pointer' }}>
            <Badge count={5} showZero offset={[1, -7]}>
              <Typography.Text>Carrinho</Typography.Text>
            </Badge>
          </div>

          <Button>Log In</Button>
          <Button type="primary">Sign Up</Button>
        </Space>
      </Row>
    </Row>
  );
};

export default Navbar;
