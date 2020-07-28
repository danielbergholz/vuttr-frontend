import React from 'react';
import { Link } from 'react-router-dom';

import LoginButton from '../LoginButton';
import { Container, Header, Login } from './styles';
import bossaBox from '../../assets/bossabox.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <img src={bossaBox} alt="Logo Bossabox" />
        </Link>
        <Login>
          <Link to="createaccount">
            <p>Create account</p>
          </Link>
          <Link to="login">
            <LoginButton>Login</LoginButton>
          </Link>
        </Login>
      </Header>
    </Container>
  );
};

export default Home;
