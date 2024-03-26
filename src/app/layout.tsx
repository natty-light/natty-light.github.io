import type { ReactNode } from 'react';
import buttons from '@/data/buttons.json';
import headerTabs from '@/data/headertabs.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import colors from '@/colors';

export const metadata = {
    title: 'ngallant.dev'
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header tabs={headerTabs} />
                {children}
                <Footer iconButtons={buttons} />
            </body>
        </html>
    );
}
