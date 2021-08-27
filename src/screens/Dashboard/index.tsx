import React from 'react';
import { StyleSheet } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
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
  Title
} from './styles';

export function Dashboard() {
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
        <TransactionCard />
      </Transactions>
    </Container>
  )
};
