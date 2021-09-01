import React from 'react';
import { useForm } from 'react-hook-form';

import { Modal } from 'react-native';
import { Input } from '../../components/Form/Input';
import { InputForm } from '../../components/Form/InputForm';
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

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [transactionType, setTransactionType] = React.useState('');
  const [categoryModalOpen, setCategoryModalOpen] = React.useState(false)

  const [category, setCategory] = React.useState({
    key: 'category',
    name: 'Categoria',
  })

  const {
    control,
    handleSubmit
  } = useForm()

  function handleTransactionTypeButtonSelect(type: 'up' | 'down'){
    setTransactionType(type)
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false)
  }


  function handleRegister(form: FormData){
    const data = {
      name: form.name,
      amount:form.amount,
      transactionType,
      category: category.key
    }

    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <InputForm
            name="name"
            control={control}
            placeholder="Nome"
          />
          <InputForm
            name="amount"
            control={control}
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

        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
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