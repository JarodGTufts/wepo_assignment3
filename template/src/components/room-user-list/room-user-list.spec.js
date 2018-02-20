import RoomUserList from './room-user-list.component.js';
import React from 'react';


import { shallow } from 'enzyme';

describe('List users in room tests', () => {

    var mockService = {};
    mockService.register = jest.fn();

    const component = shallow(<RoomUserList service={mockService} />);

    component.setState({activeUsers: ['Jim', 'Joe']});
    component.setState({banned: ['Jackson', 'Jimson']});

    it('should display a list of users in the current room', () => {
        expect(component.state('activeUsers')).toHaveLength(2);
    });


    it('should display a list of banned users in the current room', () => {
        expect(component.state('banned')).toHaveLength(2);
    });

});