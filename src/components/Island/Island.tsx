'use client';
import colors from '@/colors';
import { Typography, Stack } from '@mui/material';
import { FC } from 'react';
import { Container } from './styles';
import { PageInnerContainer } from '../Containers/PageInnerContainer';

const Island: FC = () => {
  return (
    <PageInnerContainer>
      <Container>
        <Stack direction="row">
          <Typography variant="h1">Hi, I&apos;m</Typography>
          <Typography padding="0 8px" variant="h1" color={colors.accent}>
            Natasha
          </Typography>
        </Stack>
        <Typography padding="8px" variant="body1" textAlign="center">
          I&apos;m a software engineer who loves using code to solve interesting
          problems. You&apos;ve found my work-in-progress site which I am
          building with React and NextJS. For now, if you like, here are some of
          my projects, or alternatively, some places you can find out more about
          me.
        </Typography>
      </Container>
    </PageInnerContainer>
  );
};

export default Island;
