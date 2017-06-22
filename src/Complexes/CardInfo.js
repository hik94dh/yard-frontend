import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled(Link)`
  margin: 3rem auto;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  max-width: 1184px;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    transition: .5s cubic-bezier(0, 1, 1, 1);
  }
  &:last-child {
    margin-bottom: 6rem;
  }
`;

const Img = styled.img`
  height: 350px;
  width: 484px;
  flex-shrink: 0;
`;

const CardInfo = styled.div`
  background-color: #fff;
  max-width: 700px;
  width: 100%;
  text-align: left;
  padding: 1.5rem 2rem 0 2rem;
  border-bottom: 2px solid #646971;
`;

const Geo = styled.p`
  font-family: monaco, Consolas, 'Lucida Console', monospace;
  text-align: left;
  color: #646971;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1;
  color: #000000;
  padding-top: 24px;
  padding-bottom: 8px;
`;

const Info = styled.p`
  line-height: 1.5;
  color: #3e4247;
  padding-top: 8px;
`;

export default (props) => {
  return (
    <Card to={`/complex/${props.id}`}>
      <Img src={process.env.PUBLIC_URL + '.i/build-' + props.id +'.jpg'}  alt="card" />
      <CardInfo>
        <Geo>{props.adress}</Geo>
        <Title>{props.name}</Title>
        <Info>{props.text}</Info>
      </CardInfo>
    </Card>
  )
};