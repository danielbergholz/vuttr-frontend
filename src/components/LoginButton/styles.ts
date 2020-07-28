import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface ButtonProps {
  color?: string;
  hover?: string;
  loading?: number;
}

export const Container = styled.button<ButtonProps>`
  background: ${(props): string => props.color || '#4c4499'} 0% 0% no-repeat
    padding-box;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  width: 174px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 22px;
  transition: background-color 200ms;

  &:hover {
    background-color: ${(props): string => props.hover || '#6554c0'};
  }

  ${(props): FlattenSimpleInterpolation =>
    props.loading === 1
      ? css`
          opacity: 0.7;
          pointer-events: none;
        `
      : css`
          pointer-events: all;
          opacity: 1;
        `}

  @media (max-width: 600px) {
    width: 120px;
    font-size: 20px;
  }
`;
