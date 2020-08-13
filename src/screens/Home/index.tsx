import React from 'react';

import HeaderCard from './HeaderCard';

import { Wrapper, Header, HeaderContent, Container } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderContent horizontal>
          <HeaderCard />
          <HeaderCard />
          <HeaderCard />
        </HeaderContent>
      </Header>
      <Container />
    </Wrapper>
  );
};

export default Home;
