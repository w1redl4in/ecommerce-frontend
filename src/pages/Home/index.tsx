import React, { useEffect } from 'react';
import { Col } from 'antd';
import Video from './Video';
import Products from './Products';
import Marketing from './Marketing';
import Business from './Business';
import Timeline from './Timeline';
import ScrollToTop from 'react-scroll-to-top';
import theme from '../../theme/theme';
import './scroll.css';
import { useDispatch } from 'react-redux';
import { fetchUserDataAction } from '../../store/modules/user';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDataAction());
  }, [dispatch]);

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
