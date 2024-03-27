'use client';

import { FC, ReactNode } from 'react';
import { Container } from './styles';

type IslandProps = {
    children: ReactNode;
};

const Island: FC<IslandProps> = ({ children }) => {
    return <Container>{children}</Container>;
};

export default Island;
