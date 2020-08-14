import React, { useState, useCallback } from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { Container, Option, OptionLabel } from './styles';

type TransactionType = 'income' | 'outcome';

interface Props {
  option(type: TransactionType): void;
}

const TransactionSelector: React.FC<Props> = ({ option }) => {
  const [selectedOption, setSelectedOption] = useState<TransactionType>(
    'income',
  );

  const handleChangeOption = useCallback(
    (data: TransactionType) => {
      option(data);
      setSelectedOption(data);
    },
    [option],
  );

  return (
    <Container>
      <Option
        style={
          selectedOption === 'income' && {
            backgroundColor: '#12A45420',
            borderWidth: 0,
          }
        }
        onPress={() => handleChangeOption('income')}
        active={selectedOption === 'income'}
      >
        <Feather name="arrow-up-circle" color="#12A454" size={26} />
        <OptionLabel>Income</OptionLabel>
      </Option>
      <Option
        style={
          selectedOption === 'outcome' && {
            backgroundColor: '#E83F5B20',
            borderWidth: 0,
          }
        }
        onPress={() => handleChangeOption('outcome')}
        active={selectedOption === 'outcome'}
      >
        <Feather name="arrow-down-circle" color="#E83F5B" size={26} />
        <OptionLabel>Outcome</OptionLabel>
      </Option>
    </Container>
  );
};

export default TransactionSelector;
