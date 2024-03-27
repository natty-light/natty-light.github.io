'use client';
import { HeaderTabItem } from '@/types';
import { Stack } from '@mui/material';
import { FC, useState } from 'react';
import HeaderTab from './HeaderTab';

export type HeaderProps = {
    tabs: HeaderTabItem[];
};

const Header: FC<HeaderProps> = ({ tabs }) => {
    const [activeIdx, setActiveIdx] = useState(0);
    return (
        <Stack
            direction={'row'}
            spacing={2}
            justifyContent="flex-end"
            padding="16px 18px 24px 18px"
        >
            {tabs.map((tab, idx) => (
                <HeaderTab
                    key={`tab-${idx}`}
                    tab={tab}
                    activeIdx={activeIdx}
                    idx={idx}
                    setActiveIdx={setActiveIdx}
                />
            ))}
        </Stack>
    );
};

export default Header;
