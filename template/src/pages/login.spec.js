import Login from './login.js';
import React from 'react';

import { shallow } from 'enzyme';

describe('Login page tests', () => {

    const spoof = jest.fn();
    const component = shallow(<Login loginCallback={spoof}/>);

    it('should render the login description', () => {
        expect(component.contains(<h1>Welcome to this dope chat!</h1>)).toBe(true);
    });

});