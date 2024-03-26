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
        <Stack
            direction={'row'}
            spacing={2}
            justifyContent="flex-end"
            padding="16px 18px 24px 18px"
        >
            {tabs.map((tab, idx) => (
                <Link
                    key={idx}
                    href={tab.dest}
                    color={colors.accent}
                    style={{ textDecoration: 'none' }}
                >
                    {tab.content}
                </Link>
            ))}
        </Stack>
    );
};

export default Header;
