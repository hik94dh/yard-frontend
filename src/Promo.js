import React from 'react';
import PromoLogo from './i/promo-logo.svg';

export default () => {
  return (
      <section className="promo">
          <div className="container">
            <img src={PromoLogo} className="promo-logo" alt="logo" />
          </div>
      </section>
  );
};
