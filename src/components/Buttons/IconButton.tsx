import { Link } from '@mui/material';
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
    <Link
      href={link}
      border="2px solid"
      borderColor={colors.accent}
      borderRadius="10px"
    >
      <Icon icon={icon} />
      {content}
    </Link>
  );
};

export default IconButton;
