import { Box, styled } from '@mui/material';

type PageInnerContainerProps = {
    fullScreen?: boolean;
    stretchRightwards?: boolean;
    stretchLeftwards?: boolean;
};

export const PageInnerContainer = styled(Box, {
    shouldForwardProp: (prop) =>
        prop !== 'fullScreen' &&
        prop !== 'stretchRightwards' &&
        prop !== 'stretchLeftwards'
})<PageInnerContainerProps>(
    ({ fullScreen, stretchRightwards, stretchLeftwards, theme }) => ({
        maxWidth: fullScreen || stretchRightwards ? '100vw' : '80%',
        width: '100%',
        [theme.breakpoints.up('md')]: {
            overflow: 'hidden'
        },
        paddingRight: stretchRightwards ? '0' : 'auto',
        paddingLeft: stretchLeftwards ? '0' : 'auto'
    })
);
