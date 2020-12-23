import React from 'react';
import { Col } from 'antd';
import Video from './Video';
import Products from './Products';
import Marketing from './Marketing';
import Business from './Business';
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
      <Timeline />
      <Business />
      <ScrollToTop smooth style={theme.backgroundGradient} color="white" />
    </Col>
  );
};

export default Home;
