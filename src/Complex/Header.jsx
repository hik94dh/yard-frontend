import React from 'react';
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  padding-bottom: 0.8rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-family: 'Philosopher', sans-serif;
  margin-bottom: 1rem;
  margin-right: 3rem;
  line-height: 1.13;

  &:last-child {
    padding-left: 22px;
  }
`;

const Small = styled.small`
  color: #a9afb6;
  font-family: 'Fira Sans', sans-serif;
  display: block;
  margin-top: 10px;
  font-weight: 300;
  font-size: 14px;
`;

export default () => {
  return (
      <Header>
        <Title>950 <Small class="summary-title_about">предложений</Small></Title>
        <Title>John McAslan + Partners <Small>архитектор</Small></Title>
        <Title>Группа «ПСН»<Small>застройщик</Small></Title>
      </Header>
  );
};
