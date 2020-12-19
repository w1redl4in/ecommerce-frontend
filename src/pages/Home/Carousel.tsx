import React from 'react';
import { Carousel as AntdCarousel, Row, Col } from 'antd';

const Carousel: React.FC = () => {
  return (
    <Row justify="center" style={{ paddingTop: '2rem' }}>
      <Col span={12}>
        <AntdCarousel autoplay>
          <Row>
            <h3
              style={{
                height: '160px',
                color: '#fff',
                lineHeight: '160px',
                textAlign: 'center',
                background: '#364d79',
              }}
            >
              1
            </h3>
          </Row>
          <Row>
            <h3
              style={{
                height: '160px',
                color: '#fff',
                lineHeight: '160px',
                textAlign: 'center',
                background: '#364d79',
              }}
            >
              2
            </h3>
          </Row>
          <Row>
            <h3
              style={{
                height: '160px',
                color: '#fff',
                lineHeight: '160px',
                textAlign: 'center',
                background: '#364d79',
              }}
            >
              3
            </h3>
          </Row>
          <Row>
            <h3
              style={{
                height: '160px',
                color: '#fff',
                lineHeight: '160px',
                textAlign: 'center',
                background: '#364d79',
              }}
            >
              4
            </h3>
          </Row>
        </AntdCarousel>
      </Col>
    </Row>
  );
};

export default Carousel;
