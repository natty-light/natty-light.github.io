import { Stack, styled } from '@mui/material';

export const HeaderTextContainer = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '8px'
    }
}));
