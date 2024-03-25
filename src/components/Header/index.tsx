import colors from '@/colors';
import { HeaderTab } from '@/types';
import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

export type HeaderProps = {
  tabs: HeaderTab[];
};

const Header: FC<HeaderProps> = ({ tabs }) => {
  return (
    <Box padding="24px 0">
      <Stack direction={'row'} spacing={2} justifyContent="flex-end">
        {tabs.map((tab, idx) => (
          <Link key={idx} href={tab.dest} color={colors.accent}>
            {tab.content}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Header;
