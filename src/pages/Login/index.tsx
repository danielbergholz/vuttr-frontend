import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useToast } from '../../context/toast';
import { useUser } from '../../context/user';
import api from '../../services/api';
import LoginButton from '../../components/LoginButton';
import back from '../../assets/back.svg';
import { Container, Form, GoBack, CreateAccount } from './styles';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(0);

  const history = useHistory();
  const { setJwt, setUser } = useUser();
  const { toast } = useToast();

  const onHandleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const inputs = document.getElementsByTagName('input');

      if (inputs[0].value === '' || inputs[1].value === '') {
        toast('Do not leave any field blank', 'warning');
        return;
      }

      setLoading(1);

      api
        .post('/session', {
          email: inputs[0].value,
          password: inputs[1].value,
        })
        .then((response) => {
          const { token, user } = response.data;
          setJwt(token);
          setUser(user);
          history.push('app');
        })
        .catch((err) => {
          toast(
            err.response?.data[0]?.message ||
              'Your request could not be completed',
            'error',
          );
          setLoading(0);
        });
    },
    [toast, history, setJwt, setUser],
  );

  return (
    <Container>
      <Link to="/">
        <GoBack>
          <img src={back} alt="Go back home" />
          <p>Home</p>
        </GoBack>
      </Link>
      <Form onSubmit={onHandleSubmit}>
        <input type="email" name="email" placeholder="E-mail" />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <LoginButton color="#2F55CC" hover="#365DF0" loading={loading}>
          Login
        </LoginButton>
      </Form>
      <CreateAccount>
        <Link to="createaccount">
          <p>Create account</p>
        </Link>
      </CreateAccount>
    </Container>
  );
};

export default Login;

// <Form onSubmit={onHandleSubmit} loading={loading}>
