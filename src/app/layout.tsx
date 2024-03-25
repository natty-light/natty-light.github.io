import type { ReactNode } from 'react';

import buttons from '@/data/buttons.json';
import headerTabs from '@/data/headertabs.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'ngallant.dev'
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <Header tabs={headerTabs} />
            <main>{children}</main>
            <Footer iconButtons={buttons} />
        </html>
    );
}
