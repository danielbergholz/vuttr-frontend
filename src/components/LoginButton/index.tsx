import React from 'react';

import { Container } from './styles';

interface ButtonProps {
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
