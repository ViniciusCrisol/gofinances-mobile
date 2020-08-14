import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import Input from './Input';
import TransactionSelector from './TransactionSelector';

import { Container, Title, Button, ButtonLabel } from './styles';

type TransactionType = 'income' | 'outcome';

const Transactions: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [transactionType, setTransactionType] = useState<TransactionType>(
    'income',
  );

  const handleSubmit = useCallback(
    (data) => {
      const { value, name, category } = data;
      const formData = {
        type: transactionType,
        value,
        name,
        category,
      };

      console.log(formData);
    },
    [transactionType],
  );

  return (
    <Container>
      <Title>Cadastro</Title>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />

        <Input name="value" placeholder="Preço" keyboardType="numeric" />

        <TransactionSelector option={(value) => setTransactionType(value)} />

        <Input name="category" placeholder="Categoria" />
        <Button>
          <ButtonLabel onPress={() => formRef.current?.submitForm()}>
            Enviar
          </ButtonLabel>
        </Button>
      </Form>
    </Container>
  );
};

export default Transactions;
