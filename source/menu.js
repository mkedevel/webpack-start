export default function (array, className) {
	var menu = document.createElement('ul');
	menu.сlassName = className;

	var listItems = '';

	array.forEach(function(item) {
		listItems += '<li><a href="#" title="' + item + '">' + item + '</a></li>';
	});

	menu.innerHTML = listItems;

	return menu;
}