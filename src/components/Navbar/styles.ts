import { Row } from 'antd';
import styled from 'styled-components';

export const EnhancedRow = styled(Row)`
  @media screen and (max-width: 768px) {
    .items,
    .buttons {
      display: none;
    }
  }
`;

export const MobileIcon = styled(Row)`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  height: 100vh;
  background: red;
  width: 100%;
  z-index: 9;

  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
