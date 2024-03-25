import { Link, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Icon } from '@iconify-icon/react';
import colors from '@/colors';

export type IconButtonProps = {
    link: string;
    content: string;
    icon: string;
};

const IconButton: FC<IconButtonProps> = ({ link, content, icon }) => {
    return (
        <Link href={link} color={colors.white} underline="none">
            <Stack direction="row" spacing={1} alignItems="center">
                <Icon icon={icon} />
                <Typography>{content}</Typography>
            </Stack>
        </Link>
    );
};

export default IconButton;
