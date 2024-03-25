import colors from '@/colors';
import { Stack, styled } from '@mui/material';

export const Container = styled(Stack)({
  width: '100%',
  height: 'auto',
  justifyItems: 'center',
  alignItems: 'center',
  border: `2px solid ${colors.accent}`,
  borderRadius: '10px',
  backdropFilter: 'blur(5px)',
  padding: '32px 8px'
});
