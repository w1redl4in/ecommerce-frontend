import React from 'react';
import ReactLottie from 'react-lottie';

// export default function Lottie(
//   animationData: any,
//   loop: boolean,
//   autoplay: boolean
// ) {
//   const defaultOptions = {
//     loop,
//     autoplay,
//     animationData,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice',
//     },
//   };

//   return <ReactLottie options={defaultOptions} height={400} width={400} />;
// }

interface LottieProps {
  loop: boolean;
  autoplay: boolean;
  animationData: any;
  width: number | string;
  height: number | string;
  isClickToPauseDisabled: boolean;
}

const Lottie: React.FC<LottieProps> = ({
  loop,
  autoplay,
  animationData,
  height,
  width,
  isClickToPauseDisabled,
}) => {
  const defaultOptions = {
    loop,
    autoplay,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <ReactLottie
      options={defaultOptions}
      height={height}
      width={width}
      isClickToPauseDisabled={isClickToPauseDisabled}
    />
  );
};

export default Lottie;
