import React from 'react';
import Card from './Cards/Card';
import Card2 from './Cards/Card2';

export default () => {
  return (
      <main>
        <div className="hero-unit">
          <h2 className="hero-unit_title">Discover Our New Developments</h2>
          <p className="hero-unit_description">Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</p>
          <button className="hero-unit_btn">Contact The Team</button>
        </div>
        <Card />
        <Card2 />
      </main>
  );
};
