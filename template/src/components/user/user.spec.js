import User from './user.component.js';
import React from 'react';

import { shallow } from 'enzyme';

describe('Single user display tests', () => {

    const mockService = {};
    mockService.register = jest.fn();

    const testName = 'Theodore'
    const component = shallow(<User username={testName} mode={'normal'} service={mockService} />);



    it('should render a component with the given username', () => {

        expect(component.contains(testName)).toBe(true);

    });

});