import React from 'react';
import styled from "styled-components";
import { Grid, Row, Col } from 'react-flexbox-grid';

const Section = styled.section`
  background-color: #3e4247;
  padding: 4rem 0 13.2rem;
`;

const Place = styled.p`
  font-family: 'Philosopher', sans-serif;
  font-size: 1.5rem;
  color: #a9afb6;
  font-weight: bold;
  padding-top: 7.4rem;
`;

const Title = styled.h2`
  font-family: 'Philosopher', sans-serif;
  font-size: 3rem;
  color: #fff;
  line-height: 1.25;
  padding: 3rem 0;
`;

const Link = styled.a`
  color: #00779a;
`;

const Image = styled.img`
  width: 100%;
  width: 100%;
`;

export default () => {
  return (
    <Section>
      <Grid>
        <Row>
          <Col xs={6}>
            <Place>Якиманка</Place>
            <Title>Исторический центр Москвы в двух километрах&nbsp;от Кремля</Title>
            <Link>Гид по Якиманке →</Link>
          </Col>
          <Col xs={6}>
            <Image src={`${process.env}/i/guide.jpg`}  alt="guide" />
          </Col>
        </Row>
      </Grid>
    </Section>
  )
};
