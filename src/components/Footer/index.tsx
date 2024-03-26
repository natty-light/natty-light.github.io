import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import IconButton, { IconButtonProps } from '../Buttons/IconButton';
import colors from '@/colors';

type FooterProps = {
    iconButtons: IconButtonProps[];
};

const Footer: FC<FooterProps> = ({ iconButtons: buttons }) => {
    return (
        <Box
            bgcolor={colors.background}
            position="absolute"
            bottom="0"
            left="0"
            padding="32px 0px"
            width="100vw"
        >
            <Stack padding="24px 24px">
                <Typography
                    variant="h3"
                    width="100%"
                    textAlign="left"
                    color={colors.accent}
                >
                    My Links
                </Typography>
                <Stack direction="row" spacing={2}>
                    {buttons.map((button, index) => (
                        <IconButton
                            key={index}
                            {...button}
                            color={colors.accent}
                        />
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
};

export default Footer;
