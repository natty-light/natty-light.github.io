'use client';

import useDrawer from '@/hooks/useDrawer';
import { Box, Button, Drawer, Grid, Stack, Typography } from '@mui/material';
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
    console.log(isOpen);

    return (
        <Box
            border="2px solid"
            borderColor={colors.accent}
            borderRadius="10px"
            width="fit-content"
            padding="8px 8px"
            margin="8px 8px"
        >
            <Stack>
                <Typography variant="h5">{title}</Typography>
                <IconButton
                    icon={buttonIcon}
                    link={link}
                    content={buttonText}
                    color={colors.black}
                />
                <Button onClick={open}>more info</Button>
            </Stack>
            <Drawer open={isOpen} onClose={close}>
                <Typography variant="h3">{title}</Typography>
                <Typography variant="body1">{text}</Typography>
            </Drawer>
        </Box>
    );
};

export default Project;
