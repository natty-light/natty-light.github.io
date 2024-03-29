'use client';

import useDrawer from '@/hooks/useDrawer';
import { Drawer, Link, Stack, Typography } from '@mui/material';
import type { FC } from 'react';
import IconButton from '../Buttons/IconButton';
import colors from '@/colors';
import { Container } from './styles';
import Cursor from '../Cursor';

type ProjectProps = {
    link: string;
    text: string;
    title: string;
    buttonText: string;
    buttonIcon: string;
};

const Project: FC<ProjectProps> = ({
    link,
    text,
    title,
    buttonIcon,
    buttonText
}) => {
    const { open, close, isOpen } = useDrawer();

    return (
        <Container>
            <Stack>
                <Typography variant="h5" color={colors.accent}>
                    {title}
                </Typography>
                <Link
                    onClick={open}
                    underline="hover"
                    color={colors.accent}
                    alignSelf="center"
                >
                    about
                </Link>
            </Stack>
            <Drawer open={isOpen} onClose={close}>
                <Stack
                    bgcolor={colors.black}
                    height="100%"
                    padding="16px 16px"
                    maxWidth="400px"
                    gap="16px"
                >
                    <div
                        style={{
                            color: colors.accent,
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            padding: '8px',
                            cursor: 'pointer'
                        }}
                        onClick={close}
                    >
                        x
                    </div>
                    <Typography variant="h3" color={colors.accent}>
                        {title}
                    </Typography>
                    <Typography variant="body1" color={colors.accent}>
                        {text}
                    </Typography>
                    <IconButton
                        icon={buttonIcon}
                        link={link}
                        content={buttonText}
                        color={colors.accent}
                    />
                    <Cursor />
                </Stack>
            </Drawer>
        </Container>
    );
};

export default Project;
