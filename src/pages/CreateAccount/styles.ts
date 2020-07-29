import styled from 'styled-components';

export const Container = styled.div`
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

export const Form = styled.form`
  margin-top: 200px;
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
    input {
      width: 288px;
    }
  }
`;

export const Login = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
`;
