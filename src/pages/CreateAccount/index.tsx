import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useToast } from '../../context/toast';
import api from '../../services/api';
import LoginButton from '../../components/LoginButton';
import back from '../../assets/back.svg';
import { Container, Form, GoBack, Login } from './styles';

const CreateAccount: React.FC = () => {
  const [loading, setLoading] = useState(0);

  const history = useHistory();
  const { toast } = useToast();

  const onHandleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const inputs = document.getElementsByTagName('input');

      if (
        inputs[0].value === '' ||
        inputs[1].value === '' ||
        inputs[2].value === ''
      ) {
        toast('Do not leave any field blank', 'warning');
        return;
      }

      setLoading(1);

      api
        .post('/user', {
          name: inputs[0].value,
          email: inputs[1].value,
          password: inputs[2].value,
        })
        .then(() => {
          history.push('login');
          toast('User created, please login with your new account', 'success');
          setLoading(0);
        })
        .catch((err) => {
          toast(
            err.response?.data?.error || 'Your request could not be completed',
            'error',
          );
          setLoading(0);
        });
    },
    [toast, history],
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
        <input name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="E-mail" />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <LoginButton color="#10B26C" hover="#12DB89" loading={loading}>
          Create account
        </LoginButton>
      </Form>
      <Login>
        <Link to="login">
          <p>I already have an account</p>
        </Link>
      </Login>
    </Container>
  );
};

export default CreateAccount;

// <Form onSubmit={onHandleSubmit} loading={loading}>
