import React from 'react';
import { Layout } from 'antd';

const FirstLoginLayout: React.FC = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default FirstLoginLayout;
