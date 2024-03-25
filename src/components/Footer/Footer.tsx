'use client';

import { Typography } from '@mui/material';
import { FC } from 'react';
import { Container } from './styles';
import IconButton, { IconButtonProps } from '../Buttons/IconButton';

type FooterProps = {
  iconButtons: IconButtonProps[];
};

const Footer: FC<FooterProps> = ({ iconButtons: buttons }) => {
  return (
    <Container>
      <Typography variant="h3" width="100%" textAlign="left">
        My Links
      </Typography>
      {buttons.map((button, idx) => (
        <IconButton key={idx} {...button} />
      ))}
    </Container>
  );
};

export default Footer;
