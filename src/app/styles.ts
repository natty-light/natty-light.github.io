import { Stack, styled } from '@mui/material';

export const Container = styled(Stack)({
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
});

export const HeaderTextContainer = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '8px'
    }
}));
