import Message from './message.component.js';
import React from 'react';

import { shallow } from 'enzyme';

describe('Individual message tests', () => {

    // Create a new message with a known message string and senders
    const my_message = "Who's on first?";
    const component = shallow(<Message sender={'Abbot'} myName={'Costello'} message={my_message} />);

    // Check that the message is shown
    it('should display a message', () => {
        expect(component.contains(my_message)).toBe(true);
    });

    // Check that the message was identified as not coming from the current user
    it('should recognize that the sender is not the current user', () => {
        expect(component.find('li').first().hasClass('other-message')).toBe(true);
    });

    // Create a new message, with the same sender and myName values
    const self_message = shallow(<Message sender={'Abbot'} myName={'Abbot'} message={'*Wait, I thought he was on second...*'} />);

    // Check that the message has the correct class for a message sent by yourself
    it('should recognize that a message was sent by the current user', () => {
        expect(self_message.find('li').first().hasClass('my-message')).toBe(true);
    });
});