import { HeaderTab } from '@/types';
import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

export type HeaderProps = {
  tabs: HeaderTab[];
};

const Header: FC<HeaderProps> = ({ tabs }) => {
  return (
    <Box padding="8px">
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        gap="16px"
      >
        {tabs.map((tab, idx) => (
          <Link key={idx} href={tab.dest}>
            {tab.content}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Header;
