import React, { useEffect, useState } from 'react';
import { Affix, Col, Button } from 'antd';
import Video from './Video';
import Products from './Products';
import Marketing from './Marketing';
import Business from './Business';
import Trends from './Trends';
import EasyComeEasyGo from './EasyComeEasyGo';
import Timeline from './Timeline';
import ScrollToTop from 'react-scroll-to-top';
import theme from '../../theme/theme';
import './scroll.css';

const Home: React.FC = () => {
  return (
    <Col span={24}>
      <Video />
      <Marketing />
      <Products />
      {/* <Trends /> */}
      {/* <EasyComeEasyGo /> */}
      <Timeline />
      <Business />
      <ScrollToTop smooth style={theme.backgroundGradient} color="white" />
    </Col>
  );
};

export default Home;
