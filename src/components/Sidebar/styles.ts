import styled from 'styled-components';
import Shop from '../../assets/shop.svg';

export const Sidebar = styled.div`
  height: 100vh;
  width: 30vw;

  background: linear-gradient(to bottom, rgb(255, 81, 47), rgb(221, 36, 118));

  position: relative;

  display: flex;
  align-items: center;
`;

export const Image = styled.img.attrs({
  src: Shop,
})`
  position: absolute;
  width: 500px;
  right: -15rem;
`;
