import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { Container, Header, LabelType, ValueText, ValueLabel } from './styles';

interface Props {
  value: number;
  type: 'total' | 'income' | 'outcome';
}

const HeaderCard: React.FC<Props> = ({ value, type }) => {
  return (
    <Container type={type}>
      <Header>
        <LabelType type={type}>
          {type === 'total' && 'Total'}
          {type === 'outcome' && 'Saídas'}
          {type === 'income' && 'Entradas'}
        </LabelType>
        {type === 'total' && (
          <Feather name="dollar-sign" color="#fff" size={26} />
        )}
        {type === 'income' && (
          <Feather name="arrow-up-circle" color="#12A454" size={26} />
        )}
        {type === 'outcome' && (
          <Feather name="arrow-down-circle" color="#E83F5B" size={26} />
        )}
      </Header>
      <ValueText type={type}>{value}</ValueText>
      <ValueLabel type={type}>Última entranda dia 03 de abril</ValueLabel>
    </Container>
  );
};

export default HeaderCard;
