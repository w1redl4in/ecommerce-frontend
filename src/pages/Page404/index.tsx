import React from 'react';
import Lottie from '../../config/Lottie';
import notFoundLottie from '../../assets/lottie-page-404.json';
import { Row } from 'antd';
import { Body } from './styles';

const Page404: React.FC = () => {
  return (
    <Body>
      <Lottie
        animationData={notFoundLottie}
        autoplay
        loop
        height={800}
        width={800}
        isClickToPauseDisabled
      />
    </Body>
  );
};

export default Page404;
