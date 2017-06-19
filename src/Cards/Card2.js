import React from 'react';
import build2 from './i/build-2.jpg';
// import build3 from './i/build-3.jpg';
import CardInfo2 from './CardInfo2';

export default () => {
  return (
      <a href="" className="card">
        <img src={build2} className="card-img"  alt="card" />
        <CardInfo2 />
      </a>
  );
};
