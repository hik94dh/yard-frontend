import React from 'react';
import styled from 'styled-components'
import PromoLogo from './i/promo-logo.svg';
import { Grid } from 'react-flexbox-grid';

const Section = styled.section`
  background-color: #161616;
  text-align: center;
`;

const Logo = styled.img`
  width: 418.9px;
  height: 131px;
  object-fit: contain;
  margin: 80px 0;
`;

export default () => {
  return (
    <Section>
        <Grid>
          <Logo src={PromoLogo} alt="logo" />
        </Grid>
    </Section>
  );
};
