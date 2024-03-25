'use client';

import { PageInnerContainer } from '@/components/Containers/styles';
import Island from '@/components/Island';
import { Box } from '@mui/material';
import { FC } from 'react';

const App: FC = () => {
    return (
        <Box
            display="flex"
            width="100%"
            justifyContent="center"
            alignItems="center"
        >
            <Island />
        </Box>
    );
};

export default App;
