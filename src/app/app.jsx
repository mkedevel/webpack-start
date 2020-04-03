import React from 'react';
import './styles/app.scss';

export default function App() {
	const toolings = [
		{name: 'webpack', src: 'https://cdn.worldvectorlogo.com/logos/webpack-icon.svg'},
		{name: 'babel', src: 'https://cdn.worldvectorlogo.com/logos/babel-10.svg'},
		{name: 'react', src: 'https://cdn.worldvectorlogo.com/logos/react.svg'},
		{name: 'sass, scss', src: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg'},
		{name: 'css3', src: 'https://cdn.worldvectorlogo.com/logos/css-3.svg'},
		{name: 'html5', src: 'https://cdn.worldvectorlogo.com/logos/html5.svg'}
	];

	return (
		<div className="app">
			<h1>Webpack Build with React 16.13.0</h1>
			<p>Hi, this small build on webpack 4 will help create any front-end application</p>
			<h2>Tools</h2>
			<ul className="app-tools">
				{toolings.map(tool => (
					<li key={tool.name} className="app-tools__item">
						<img title={tool.name} src={tool.src}/>
					</li>
				))}
			</ul>
			<ul className="app-contacts">
				<li>github: <a href="//github.com/resetus/webpack-start">webpack-start</a></li>
				<li>author: <a href="//github.com/resetus">resetus</a></li>
			</ul>
		</div>
	);
}
