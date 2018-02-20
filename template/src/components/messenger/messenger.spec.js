import Messenger from './messenger.component.js';
import React from 'react';


import { shallow } from 'enzyme';

describe('Messenger client tests', () => {

    const name = 'Jarod';

    function create_message(sender, msg) {
        var new_message = {};

        new_message.nick = sender;
        new_message.message = msg;
        return new_message;
    }

    // Create a message list to feed into the Messenger as a prop
    var msg_list = [];

    msg_list.push(create_message('Jack', 'Time to go up the hill for some water'));
    msg_list.push(create_message('Jill', '*on crutches* Im not running this time'));

    const mock_service = {};
    mock_service.register = jest.fn();

    const component = shallow(<Messenger sender={name} service={mock_service} />);

    // Spoof in some messages
    component.setState({messages: msg_list});

    it('should register sent messages', () => {

        expect(component.state('messages')[0].nick).toEqual(msg_list[0].nick);
        expect(component.state('messages')[0].message).toEqual(msg_list[0].message);
        expect(component.state('messages')[1].nick).toEqual(msg_list[1].nick);
        expect(component.state('messages')[1].message).toEqual(msg_list[1].message);

    });
});