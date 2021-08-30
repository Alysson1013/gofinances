import React from 'react';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsType
} from './styles'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';

export function Register() {
  const [transactionType, setTransactionType] = React.useState('')

  function handleTransactionTypeButtonSelect(type: 'up' | 'down'){
    setTransactionType(type)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input
            placeholder="Nome"
          />
          <Input
            placeholder="Preço"
          />

          <TransactionsType>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handleTransactionTypeButtonSelect('up')}
              isActive={transactionType  === 'up'}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransactionTypeButtonSelect('down')}
              isActive={transactionType  === 'down'}
            />
          </TransactionsType>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  )
}