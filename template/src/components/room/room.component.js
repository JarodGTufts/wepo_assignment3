import React from 'react';

class Room extends React.Component {

    constructor(props) {
        super(props);
    }

    newRoom() {
        this.props.service.joinRoom(this.props.roomName, this.props.onJoinRoom, () => { console.log('error') });
    }

    render() {

        let roomName = this.props.roomName;
        let locked = this.props.locked;

        if (locked) {
            return (
                <a href="#" onClick={this.newRoom.bind(this)} className='user list-group-item list-group-item-action'>
                    {roomName} --LOCKED--
                </a>
            );
        } else {
            return (
                <a href="#" onClick={this.newRoom.bind(this)} className='user list-group-item list-group-item-action'>
                    {roomName}
                </a>
            );
        }
    }
}

export default Room;