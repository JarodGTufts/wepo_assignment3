import Room from './room.component.js';
import React from 'react';


import { shallow } from 'enzyme';

describe('Room creation tests', () => {

    // http://goodriddlesnow.com/riddles/view/2340
    const firstName = 'A room with a lion that hasnt been fed for two months';
    const secondName = 'A room with ninja assasins';
    //const thirdName = 'A room with a raging inferno';

    const firstComponent = shallow(<Room roomName={firstName} locked={false} />);

    const secondComponent = shallow(<Room roomName={secondName} locked={true} />);

    it('should render a new public room', () => {

        expect(firstComponent.contains(firstName)).toBe(true);
        expect(firstComponent.contains('--LOCKED--')).toBe(false);

    });

    it('should render a private room too', () => {

        expect(secondComponent.contains(secondName)).toBe(true);
        expect(secondComponent.contains(' --LOCKED--')).toBe(true);
    });

});