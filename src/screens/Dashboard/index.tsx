import React from 'react';
import { StyleSheet } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';
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
  Icon
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
      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  )
};
