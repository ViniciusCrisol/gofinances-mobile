import React from 'react';

import { Container, Title, ValueLabel, Footer, FooterLabel } from './styles';

const ListCard: React.FC = () => {
  return (
    <Container>
      <Title>Desenvolvimento de site</Title>
      <ValueLabel type="income">{true && '-'}1200000</ValueLabel>
      <Footer>
        <FooterLabel>Alementação</FooterLabel>
        <FooterLabel>10/04/2020</FooterLabel>
      </Footer>
    </Container>
  );
};

export default ListCard;
