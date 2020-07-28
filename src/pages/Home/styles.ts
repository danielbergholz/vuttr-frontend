import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 400ms;
`;

export const Section = styled.section`
  padding-top: 80px;
  padding-bottom: 100px;

  h1 {
    margin-top: 60px;
    font-size: 36px;
  }

  h2 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 600;
  }

  @media (max-width: 800px) {
    padding-top: 10px;

    h1 {
      margin-top: 50px;
      font-size: 28px;
    }

    h2 {
      font-size: 24px;
    }
  }
`;

export const Background = styled.div`
  background-color: #170c3a;
`;

export const Presentation = styled.div`
  width: 80vw;
  margin: 0 auto;
  color: #fff;
  padding-top: 60px;
  padding-bottom: 60px;

  p {
    padding-top: 40px;
    color: #fff;
    font-size: 26px;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 30px;
    font-weight: 600;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 24px;
    }

    p {
      padding-top: 40px;
      color: #fff;
      font-size: 22px;
    }
  }
`;

export const Try = styled.div`
  width: 70vw;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;

  img {
    width: 260px;
  }

  p {
    font-size: 26px;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    img {
      width: 200px;
    }

    p {
      padding-top: 30px;
      font-size: 22px;
    }
  }
`;

export const SideText = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 20px;
  }

  button {
    width: 174px;
    margin: 0 auto;
  }

  @media (max-width: 800px) {
    text-align: center;
    margin-left: 0;
    width: 80vw;
  }
`;

export const Author = styled.div`
  text-align: center;
  background-color: #170c3a;
  padding-top: 3px;
  padding-bottom: 3px;

  p {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }

  @media (max-width: 800px) {
    p {
      font-size: 16px;
    }
  }
`;
