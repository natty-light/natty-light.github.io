import colors from '@/colors';
import { Stack, styled } from '@mui/material';

export const Container = styled(Stack)(({ theme }) => ({
    height: 'auto',
    width: '80%',
    justifyItems: 'center',
    alignItems: 'center',
    border: `2px solid ${colors.accent}`,
    borderRadius: '10px',
    padding: '32px 16px',
    boxShadow: `0 0 10px ${colors.accent}`,
    margin: 'auto auto'
}));
