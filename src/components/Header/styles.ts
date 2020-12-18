import { ShoppingFilled } from '@ant-design/icons';
import styled from 'styled-components';

export const EcommerceLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(to bottom, rgb(255, 81, 47), rgb(221, 36, 118));
  color: white;

  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const ShopIcon = styled(ShoppingFilled)`
  transform: rotate(20deg);
  color: white;
`;
