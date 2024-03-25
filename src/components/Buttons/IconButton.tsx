import { Link } from '@mui/material';
import { FC } from 'react';
import { Icon } from '@iconify-icon/react';

export type IconButtonProps = {
  link: string;
  content: string;
  icon: string;
};

const IconButton: FC<IconButtonProps> = ({ link, content, icon }) => {
  return (
    <Link href={link}>
      <Icon icon={icon} />
      {content}
    </Link>
  );
};

export default IconButton;
