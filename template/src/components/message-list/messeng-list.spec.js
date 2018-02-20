import MessageList from './messeng-list.component.js';
import React from 'react';

import { shallow } from 'enzyme';

describe('Message listing tests', () => {

    function createMessage(sender, msg) {
        var newMessage = {};

        newMessage.nick = sender;
        newMessage.message = msg;
        return newMessage;
    }

    // Create a message list to feed into the MessageList as a prop
    const msgList = [];

    msgList.push(createMessage('Goldilocks', 'Yo is this soup free?'));
    msgList.push(createMessage('Baby Bear', 'Touch that soup I dare you'));

    const component = shallow(<MessageList messages={msgList} />);

    // Ensure that the correct number of Message components are created
    it('should create two separate Message components', () => {
        expect(component.find('Message')).toHaveLength(msgList.length);
    });

    // Test the presence of the two message that were created
    it('should render the first message', () => {

        expect(component.find('Message').get(0).props.author).toBe(msgList[0].nick);
        expect(component.find('Message').get(0).props.message).toBe(msgList[0].message);
    });

    it('should also render the second message', () => {

        expect(component.find('Message').get(1).props.author).toBe(msgList[1].nick);
        expect(component.find('Message').get(1).props.message).toBe(msgList[1].message);
    });


});
