import { Box, styled } from '@mui/material';
import colors from '@/colors';

export const Container = styled(Box)({
    backgroundColor: colors.background,
    backdropFilter: 'blur(5px)',
    padding: '8px 36px',
    position: 'absolute',
    bottom: 0,
    width: '100vw'
});
