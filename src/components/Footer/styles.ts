import { Box, styled } from '@mui/material';
import colors from '@/colors';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: colors.background,
  backdropFilter: 'blur(5px)',
  border: `2px solid ${colors.accent}`,
  borderRadius: '10px',
  padding: '8px 36px',
  justifyContent: 'center',
  alignItems: 'center'
});
