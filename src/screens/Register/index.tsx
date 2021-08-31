import React from 'react';
import { Modal } from 'react-native';
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
import { CategorySelectButton } from '../../components/Form/CategorySelect';
import { CategorySelect } from '../CategorySelect';

export function Register() {
  const [transactionType, setTransactionType] = React.useState('');
  const [categoryModalOpen, setCategoryModalOpen] = React.useState(false)

  const [category, setCategory] = React.useState({
    key: 'category',
    name: 'Categoria',
  })

  function handleTransactionTypeButtonSelect(type: 'up' | 'down'){
    setTransactionType(type)
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false)
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
          <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button title="Enviar" />
      </Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  )
}