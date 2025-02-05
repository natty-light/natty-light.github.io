import { FC, useEffect, useState } from 'react';
import { ButtonContainer, Overlay, StyledCloseButton } from './styles';
import { Box, Typography } from '@mui/material';
import colors from '@/colors';

type ResumeOverlayProps = {};

const ResumeOverlay: FC<ResumeOverlayProps> = ({}) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => console.log(visible), [visible]);

    return (
        <>
            <ButtonContainer onClick={() => setVisible(true)}>
                <Typography color={colors.accent} variant="button">
                    resume
                </Typography>
            </ButtonContainer>
            {visible && (
                <Overlay>
                    <StyledCloseButton onClick={() => setVisible(false)}>
                        x
                    </StyledCloseButton>
                    <object
                        data="/resume.pdf"
                        type="application/pdf"
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                    />
                </Overlay>
            )}
        </>
    );
};

export default ResumeOverlay;
