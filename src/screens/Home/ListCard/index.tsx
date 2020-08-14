import React from 'react';

import { Container, Title, ValueLabel, Footer, FooterLabel } from './styles';

interface CategoryProps {
  title: string;
}

interface TransactionProps {
  id: string;
  title: string;
  type: 'income' | 'outcome';
  value: number;
  created_at: Date;
  category: CategoryProps;
}

interface Props {
  transaction: TransactionProps;
}

const ListCard: React.FC<Props> = ({ transaction }) => (
  <Container>
    <Title>{transaction.title}</Title>
    <ValueLabel type="income">
      {transaction.type === 'outcome' && '-'}
      {transaction.value}
    </ValueLabel>
    <Footer>
      <FooterLabel>{transaction.category.title}</FooterLabel>
      <FooterLabel>{transaction.created_at}</FooterLabel>
    </Footer>
  </Container>
);

export default ListCard;
