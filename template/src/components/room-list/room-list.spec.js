import RoomList from './room-list.component.js';
import Room from '../room/room.component.js';
import React from 'react';


import { shallow } from 'enzyme';

describe('Room list tests', () => {
    
    const mockService = {};
    mockService.register = jest.fn();

    const component = shallow(<RoomList service={mockService} />);

    var roomList = [];
    for (let i = 0; i < 4; i++) {
        var newName = 'room' + i
        roomList.push(shallow(<Room roomName={newName} locked={false} />));
    }

    component.setState({ rooms: roomList });

    it('should contain a set of rooms', () => {

        expect(component.state().rooms).toHaveLength(roomList.length);

    });

    it('should display the proper names for proper rooms', () => {

        for (let i = 0; i < 4; i++) {
            expect(component.state().rooms[i].contains('room'+i)).toBe(true);
        }
    });

});