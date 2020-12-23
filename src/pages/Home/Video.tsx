import React from 'react';
import { Container, Video, VideoBg, VideoContent } from './styles';
import HomeVideo from '../../videos/home.mp4';
import { Typography } from 'antd';

const Carousel: React.FC = () => {
  return (
    <Container>
      <VideoBg>
        <Video autoPlay loop muted src={HomeVideo} />
      </VideoBg>
      <VideoContent>
        <Typography.Title level={1} style={{ color: 'white' }}>
          Compre de qualquer lugar <br />
          receba em casa
        </Typography.Title>
      </VideoContent>
    </Container>
  );
};

export default Carousel;
