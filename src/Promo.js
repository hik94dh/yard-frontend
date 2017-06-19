import React from 'react';
import arrow from './i/arrow.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PromoLogo from './i/promo-logo.svg';

export default () => {
  return (
      <section className="promo">
          <div className="container">
            <img src={PromoLogo} className="promo-logo" />
          </div>
      </section>
  );
};
