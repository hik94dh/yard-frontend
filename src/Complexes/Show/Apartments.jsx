import React from 'react';
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Section = styled.section`
  background-color: #f4f5f9;
  padding: 4rem 4rem 3.8rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-family: 'Philosopher', sans-serif;
  text-align: center;
  line-height: 1.5;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 1.5rem 2rem;
  margin-top: 1.4rem;
  max-width: 384px;
  text-align: left;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-family: 'Philosopher', sans-serif;
`;

const CardProp = styled.p`
  color: #a9afb6;
  line-height: 1.38;
  padding-top: 1.5rem;
  padding-bottom: .5rem;
`;

const CardAmount = styled.p`
  line-height: 1.5;
`;

const ButtonWrap = styled.div`
  text-align: center; 
`;

const Button = styled.button`
  margin-top: 2rem;
  border-radius: 2px;
  background-color: #000000;
  border: none;
  color: #fff;
  padding: 0.7rem 2rem;
  font-family: 'Fira Sans', sans-serif;
`;


export default () => {
  return (
    <Section>
      <Grid>
        <Title>Предложения в ЖК «Полянка/44»</Title>
        <Row>
          <Col xs={4}>
            <Card>
              <CardTitle>1-комнатные квартиры</CardTitle>
              <CardProp>Площадь</CardProp>
              <CardAmount>от 59 до 120 м²</CardAmount>
              <CardProp>Стоимость</CardProp>
              <CardAmount>от 20.3 до 84.2 млн руб</CardAmount>
              <ButtonWrap>
                <Button>Посмотреть предложения</Button>
              </ButtonWrap>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <CardTitle>2-комнатные квартиры</CardTitle>
              <CardProp>Площадь</CardProp>
              <CardAmount>от 59 до 120 м²</CardAmount>
              <CardProp>Стоимость</CardProp>
              <CardAmount>от 20.3 до 84.2 млн руб</CardAmount>
              <ButtonWrap>
                <Button>Посмотреть предложения</Button>
              </ButtonWrap>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <CardTitle>3-комнатные квартиры</CardTitle>
              <CardProp>Площадь</CardProp>
              <CardAmount>от 59 до 120 м²</CardAmount>
              <CardProp>Стоимость</CardProp>
              <CardAmount>от 20.3 до 84.2 млн руб</CardAmount>
              <ButtonWrap>
                <Button>Посмотреть предложения</Button>
              </ButtonWrap>
            </Card>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};
