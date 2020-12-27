import React from 'react';
import { Layout } from 'antd';
import FirstLoginNavbar from '../pages/FirstLogin/Navbar';
import { useSelector } from 'react-redux';
import { AppState } from '../store/rootReducer';
import FirstLoginFooter from '../pages/FirstLogin/Footer';

const FirstLoginLayout: React.FC = () => {
  const { Header, Content, Footer } = Layout;

  const { component: Component } = useSelector(
    (state: AppState) => state.application.firstLogin
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <FirstLoginNavbar />
      </Header>
      <Content>
        <Component />
      </Content>
      <Footer style={{ padding: 0 }}>
        <FirstLoginFooter />
      </Footer>
    </Layout>
  );
};

export default FirstLoginLayout;
