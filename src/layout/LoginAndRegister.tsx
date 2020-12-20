import { Layout as AntdLayout, Col } from 'antd';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Sidebar, Image } from '../components/Sidebar/styles';

const Layout: React.FC = ({ children }) => {
  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <AntdLayout.Sider>
          <Sidebar>
            <Image />
          </Sidebar>
        </AntdLayout.Sider>
      </Col>
      <AntdLayout>
        <AntdLayout.Header style={{ paddingTop: '1rem' }}>
          <Header />
        </AntdLayout.Header>
        <AntdLayout.Content>{children}</AntdLayout.Content>
        {/* <AntdLayout.Footer>
          <Footer />
        </AntdLayout.Footer> */}
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
