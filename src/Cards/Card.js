import React from 'react';
import build1 from './i/build.jpg';
import CardInfo from './CardInfo';

export default () => {
  return (
      <a href="" className="card">
        <img src={build1} className="card-img"  alt="card" />
        <CardInfo />
      </a>
  );
};
