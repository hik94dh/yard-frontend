import React from 'react';
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

const Section = styled.section`
  border-top: 1px solid #eaebf0;
  background-color: #fff;
  padding: 1.5rem 0 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Philosopher', sans-serif;
  margin-bottom: .5rem;
`;

const Adress = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #a9afb6;
  line-height: 1.57;
`;

const Button = styled.button`
  border: 1px solid #e0e0e1;
  border-radius: 2px;
  padding: 8px 16px;
  background-color: #fff;
  font-size: 10px;
  line-height: 1;
  font-weight: 300;
  color: #00779a;
  font-family: 'Fira Sans', sans-serif;
`;

export default () => {
  return (
    <Section>
      <Grid>
        <Wrapper>
          <div>
            <Title>Жилой комплекс «Полянка/44»</Title>
            <Adress>Район Якиманка, улица Большая Полянка, дом 44 &bull; 119180</Adress>
          </div>
          <Button>В избранное</Button>
        </Wrapper>
      </Grid>
    </Section>
  );
};
