'use client';

import useDrawer from '@/hooks/useDrawer';
import { Box, Button, Drawer, Link, Stack, Typography } from '@mui/material';
import type { FC } from 'react';
import IconButton from '../Buttons/IconButton';
import colors from '@/colors';

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
        <Box
            border="2px solid"
            borderColor={colors.accent}
            borderRadius="10px"
            width="fit-content"
            padding="8px 8px"
            margin="8px 8px"
            boxShadow={`0 0 10px ${colors.accent}`}
        >
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
                </Stack>
            </Drawer>
        </Box>
    );
};

export default Project;
