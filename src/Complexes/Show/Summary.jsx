import React from 'react';
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import Header from './Header';
import Feature from './Feature';
import Description from './Description';
import Infrastructure from './Infrastructure';

const Summary = styled.section`
  background-color: #fff;
  padding-bottom: 3.3rem;
`;

const Line = styled.hr`
  margin: 0;
  border: 0;
  height: 1px;
  background-color: #e0e0e1;
  margin-bottom: 2.2rem;
`;


export default () => {
  return (
  <Summary>
    <Grid>
      <Header />
      <Line />
      <Feature />
      <Description />
      <Line />
      <Infrastructure />
    </Grid>
  </Summary>
  );
};
