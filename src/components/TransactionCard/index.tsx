import React from 'react';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from './styles'

//adiciona o id as props e exporta para ser consumida pela lita no Dashboard
export interface TransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: CategoryProps,
  date: string;
}

interface CategoryProps {
  name: string;
  icon: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>
        {data.title}
      </Title>

      <Amount type={data.type}>
        { data.type === 'negative' && '- '}
        { data.amount }
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>
            {data.category.name}
          </CategoryName>
        </Category>

        <Date>
          {data.date}
        </Date>

      </Footer>
    </Container>
  )
}