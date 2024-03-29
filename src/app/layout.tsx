import type { ReactNode } from 'react';
import buttons from '@/data/buttons.json';
import headerTabs from '@/data/headertabs.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Box, Stack } from '@mui/material';
import colors from '@/colors';
import Cursor from '@/components/Cursor';
import Background from '@/components/Background';

export const metadata = {
    title: 'ngallant.dev'
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body
                style={{
                    margin: '0',
                    padding: '0',
                    cursor: 'none',
                    backgroundColor: colors.black
                }}
            >
                <Stack height="100vh" zIndex={1}>
                    <Header tabs={headerTabs} />
                    <Box flex="1">{children}</Box>
                    <Footer iconButtons={buttons} />
                </Stack>
                <Background />
                <Cursor />
            </body>
        </html>
    );
}
