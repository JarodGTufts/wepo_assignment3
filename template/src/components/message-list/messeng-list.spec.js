import MessageList from './messeng-list.component.js';
import React from 'react';

import { shallow } from 'enzyme';

describe('Message listing tests', () => {

    function create_message(sender, msg) {
        var new_message = {};

        new_message.nick = sender;
        new_message.message = msg;
        return new_message;
    }

    // Create a message list to feed into the MessageList as a prop
    const msg_list = [];

    msg_list.push(create_message('Goldilocks', 'Yo is this soup free?'));
    msg_list.push(create_message('Baby Bear', 'Touch that soup I dare you'));

    const component = shallow(<MessageList messages={msg_list} />);

    // Ensure that the correct number of Message components are created
    it('should create two separate Message components', () => {
        expect(component.find('Message')).toHaveLength(msg_list.length);
    });

    // Test the presence of the two message that were created
    it('should render the first message', () => {

        expect(component.find('Message').get(0).props.author).toBe(msg_list[0].nick);
        expect(component.find('Message').get(0).props.message).toBe(msg_list[0].message);
    });

    it('should also render the second message', () => {

        expect(component.find('Message').get(1).props.author).toBe(msg_list[1].nick);
        expect(component.find('Message').get(1).props.message).toBe(msg_list[1].message);
    });


});
