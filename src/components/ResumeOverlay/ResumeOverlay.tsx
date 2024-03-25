import { FC, MouseEvent, useState } from 'react';
import { Container, Overlay } from './styles';
import { Button } from '@mui/material';

type ResumeOverlayProps = {};

const ResumeOverlay: FC<ResumeOverlayProps> = ({}) => {
  const [visible, setVisible] = useState(false);

  const handleButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    setVisible(() => !visible);

    if (visible) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  if (visible) {
    return (
      <Overlay>
        <object data="/content/resume.pdf" type="application/pdf" />
      </Overlay>
    );
  } else {
    return (
      <Container>
        <Button onClick={handleButtonClick}>View Resume</Button>
      </Container>
    );
  }
};

export default ResumeOverlay;
