import styled from 'styled-components';

interface ContainerProps {
  isModalOpen: number;
}

export const Container = styled.div<ContainerProps>`
  filter: blur(${(props): string => (props.isModalOpen === 0 ? '0px' : '5px')});
  opacity: ${(props): number => (props.isModalOpen === 0 ? 1 : 0.6)};
  animation: loadAnimation;
  animation-duration: 400ms;
  transition: opacity 200ms, filter 200ms;
  width: 80vw;
  margin: 0 auto;
`;

export const GoBack = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  p {
    margin-left: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  img {
    width: 25px;
  }
`;

export const ProfileSection = styled.div`
  margin-top: 100px;
  text-align: center;

  img {
    width: 80px;
  }

  h1 {
    margin-top: 8px;
    font-size: 32px;
  }

  @media (max-width: 600px) {
    margin-top: 60px;

    img {
      width: 60px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 80px;
  animation: loadAnimation;
  animation-duration: 400ms;
  text-align: center;

  button {
    width: 174px;
  }

  input {
    width: 700px;
    padding: 10px 15px;
    border-radius: 6px;
    font-size: 16px;
    background: #ebeaed 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 5px;
  }

  input:focus {
    background: #dedce1;
  }

  input[name='password'] {
    margin-top: 30px;
  }

  input::placeholder,
  br + input {
    margin-top: 6px;
  }

  button {
    margin: 15px 0;
  }

  @media (max-width: 950px) {
    input {
      width: 500px;
    }
  }

  @media (max-width: 700px) {
    margin-top: 40px;

    input {
      width: 288px;
    }
  }
`;

export const ButtonSection = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  max-width: 700px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  button {
    margin-bottom: 15px;
    width: 174px;
  }

  @media (max-width: 700px) {
    margin-top: 30px;
    flex-direction: column;
  }
`;

export const ModalContainer = styled.div<ContainerProps>`
  animation: loadAnimation;
  animation-duration: 200ms;
  display: ${(props): string => (props.isModalOpen === 0 ? 'none' : 'block')};
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 50%;
  width: 40vw;
  transform: translate(-50%, -50%);
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 1px 4px 3px #ccc;

  > button {
    display: grid;
    place-content: center;
    padding: 4px;
    border-radius: 2px;
    background-color: #4c4499;
    margin: 0 0 0 auto;
  }

  input {
    width: 100%;
    background-color: #ebeaed;
    border-radius: 5px;
    padding: 5px 8px;
    border: none;
    font-size: 18px;
  }

  h2 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 26px;
    font-weight: 600;
  }

  input + p {
    margin-top: 15px;
  }

  textarea + p {
    margin-top: 15px;
  }

  textarea {
    resize: none;
  }

  @media (max-width: 1100px) {
    width: 60vw;
  }

  @media (max-width: 800px) {
    width: 70vw;
  }

  @media (max-width: 600px) {
    width: 90vw;

    p,
    h2 {
      font-size: 22px;
    }

    input,
    textarea {
      font-size: 16px;
    }
  }
`;

export const ModalButton = styled.div`
  padding-top: 40px;
  text-align: center;
`;
