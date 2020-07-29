import styled from 'styled-components';

interface BannerProps {
  display: number;
  type: 'success' | 'warning' | 'info' | 'error';
}

const mapTypeToColor = {
  success: '#12DB89',
  warning: '#FFBB43',
  error: '#F95E5A',
  info: '#B1ADB9',
};

export const Container = styled.div<BannerProps>`
  position: fixed;
  z-index: 999;
  padding: 15px;
  border-radius: 5px;
  right: ${(props): string => (props.display === 1 ? '120px' : '-500px')};
  top: 90px;
  background-color: ${(props): string => mapTypeToColor[props.type]};
  transition: right 300ms ease-in-out;

  @media (max-width: 600px) {
    right: ${(props): string => (props.display === 1 ? '30px' : '-300px')};
    width: 260px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h1,
  p {
    color: #fff;
  }

  h1 {
    font-size: 24px;
  }

  p {
    padding-top: 10px;
    font-size: 18px;
  }

  img {
    padding-top: 3px;
    width: 25px;
  }

  img#close {
    width: 15px;
    cursor: pointer;
  }

  button {
    background: none;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 22px;
    }

    p {
      padding-top: 10px;
      font-size: 16px;
    }
  }
`;

export const Text = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;
