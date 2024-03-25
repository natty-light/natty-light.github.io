'use client';

import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Container } from './styles';
import IconButton, { IconButtonProps } from '../Buttons/IconButton';
import colors from '@/colors';

type FooterProps = {
  iconButtons: IconButtonProps[];
};

const Footer: FC<FooterProps> = ({ iconButtons: buttons }) => {
  return (
    <Container>
      <Stack>
        <Typography
          variant="h3"
          width="100%"
          textAlign="left"
          color={colors.accent}
        >
          My Links
        </Typography>
        <Stack direction="row" spacing={2}>
          {buttons.map((button, index) => (
            <IconButton key={index} {...button} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
