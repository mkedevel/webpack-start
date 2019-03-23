/* import start */
import 'normalize.css';
import './styles/fonts.scss';
import './styles/index.scss';
/* import end */

/* DOM loaded */
document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM loaded, in index.js');

	const helloWorld = (`
		<div class="hello-world">
			<h1>Hello World!</h1>
			<p>Webpack 4 + React 16</p>
		</div>
	`).trim();

	document.body.innerHTML = helloWorld;
});
