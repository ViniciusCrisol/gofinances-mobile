import React, { useState, useEffect } from 'react';

import api from '../../services/api';

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

interface BalaceProps {
  income: number;
  outcome: number;
  total: number;
}

const Home: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const [balance, setbalance] = useState<BalaceProps>({} as BalaceProps);

  useEffect(() => {
    async function getData(): Promise<void> {
      const response = await api.get('/');

      setTransactions(response.data.transactions);
      setbalance(response.data.balance);
    }

    getData();
  }, []);

  return (
    <Wrapper>
      <Header>
        <HeaderContent horizontal>
          <HeaderCard type="income" value={balance.income} />
          <HeaderCard type="outcome" value={balance.outcome} />
          <HeaderCard type="total" value={balance.total} />
        </HeaderContent>
      </Header>
      <Content>
        <Label>Listagem</Label>
        {transactions.map((transaction) => (
          <ListContent key={transaction.id} transaction={transaction} />
        ))}
      </Content>
    </Wrapper>
  );
};

export default Home;
