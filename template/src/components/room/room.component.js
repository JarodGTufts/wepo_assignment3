import React from 'react';

class Room extends React.Component {

    constructor(props) {
        super(props);
    }

    newRoom() {
        this.props.service.joinRoom(this.props.roomName, this.props.onJoinRoom, () => { console.log('error') })
    }

    render() {

        let roomName = this.props.roomName;
        let locked = this.props.locked;
        if (locked) {
            return (
                <div onClick={this.newRoom.bind(this)} className='user'>
                    {roomName} --LOCKED--
                </div>
            );
        } else {
            return (
                <div onClick={this.newRoom.bind(this)} className='user'>
                    {roomName}
                </div>
            );
        }
    }
}

export default Room;