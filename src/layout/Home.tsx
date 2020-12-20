import React from 'react';
import { Layout } from 'antd';

import Navbar from '../components/Navbar';
import FooterS from '../components/Footer';

import Home from '../pages/Home';

const { Header, Content, Footer } = Layout;

const HomeLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ padding: '1rem' }}>
        <Navbar />
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer style={{ padding: 0 }}>
        <FooterS />
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
