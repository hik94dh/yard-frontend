import React from 'react';
import arrow from './i/arrow.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              <h4 className="footer-title">ООО «Ярд»</h4>
              <p className="footer-contact">ОГРН 1175074002531</p>
              <p className="footer-contact">ИНН 5036165365</p>
              <p className="footer-contact footer-number">+7 (999) 821-14-88</p>
            </div>
            <div className="col-xs-2 col-xs-offset-2">
              <h4 className="footer-title footer-line">Жилые комплексы</h4>
              <nav>
                <a href="#" className="footer-menu_link">ВТБ Арена Парк</a>
                <a href="#" className="footer-menu_link">Садовые кварталы</a>
                <a href="#" className="footer-menu_link">Резиденция Монэ</a>
                <a href="#" className="footer-menu_link footer-menu_all">Все ЖК Москвы
                  <img src={arrow} className="arrow" />
                </a>
              </nav>
            </div>
            <div className="col-xs-2">
              <h4 className="footer-title footer-line">Компания</h4>
              <nav className="footer-menu">
                <a href="#" className="footer-menu_link">Команда</a>
                <a href="#" className="footer-menu_link">О компании</a>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-8 col-xs-offset-4">
              <p className="footer-info">Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной&nbsp;офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017</p>
            </div>
          </div>
        </div>
      </footer>
  );
};
