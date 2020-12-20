import styled from 'styled-components';

import WavesAsset from '../../assets/waves.svg';
import FooterImg from '../../assets/footer.svg';

export const Container = styled.div`
  display: flex;
`;

export const Waves = styled.img.attrs({
  src: WavesAsset,
})`
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const Brincadeira = styled.img.attrs({
  src: FooterImg,
})`
  position: absolute;
  z-index: 3;
  width: 300px;
  right: 40px;
`;
