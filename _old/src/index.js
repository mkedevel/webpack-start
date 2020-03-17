import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './styles/fonts.scss';
import './styles/index.scss';

import App from './app/app.jsx';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<App/>, document.getElementById('root'));
});
