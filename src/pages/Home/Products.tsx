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
    <Row
      justify="center"
      align="middle"
      style={{ marginTop: '4rem', minHeight: '100vh' }}
    >
      <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
        <Row justify="center" style={{ textAlign: 'center' }}>
          <Typography.Title level={1} style={theme.gradientText}>
            Produtos que você pode encontrar por aqui
          </Typography.Title>
        </Row>
        <Row justify="center">
          <Col xxl={24} xl={24} lg={24} md={24} sm={24}>
            <List
              pagination={{
                pageSize: 3,
                style: {
                  display: 'flex',
                  justifyContent: 'center',
                },
              }}
              grid={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}
              style={{ paddingTop: '2rem' }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Row justify="center" align="middle">
                    <Card
                      bordered={false}
                      hoverable
                      style={{
                        width: 'auto',
                        padding: '1rem',
                      }}
                      cover={
                        <Row justify="center" align="middle">
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
                        style={{ textAlign: 'center' }}
                        title={
                          <Typography.Title ellipsis level={2}>
                            {item.title}
                          </Typography.Title>
                        }
                        description={
                          <Space direction="vertical">
                            <Typography.Text style={{ fontWeight: 200 }}>
                              {item.description}
                            </Typography.Text>
                            <Typography.Text style={{ fontWeight: 200 }}>
                              {item.price}
                            </Typography.Text>
                          </Space>
                        }
                      />
                    </Card>
                  </Row>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>
      <Divider />
    </Row>
  );
};

export default Products;
