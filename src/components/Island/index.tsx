import colors from '@/colors';
import { Typography, Stack } from '@mui/material';
import { FC } from 'react';

const Island: FC = () => {
    return (
        <Stack
            height="auto"
            width="80%"
            justifyItems="center"
            alignItems="center"
            border={`2px solid ${colors.accent}`}
            borderRadius="10px"
            padding="32px 8px"
        >
            <Stack direction="row">
                <Typography variant="h1">hi, i&apos;m</Typography>
                <Typography padding="0 8px" variant="h1" color={colors.accent}>
                    Natasha
                </Typography>
            </Stack>
            <Typography padding="8px" variant="body1" textAlign="center">
                i&apos;m a full stack developer. you&apos;ve found my
                work-in-progress site which I am building with React and NextJS.
                for now, if you like, here are some of my projects, or
                alternatively, some places you can find out more about me.
            </Typography>
        </Stack>
    );
};

export default Island;
