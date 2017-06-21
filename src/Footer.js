import React  from "react";
import styled from "styled-components";
import arrow from './i/arrow.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Footer = styled.footer`
  background-color: #111111;
  padding: 2rem 0;
`;

const Copyright = styled.p`
  font-size: 11px;
  font-weight: 300;
  text-align: left;
  color: #a9afb6;
  line-height: 1.6;
  padding-top: 6rem;
`;

const Title = styled.h4`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  color: #646971;
  padding-bottom: 8px;
  height: 22px;
`;

const ArrowImg = styled.img`
  width: 8.8px;
  height: 8px;
  object-fit: contain;
  position: relative;
  left: 8px;
`
const Link = styled.a`
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  color: #ffffff;
  display: block;
  margin-top: 6px;
  height: 22px;
  &:hover {
     opacity: 0.8;
  }
`;

const Line = styled.hr`
  height: 2px;
  border-style: none;
  background-color: #3e4247;
  margin: 0;
  margin-bottom: 18px;
`;

const Contact = styled.p`
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  color: #a9afb6;
  height: 22px;
  padding-top: 4px;
  &:last-child {
    padding-top: 16px;
  }
`;

const ApartmentLink = styled.a`
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  color: #ffffff;
  display: block;
  margin-top: 16px;
  height: 22px;
  &:hover {
     opacity: 0.8;
  }
`;

export default () => {
  return (
    <Footer>
      <Grid>
        <Row>
          <Col xs={2}>
            <Title>ООО «Ярд»</Title>
            <Contact>ОГРН 1175074002531</Contact>
            <Contact>ИНН 5036165365</Contact>
            <Contact>+7 (999) 821-14-88</Contact>
          </Col>
          <Col xs={2} xsOffset={2}>
              <Line />
              <Title>Жилые комплексы</Title>
              <Link href="" >ВТБ Арена Парк</Link>
              <Link href="" >Садовые кварталы</Link>
              <Link href="" >Резиденция Монэ</Link>
              <ApartmentLink href="">Все ЖК Москвы
                <ArrowImg src={arrow} alt="arrow" />
              </ApartmentLink>
          </Col>
          <Col xs={2}>
            <Line />
            <Title>Компания</Title>
            <Link href="" >Команда</Link>
            <Link href="" >О компании</Link>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={4}>
            <Copyright>
            Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной&nbsp;офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017
            </Copyright>
          </Col>
        </Row>
      </Grid>
    </Footer>
  )
};
