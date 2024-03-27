import colors from '@/colors';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

const About: FC = () => {
    return (
        <Stack
            height="auto"
            width="80%"
            justifyItems="center"
            alignItems="center"
            border={`2px solid ${colors.accent}`}
            borderRadius="10px"
            padding="32px 8px"
            boxShadow={`0 0 10px ${colors.accent}`}
            margin="auto auto"
        >
            <Typography variant="h1" color={colors.accent}>
                about me
            </Typography>
            <Typography
                padding="8px"
                variant="body1"
                textAlign="center"
                alignSelf="center"
                color={colors.white}
            >
                i&apos;m a full stack developer. i have a degree in physics
                which i obtained from James Madison Univerity in Harrisonburg,
                Virginia. i currently live in Annandale, Virginia. i&apos;m
                employed as a full stack engineer at Exclusive Resorts. my
                langauges of choice at Go and TypeScript. i&apos;m comfortable
                with a variety of technologies like React, GraphQL, Docker, and
                Salesforce. some cool projects i&apos;ve worked on include
                contributing to full stack web apps, designing, implementing,
                and project-managing a custom data pipeline functionality.
                i&apos;m particularly interested in the field of programming
                language design and implementation, as well as graphics
                programming with tools like OpenGL.
            </Typography>
            <Typography
                padding="8px"
                variant="body1"
                textAlign="center"
                alignSelf="center"
                color={colors.white}
            >
                outside of work, i enjoy cycling and fencing, a good cup of
                coffee, and french and italian cooking. i&apos;m a big fan of
                stand-up comedy, (watching, not doing), and i love movies.
            </Typography>
        </Stack>
    );
};

export default About;
