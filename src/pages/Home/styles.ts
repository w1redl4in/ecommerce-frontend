import styled from 'styled-components';

export const Container = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
  margin-top: 2rem;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        180deg,
        rgba(255, 81, 47, 0.1) 0%,
        rgba(221, 36, 118, 0.2) 100%
      ),
      linear-gradient(
        180deg,
        rgba(255, 81, 47, 0.1) 0%,
        rgba(221, 36, 118, 0.2) 100%
      );
    z-index: 2;
  }

  @media screen and (max-width: 680px) {
    align-items: center;
    padding: 0 5rem 0 0;
    justify-content: flex-start;
  }
`;

export const VideoBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const VideoContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 2px 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
