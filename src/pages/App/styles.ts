import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface ContainerProps {
  isModalOpen: number;
}

interface PaginationProps {
  page: number;
  lastPage: number;
}

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

  input,
  textarea {
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
  }

  p,
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

export const Container = styled.div<ContainerProps>`
  filter: blur(${(props): string => (props.isModalOpen === 0 ? '0px' : '5px')});
  opacity: ${(props): number => (props.isModalOpen === 0 ? 1 : 0.6)};
  max-width: 900px;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 400ms;
  transition: opacity 200ms, filter 200ms;

  @media (max-width: 1000px) {
    width: 80vw;
  }

  @media (max-width: 600px) {
    width: 85vw;
  }
`;

export const NavBar = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 35px;
  }
`;

export const Section = styled.div`
  padding-top: 40px;

  h1 {
    font-size: 42px;
  }

  h2 {
    font-weight: 600;
    font-size: 36px;
  }

  img {
    width: 15px;
  }

  @media (max-width: 600px) {
    padding-top: 10px;

    h1 {
      font-size: 35px;
    }

    h2 {
      font-size: 21px;
    }
  }
`;

export const Buttons = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalButtons = styled.div`
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ModalButton = styled.div`
  padding-top: 40px;
  text-align: center;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  background: red;
  background-color: #ebeaed;
  border-radius: 5px;
  width: auto;

  input {
    border: none;
    background: none;
    font-size: 18px;
  }

  input::placeholder {
    color: #bfadb9;
  }

  img {
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    input {
      font-size: 15px;
    }

    img {
      margin-right: 6px;
    }
  }
`;

export const AddNewTool = styled.div`
  display: flex;
  align-items: center;
  background-color: #10b26c;
  transition: background-color 300ms;
  border-radius: 5px;
  cursor: pointer;
  padding: 7px 10px;

  &:hover {
    background-color: #12db89;
  }

  img {
    width: 15px;
  }

  p {
    font-weight: 700;
    margin-left: 10px;
    font-size: 18px;
    color: #fff;
  }

  @media (max-width: 600px) {
    p {
      display: none;
    }
  }
`;

export const Tool = styled.div`
  animation: loadAnimation;
  animation-duration: 400ms;
  border-radius: 5px;
  color: #fff;
  background-color: #8f8a9b;
  padding: 10px;
  margin-top: 20px;

  div:last-child {
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: 30px;
  }

  p {
    font-size: 20px;
    color: #fff;
    padding-bottom: 15px;
  }

  span {
    opacity: 0.75;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    p {
      font-size: 18px;
    }
  }
`;

export const TitleFlexbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;

  button {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 26px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export const LoadingSpinner = styled.div`
  margin-top: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    width: 50px;
    animation-name: loading;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes loading {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Pagination = styled.div<PaginationProps>`
  padding-top: 30px;
  padding-bottom: 40px;
  text-align: center;
  margin-right: 60px;

  span,
  strong {
    color: #365df0;
    font-size: 20px;
    cursor: pointer;
  }

  span {
    display: inline-block;
    width: 25px;
    margin-left: 5px;
    margin-right: 5px;
  }

  span:nth-child(${(props): number => props.page + 1}) {
    background-color: #ebeaed;
    color: #170c3a;
    border-radius: 50%;
  }

  strong:first-child {
    margin-right: 10px;
    ${(props): FlattenSimpleInterpolation | false =>
      props.page === 1 &&
      css`
        color: #b9c6fa;
        pointer-events: none;
      `}
  }

  strong:last-child {
    margin-left: 10px;
    ${(props): FlattenSimpleInterpolation | false =>
      props.page === props.lastPage &&
      css`
        color: #b9c6fa;
        pointer-events: none;
      `}
  }

  @media (max-width: 1000px) {
    margin-right: 30px;
  }

  @media (max-width: 600px) {
    margin-right: 16px;

    span,
    strong {
      font-size: 18px;
    }
  }
`;
