import colors from '@/colors';
import { Box, styled } from '@mui/material';

export const Container = styled(Box)({
    border: '2px solid',
    borderColor: colors.accent,
    borderRadius: '10px',
    width: 'fit-content',
    padding: '8px 8px',
    margin: '8px 8px',
    boxShadow: `0 0 10px ${colors.accent}`
});
