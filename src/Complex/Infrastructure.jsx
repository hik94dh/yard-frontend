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

const Text = styled.p`
  padding-bottom: .5rem;
  line-height: 1.4;
`;


export default () => {
  return (
      <Section>
        <Title>Инфраструктура</Title>
        <Row>
          <Col xs={2}>
            <Text>Бассейн</Text>
          </Col>
          <Col xs={2}>
            <Text>Детский сад</Text>
          </Col>
          <Col xs={2}>
            <Text>Частная школа</Text>
          </Col>
          <Col xs={2}>
            <Text>Бассейн</Text>
          </Col>
          <Col xs={2}>
            <Text>Детский сад</Text>
          </Col>
          <Col xs={2}>
            <Text>Частная школа</Text>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Text>Частная школа</Text>
          </Col>
          <Col xs={2}>
            <Text>Частная школа</Text>
          </Col>
          <Col xs={2}>
            <Text>Частная школа</Text>
          </Col>
        </Row>
      </Section>
  );
};
