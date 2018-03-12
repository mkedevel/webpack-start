import './styles/menu.scss';

export default function Menu (array, className) {
	var menu = document.createElement('ul');
	menu.className = className;

	var listItems = '';

	array.forEach(function(item) {
		listItems += '<li><a href="#" title="' + item + '">' + item + '</a></li>';
	});

	menu.innerHTML = listItems;

	return menu;
}