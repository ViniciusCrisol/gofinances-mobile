import React from 'react';

import ListCard from './ListCard';
import HeaderCard from './HeaderCard';

import {
  Wrapper,
  Header,
  HeaderContent,
  Content,
  Label,
  ListContent,
} from './styles';

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
      <Content>
        <Label>Listagem</Label>
        <ListContent>
          <ListCard />
          <ListCard />
          <ListCard />
        </ListContent>
      </Content>
    </Wrapper>
  );
};

export default Home;
