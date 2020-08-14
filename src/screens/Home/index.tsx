import React from 'react';

import HeaderCard from './HeaderCard';

import { Wrapper, Header, HeaderContent, Container } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderContent horizontal>
          <HeaderCard type="income" value={2500} />
          <HeaderCard type="outcome" value={2500} />
          <HeaderCard type="total" value={2500} />
        </HeaderContent>
      </Header>
      <Container />
    </Wrapper>
  );
};

export default Home;
