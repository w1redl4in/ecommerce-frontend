import React from 'react';
import { Col } from 'antd';
import Video from './Video';
import Products from './Products';
import Marketing from './Marketing';
import Business from './Business';
import Trends from './Trends';
import EasyComeEasyGo from './EasyComeEasyGo';

const Home: React.FC = () => {
  return (
    <Col span={24}>
      <Video />
      <Marketing />
      <Products />
      <Trends />
      <EasyComeEasyGo />
      <Business />
    </Col>
  );
};

export default Home;
