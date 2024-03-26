import { useMediaQuery, useTheme } from '@mui/material';

type UseScreenSizeReturn = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
};

const useScreenSize = (): UseScreenSizeReturn => {
    const theme = useTheme();
    const isTabletMedia = useMediaQuery(theme.breakpoints.up('md'));
    const isMobileMedia = useMediaQuery(theme.breakpoints.down('md'));

    let screenSize;
    if (!isTabletMedia && !isMobileMedia) {
        screenSize = 'isDesktop';
    } else if (!isMobileMedia && isTabletMedia) {
        screenSize = 'isTablet';
    } else {
        screenSize = 'isMobile';
    }

    return {
        isMobile: screenSize === 'isMobile',
        isTablet: screenSize === 'isTablet',
        isDesktop: screenSize === 'isDesktop'
    };
};

export default useScreenSize;
