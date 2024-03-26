import type { ReactNode } from 'react';
import buttons from '@/data/buttons.json';
import headerTabs from '@/data/headertabs.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Box, Stack } from '@mui/material';
import colors from '@/colors';

export const metadata = {
    title: 'ngallant.dev'
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body style={{ margin: '0', padding: '0' }}>
                <Stack height="100vh" bgcolor={colors.black}>
                    <Header tabs={headerTabs} />
                    <Box flex="1">{children}</Box>
                    <Footer iconButtons={buttons} />
                </Stack>
            </body>
        </html>
    );
}
