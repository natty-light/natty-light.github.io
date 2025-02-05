'use client';

import Island from '@/components/Island';
import { Typography } from '@mui/material';
import { FC } from 'react';
import { HeaderTextContainer } from './styles';
import useScreenSize from '@/hooks/useScreenSize';
import colors from '@/colors';
import PageContainer from '@/components/Containers/PageContainer';

const App: FC = () => {
    const { isMobile } = useScreenSize();
    return (
        <PageContainer>
            <Island>
                <HeaderTextContainer direction={isMobile ? 'column' : 'row'}>
                    <Typography
                        variant={isMobile ? 'h3' : 'h1'}
                        color={colors.white}
                    >
                        hi, i&apos;m
                    </Typography>
                    <Typography
                        padding="0 8px"
                        variant={isMobile ? 'h2' : 'h1'}
                        color={colors.accent}
                    >
                        Natasha
                    </Typography>
                </HeaderTextContainer>
                <Typography
                    padding="8px"
                    variant="body1"
                    textAlign="center"
                    color={colors.white}
                >
                    i&apos;m a full stack developer. this is my site, built with
                    NextJS. you can find some of my projects here, or my links
                </Typography>
            </Island>
        </PageContainer>
    );
};

export default App;
