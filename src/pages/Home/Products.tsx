/* eslint-disable react-hooks/exhaustive-deps */
import { List, Card, Col, Row, Typography, Space, Divider, Image } from 'antd';
import React from 'react';
import theme from '../../theme/theme';

const Products: React.FC = () => {
  const data = [
    {
      title: 'Anti Social Social Club',
      description: 'Camiseta Kkoch com estampa de logo',
      image:
        'https://cdn-images.farfetch-contents.com/15/44/80/26/15448026_27969804_1000.jpg',
      price: 'R$ 1.200,00',
    },
    {
      title: 'Off-White',
      description: 'Tênis com logo',
      image:
        'https://cdn-images.farfetch-contents.com/16/04/92/66/16049266_30204071_1000.jpg',
      price: 'R$ 1.200,00',
    },
    {
      title: 'Burberry',
      description: 'Gravata de seda xadrez',
      image:
        'https://cdn-images.farfetch-contents.com/14/03/27/57/14032757_18363697_1000.jpg',
      price: 'R$ 1.240,00',
    },
    {
      title: 'Tom Ford',
      description: 'Carteira de couro granulado',
      image:
        'https://cdn-images.farfetch-contents.com/16/04/97/71/16049771_30376192_1000.jpg',
      price: 'R$ 2.800,00',
    },
    {
      title: 'Off-White',
      description: 'Tênis com logo',
      image:
        'https://cdn-images.farfetch-contents.com/16/04/92/66/16049266_30204071_1000.jpg',
      price: 'R$ 1.200,00',
    },
    {
      title: 'Anti Social Social Club',
      description: 'Camiseta Kkoch com estampa de logo',
      image:
        'https://cdn-images.farfetch-contents.com/15/44/80/26/15448026_27969804_1000.jpg',
      price: 'R$ 1.200,00',
    },
    {
      title: 'Tom Ford',
      description: 'Carteira de couro granulado',
      image:
        'https://cdn-images.farfetch-contents.com/16/04/97/71/16049771_30376192_1000.jpg',
      price: 'R$ 2.800,00',
    },
    {
      title: 'Burberry',
      description: 'Gravata de seda xadrez',
      image:
        'https://cdn-images.farfetch-contents.com/14/03/27/57/14032757_18363697_1000.jpg',
      price: 'R$ 1.240,00',
    },
  ];

  return (
    <Row justify="center" align="middle" style={{ marginTop: '4rem' }}>
      <Typography.Title level={1} style={theme.gradientText}>
        Produtos que você encontra <br /> no nosso E-commerce
      </Typography.Title>

      <Col span={18}>
        <List
          pagination={{
            pageSize: 8,
          }}
          style={{ paddingTop: '2rem' }}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 4,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card
                hoverable
                style={{
                  width: '300px',
                  padding: '1rem',
                }}
                cover={
                  <Row justify="center">
                    <Image
                      width={150}
                      src={item.image}
                      preview={false}
                      placeholder
                    />
                  </Row>
                }
              >
                <Card.Meta
                  title={item.title}
                  description={
                    <Space direction="vertical">
                      <Typography.Text>{item.description}</Typography.Text>
                      <Typography.Text strong style={theme.gradientText}>
                        {item.price}
                      </Typography.Text>
                    </Space>
                  }
                />
              </Card>
            </List.Item>
          )}
        />
      </Col>
      <Divider />
    </Row>
  );
};

export default Products;
