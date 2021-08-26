import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  UserWrapper
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
        </UserWrapper>
      </Header>
    </Container>
  )
};
