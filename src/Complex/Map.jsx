import React from 'react';
import styled from "styled-components";
import { Grid, Row, Col } from 'react-flexbox-grid';

const Section = styled.section`
  background-color: #fff;
  padding-bottom: 3.6rem;
`;

const Image = styled.img`
  margin-top: -9.5rem;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
  width: 100%;
`;

const Wrapper= styled.div`
  margin-top: -9.5rem;
  background-color: #fff;
  height: 315px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
`;

const Title= styled.h4`
  font-weight: 500;
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  line-height: 1.4;
`;

const Prop= styled.p`
  color: #a9afb6;
  padding-top: .5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e1;
  padding-left: 1.5rem;
  line-height: 1.4;
  &:last-child{
    border-bottom: none;
  }
`;

export default () => {
  return (
    <Section>
      <Grid>
        <Row>
          <Col xs={6}>
            <Image src={`${process.env}/i/map.jpg`}  alt="map" />
          </Col>
          <Col xs={6}>
            <Wrapper>
              <Title>Красный Октябрь</Title>
              <Prop>24 минуты, 6 км</Prop>
              <Title>World class</Title>
              <Prop>24 минуты, 6 км</Prop>
              <Title>Третьяковская галерея</Title>
              <Prop>24 минуты, 6 км</Prop>
            </Wrapper>
          </Col>
        </Row>
      </Grid>
    </Section>
  )
};
