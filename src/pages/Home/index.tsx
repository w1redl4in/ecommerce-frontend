import React from 'react';
import { Col } from 'antd';
import Carousel from './Carousel';
import Products from './Products';

const Home: React.FC = () => {
  return (
    <Col span={24}>
      <Carousel />
      <Products />
    </Col>
  );
};

export default Home;
