import { HeaderTab } from '@/types';
import { Box } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

export type HeaderProps = {
  tabs: HeaderTab[];
};

const Header: FC<HeaderProps> = ({ tabs }) => {
  return (
    <Box display="flex" justifyContent="flex-end">
      {tabs.map((tab, idx) => (
        <Link key={idx} href={tab.dest}>
          {tab.content}
        </Link>
      ))}
    </Box>
  );
};

export default Header;
