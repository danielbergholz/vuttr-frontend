import React from 'react';

import { useToast } from '../../context/toast';
import { Container, FlexContainer, Text } from './styles';
import infoSVG from '../../assets/banner/info.svg';
import warningSVG from '../../assets/banner/warning.svg';
import errorSVG from '../../assets/banner/error.svg';
import successSVG from '../../assets/banner/success.svg';
import xSVG from '../../assets/x.svg';

interface BannerProps {
  display: number;
  message: string;
  type: 'success' | 'warning' | 'info' | 'error';
}

const mapTypeToSVG = {
  success: successSVG,
  warning: warningSVG,
  error: errorSVG,
  info: infoSVG,
};

const mapTypeToTitle = {
  success: 'Success!',
  warning: 'Ops!',
  error: 'An error ocurred',
  info: 'Side note...',
};

const Banner: React.FC<BannerProps> = ({ display, message, type }) => {
  const { closeToast } = useToast();

  return (
    <Container display={display} type={type}>
      <FlexContainer>
        <img src={mapTypeToSVG[type]} alt="" />
        <Text>
          <h1>{mapTypeToTitle[type]}</h1>
          <p>{message}</p>
        </Text>
        <button type="button" onClick={closeToast}>
          <img id="close" src={xSVG} alt="" />
        </button>
      </FlexContainer>
    </Container>
  );
};

export default Banner;
