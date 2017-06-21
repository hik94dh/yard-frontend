import React from 'react';
import styled from "styled-components";

const HeroUnit = styled.div`
  max-width: 790px;
  margin: 0 auto;
  padding: 5rem 0 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--charcoal-grey);
  text-align: center;
  padding-bottom: 8px;
`;

const Description = styled.p`
  line-height: 1.5;
  text-align: center;
  color: var(--charcoal-grey);
  padding-bottom: 16px;
`;

const Button = styled.button`
  padding: 13px 0;
  text-align: center;
  background-color: #000000;
  border-radius: 2px;
  outline: none;
  border: none;
  color: #fff;
  font-family: 'Fira Sans', sans-serif;
  padding: 13px 31px;
  line-height: 1;

  &:hover {
    opacity: 0.8;
  }
`;


export default () => {
  return (
    <HeroUnit>
      <Title>Discover Our New Developments</Title>
      <Description>Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</Description>
      <Button>Contact The Team</Button>
    </HeroUnit>
  );
};