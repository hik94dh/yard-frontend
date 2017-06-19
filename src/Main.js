import React from 'react';
import build1 from './i/build.jpg';
import build2 from './i/build-2.jpg';
import build3 from './i/build-3.jpg';

import { Grid, Row, Col } from 'react-flexbox-grid';


export default () => {
  return (
      <main>
        <div className="hero-unit">
          <h2 className="hero-unit_title">Discover Our New Developments</h2>
          <p className="hero-unit_description">Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</p>
          <button className="hero-unit_btn">Contact The Team</button>
        </div>
        <a href="#" className="card">
          <img src={build1} className="card-img" />
          <div className="card-info">
            <p className="card-info_place">SOUTH BEACH, SAN FRANCISCO</p>
            <h3 className="card-info_title">764 Metropolitan Avenue</h3>
            <p className="card-info_text"> The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments.</p>
          </div>
        </a>
        <a href="#" className="card">
          <img src={build2} className="card-img" />
          <div className="card-info">
            <p className="card-info_place">MIDTOWN EAST, MANHATTAN</p>
            <h3 className="card-info_title">100 East 53rd Street</h3>
            <p className="card-info_text"> One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned.</p>
          </div>
        </a>
        <a href="#" className="card">
          <img src={build3} className="card-img" />
          <div className="card-info">
            <p className="card-info_place">NOLITA, MANHATTAN</p>
            <h3 className="card-info_title">152 Elizabeth</h3>
            <p className="card-info_text"> 152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the industrial character of the neighborhood.</p>
          </div>
        </a>
      </main>
  );
};
