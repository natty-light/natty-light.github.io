import colors from '@/colors';
import { Box, Button, styled } from '@mui/material';

export const Overlay = styled(Box)({
    width: '80%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundColor: '#2828304d',
    backdropFilter: 'blur(5px)',
    zIndex: 15
});

export const StyledCloseButton = styled(Button)({
    position: 'absolute',
    top: '0',
    right: '0',
    textDecoration: 'none',
    color: colors.yellow
});

export const ButtonContainer = styled(Box)({
    '&:hover': {
        cursor: 'pointer'
    }
});
