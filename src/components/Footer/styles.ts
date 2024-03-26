import colors from '@/colors';
import { Box, Stack, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
    backgroundColor: colors.background,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100vw',
    padding: '8px 0px'
}));

export const OuterStack = styled(Stack)(({ theme }) => ({
    padding: '8px 16px',
    [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-start'
    },
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center'
    }
}));
