Webpack Build with React
=============================

<table align="center">
    <tr>
        <td>
            <img width="48" height="48" title="webpack" src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg">
        </td>
        <td>
            <img width="48" height="48" title="babel" src="https://cdn.worldvectorlogo.com/logos/babel-10.svg">
        </td>
        <td>
            <img width="48" height="48" title="react" src="https://cdn.worldvectorlogo.com/logos/react.svg">
        </td>
        <td>
            <img width="48" height="48" title="sass, scss" src="https://cdn.worldvectorlogo.com/logos/sass-1.svg">
        </td>
        <td>
            <img width="48" height="48" title="css3" src="https://cdn.worldvectorlogo.com/logos/css-3.svg">
        </td>
        <td>
            <img width="48" height="48" title="html5" src="https://cdn.worldvectorlogo.com/logos/html5.svg">
        </td>
    </tr>
</table>

### Code style
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

### Installation
Install:
```bash
npm install or yarn install
```

### Scripts
develop:
```bash
npm start or yarn start
```
build:
```bash
npm build or yarn build
```
test:
```bash
npm test or yarn test
```

### Plugins
* [mini-css-extract-plugin][mini-css-extract-plugin]
* [html-webpack-plugin][html-plugin]
* [clean-webpack-plugin][clean-webpack]

[html-plugin]: https://webpack.js.org/plugins/html-webpack-plugin
[mini-css-extract-plugin]: https://webpack.js.org/plugins/mini-css-extract-plugin
[clean-webpack]: https://webpack.js.org/guides/output-management/

### Loaders
* [babel-loader][babel-loader-link]
* [css-loader][css-loader-link]
* [postcss-loader][postcss-loader-link]
* [sass-loader][sass-loader-link]
* [style-loader][style-loader-link]

[babel-loader-link]: https://webpack.js.org/loaders/babel-loader
[css-loader-link]: https://webpack.js.org/loaders/css-loader
[postcss-loader-link]: https://webpack.js.org/loaders/postcss-loader
[sass-loader-link]: https://webpack.js.org/loaders/sass-loader
[style-loader-link]: https://webpack.js.org/loaders/style-loader

### Test
* [enzyme][enzyme]
* [enzyme-adapter-react-16][enzyme-adapter]
* [jest][jest]
* [react-test-renderer][react-test-renderer]

[enzyme]: https://enzymejs.github.io/enzyme/
[enzyme-adapter]: https://enzymejs.github.io/enzyme/docs/installation/react-16.html
[jest]: https://jestjs.io/docs/en/getting-started
[react-test-renderer]: https://ru.reactjs.org/docs/test-renderer.html

### Production
* React *16
* autoprefixer
* browserslist
    last 2 version
    &gt; 1%