import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  hover?: string;
  loading?: number;
}

const Button: React.FC<ButtonProps> = ({ children, color, hover, loading }) => {
  return (
    <Container color={color} hover={hover} loading={loading}>
      {children}
    </Container>
  );
};

export default Button;
