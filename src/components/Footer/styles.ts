import colors from '@/colors';
import { Box, Stack, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
    width: '100vw'
}));

export const OuterStack = styled(Stack)(({ theme }) => ({
    padding: '16px 16px',
    [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-start'
    },
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center'
    }
}));
