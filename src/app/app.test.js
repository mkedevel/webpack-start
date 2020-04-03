import React from 'react';
import {configure} from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import App from './app.jsx';
configure({adapter: new Adapter()});

describe('<App />', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<App />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});