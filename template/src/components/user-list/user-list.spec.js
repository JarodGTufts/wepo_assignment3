import UserList from './user-list.component.js';
import React from 'react';

import { shallow } from 'enzyme';

describe('List of users tests', () => {

    const mockService = {};
    mockService.register = jest.fn();

    const component = shallow(<UserList service={mockService} />);

    var spoofList = ['Sam', 'Jackson', 'Sally'];


    // Spoof the process of updating users
    component.setState({users: spoofList});

    it('should display the proper number of users', () => {

        expect(component.state('users')).toHaveLength(spoofList.length);

    });

});