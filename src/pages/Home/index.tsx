import React from 'react';
import { Col } from 'antd';
import Video from './Video';
import Products from './Products';
import Marketing from './Marketing';
import Business from './Business';

const Home: React.FC = () => {
  return (
    <Col span={24}>
      <Video />
      <Marketing />
      <Products />
      <Business />
    </Col>
  );
};

export default Home;
