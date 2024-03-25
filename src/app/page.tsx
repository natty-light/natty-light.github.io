'use client';

import { PageInnerContainer } from '@/components/Containers/styles';
import Island from '@/components/Island';
import { FC } from 'react';

const App: FC = () => {
  return (
    <PageInnerContainer>
      <Island />
    </PageInnerContainer>
  );
};

export default App;
