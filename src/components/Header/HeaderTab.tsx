import colors from '@/colors';
import { HeaderTabItem } from '@/types';
import { Divider, Stack } from '@mui/material';
import Link from 'next/link';
import type { Dispatch, FC, SetStateAction } from 'react';

type HeaderTabProps = {
    activeIdx: number;
    idx: number;
    tab: HeaderTabItem;
    setActiveIdx: Dispatch<SetStateAction<number>>;
};

const HeaderTab: FC<HeaderTabProps> = ({
    activeIdx,
    idx,
    tab,
    setActiveIdx
}) => {
    return (
        <Stack direction="column">
            <Link
                key={idx}
                href={tab.dest}
                style={{ textDecoration: 'none', color: colors.accent }}
                onClick={() => setActiveIdx(idx)}
            >
                {tab.content}
            </Link>
            {idx === activeIdx && <Divider color={colors.accent} />}
        </Stack>
    );
};

export default HeaderTab;
