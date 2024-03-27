'use client';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import IconButton, { IconButtonProps } from '../Buttons/IconButton';
import colors from '@/colors';
import { Container, OuterStack } from './styles';
import useScreenSize from '@/hooks/useScreenSize';
import ResumeOverlay from '../ResumeOverlay';

type FooterProps = {
    iconButtons: IconButtonProps[];
};

const Footer: FC<FooterProps> = ({ iconButtons: buttons }) => {
    const { isMobile } = useScreenSize();

    return (
        <Container borderTop={`2px solid ${colors.accent}`}>
            <OuterStack direction={isMobile ? 'row' : 'column'} spacing={4}>
                <Typography variant="h3" textAlign="left" color={colors.accent}>
                    my links
                </Typography>
                <Stack
                    direction={isMobile ? 'column' : 'row'}
                    spacing={isMobile ? 2 : 8}
                >
                    {buttons.map((button, index) => (
                        <IconButton
                            key={index}
                            {...button}
                            color={colors.accent}
                        />
                    ))}
                    <ResumeOverlay />
                </Stack>
            </OuterStack>
        </Container>
    );
};

export default Footer;
