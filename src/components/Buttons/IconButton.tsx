import { Link, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Icon } from '@iconify-icon/react';
import colors from '@/colors';

export type IconButtonProps = {
    link: string;
    content: string;
    icon: string;
    color?: string;
};

const IconButton: FC<IconButtonProps> = ({
    link,
    content,
    icon,
    color = colors.accent
}) => {
    return (
        <Link href={link} color={color} underline="none" width="fit-content">
            <Stack direction="row" spacing={1} alignItems="center">
                <Icon icon={icon} />
                <Typography variant="button"> {content}</Typography>
            </Stack>
        </Link>
    );
};

export default IconButton;
