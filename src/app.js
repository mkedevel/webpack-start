/* import start */
import 'normalize.css';
import './styles/fonts.scss';
import './styles/index.scss';

import Menu from './components/menu/menu'; // test
/* import end */

/* DOM loaded */
document.addEventListener("DOMContentLoaded", function() {
	console.log('DOM loaded, in index.js');
	let menu = new Menu(['home', 'about us', 'feedback'], 'css-menu-class')
	let body = document.body;
	body.appendChild(menu);
});