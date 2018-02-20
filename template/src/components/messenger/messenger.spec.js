import Messenger from './messenger.component.js';
import React from 'react';


import { shallow } from 'enzyme';

describe('Messenger client tests', () => {

    const name = 'Jarod';

    function createMessage(sender, msg) {
        var newMessage = {};

        newMessage.nick = sender;
        newMessage.message = msg;
        return newMessage;
    }

    // Create a message list to feed into the Messenger as a prop
    var msgList = [];

    msgList.push(createMessage('Jack', 'Time to go up the hill for some water'));
    msgList.push(createMessage('Jill', '*on crutches* Im not running this time'));

    const mockService = {};
    mockService.register = jest.fn();

    const component = shallow(<Messenger sender={name} service={mockService} />);

    // Spoof in some messages
    component.setState({messages: msgList});

    it('should register sent messages', () => {

        expect(component.state('messages')[0].nick).toEqual(msgList[0].nick);
        expect(component.state('messages')[0].message).toEqual(msgList[0].message);
        expect(component.state('messages')[1].nick).toEqual(msgList[1].nick);
        expect(component.state('messages')[1].message).toEqual(msgList[1].message);

    });
});