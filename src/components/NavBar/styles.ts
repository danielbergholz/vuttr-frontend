import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const Header = styled.div`
  animation: loadAnimation;
  animation-duration: 400ms;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 35px;
  }

  p {
    margin-right: 30px;
    font-size: 22px;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    p {
      display: none;
    }
  }
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
`;
