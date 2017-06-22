import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'react-flexbox-grid';

const Section = styled.section``;

const Title = styled.h2`
  font-size: 1.5rem;
  font-family: 'Philosopher', sans-serif;
  margin-bottom: 1rem;
  margin-right: 3rem;
  line-height: 1.13;
`;

const Dl = styled.dl`
  display: flex;
  margin: 0 0 11px;
`;

const Dt = styled.dt`
  width: 46%;
  color: #a9afb6;
  line-height: 1.38;
`;

const DD = styled.dd`
  width: 53%;
  font-weight: 500;
  line-height: 1.56;
`;

export default () => {
  return (
    <Section>
    <Title>Характеристики</Title>
    <Row>
      <Col xs={4}>
        <Dl>
          <Dt>Количество квартир:</Dt>
          <DD>1 503</DD>
        </Dl>
      </Col>
      <Col xs={4}> 
        <Dl>
          <Dt>Количество квартир:</Dt>
          <DD>1 503</DD>
        </Dl>
      </Col>
      <Col xs={4}> 
        <Dl>
          <Dt>Количество квартир:</Dt>
          <DD>1 503</DD>
        </Dl>
      </Col>
    </Row>
    <Row>
      <Col xs={4}> 
        <Dl>
          <Dt>Статус:</Dt>
          <DD>Квартиры</DD>
        </Dl>
      </Col>
      <Col xs={4}> 
        <Dl>
          <Dt>Количество квартир:</Dt>
          <DD>1 503</DD>
        </Dl>
      </Col>
      <Col xs={4}> 
        <Dl>
          <Dt>Количество квартир:</Dt>
          <DD>1 503</DD>
        </Dl>
      </Col>
    </Row>
    <Row>
      <Col xs={4}> 
        <Dl>
          <Dt>Цены:</Dt>
          <DD>от 5.3 до 143.5 млн</DD>
        </Dl>
      </Col>
      <Col xs={4}> 
        <Dl>
          <Dt>Количество квартир:</Dt>
          <DD>1 503</DD>
        </Dl>
      </Col>
      <Col xs={4}> 
        <Dl>
          <Dt>Количество квартир:</Dt>
          <DD>1 503</DD>
        </Dl>
      </Col>
    </Row>
    </Section>
  );
};
