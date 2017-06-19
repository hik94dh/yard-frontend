import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
