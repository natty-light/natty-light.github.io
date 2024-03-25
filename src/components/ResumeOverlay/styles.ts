import { Box, styled } from '@mui/material';

export const Container = styled(Box)({
  width: '100%',
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '48px 0px'
});

export const Overlay = styled(Box)({
  width: 'fit-content',
  height: 'fit-content',
  position: 'absolute',
  top: '0',
  left: '0',
  backgroundColor: '#2828304d',
  backdropFilter: 'blur(5px)',
  zIndex: 15
});
