'use client';

import colors from '@/colors';
import PageContainer from '@/components/Containers/PageContainer';
import Island from '@/components/Island';
import useScreenSize from '@/hooks/useScreenSize';
import { Typography } from '@mui/material';
import { FC } from 'react';

const About: FC = () => {
    const { isMobile } = useScreenSize();
    return (
        <PageContainer>
            <Island>
                <Typography
                    variant={isMobile ? 'h3' : 'h1'}
                    color={colors.accent}
                >
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
                    which i obtained from James Madison Univerity in
                    Harrisonburg, Virginia. i currently live in Richmond,
                    Virginia. i&apos;m employed as a full stack engineer at
                    Exclusive Resorts. my languages of choice at Go and
                    TypeScript. i&apos;m comfortable with a variety of
                    technologies like React, GraphQL, Docker, and Salesforce.
                    some cool projects i&apos;ve worked on include contributing
                    to full stack web apps, designing, implementing, and
                    project-managing a custom data pipeline functionality.
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
                    coffee, and french and italian cooking. i&apos;m a big fan
                    of Magic: The Gathering and i love movies.
                </Typography>
            </Island>
        </PageContainer>
    );
};

export default About;
