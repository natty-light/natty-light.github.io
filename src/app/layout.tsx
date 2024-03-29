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
                <Stack height="100vh">
                    <Header tabs={headerTabs} />
                    <div style={{ flex: '1' }}>{children}</div>
                    <Footer iconButtons={buttons} />
                    <Cursor />
                </Stack>
                <div
                    style={{
                        filter: `blur(10px)`,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1
                    }}
                >
                    <Background />
                </div>
            </body>
        </html>
    );
}
