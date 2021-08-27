import React from 'react';
import { StyleSheet } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import {
  HighlightCards,
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  UserWrapper,
  Icon,
  Transactions,
  Title,
  TransactionsList
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: 'positive',
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign"
      },
      date: "13/04/2020"
    },
    {
      id: "2",
      type: 'negative',
      title: "Haburgueria Pizzy",
      amount: "R$ 59,00",
      category: {
        name: "Alimentação",
        icon: "coffee"
      },
      date: "10/04/2020"
    },
    { 
      id: "3",
      type: 'negative',
      title: "Aluguel do Apartamento",
      amount: "R$ 1.200",
      category: {
        name: "Compras",
        icon: "shopping-bag"
      },
      date: "10/04/2020"
    },
  ]


  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/54581169?v=4' }}
            />
            <User>
              <UserGretting>
                Olá
              </UserGretting>
              <UserName>
                Alysson
              </UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards >
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={item => item.id }
          renderItem={({ item }) => (
            <TransactionCard
              data={item}
            />
          )}
        />
      </Transactions>
    </Container>
  )
};
