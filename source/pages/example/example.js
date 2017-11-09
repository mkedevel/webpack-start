import createMenu from '../../components/menu/menu';
import './example.scss';

var menu = createMenu(['Главная','Обо мне','Портфолио'], 'nav-menu');
document.body.appendChild(menu);

console.log('in example.js');