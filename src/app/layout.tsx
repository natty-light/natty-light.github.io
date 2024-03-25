import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { ReactNode } from 'react';

import buttons from '@/data/buttons.json';
import headerTabs from '@/data/headertabs.json';

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
