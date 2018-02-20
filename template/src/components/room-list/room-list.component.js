import React from 'react';
import Room from '../room/room.component';

class Roomlist extends React.Component {

    constructor(props) {
        super(props);
        props.service.register('roomlist', this.updateRoomlist.bind(this));
        this.state = {
            newRoomName: '',
            rooms: {}
        };
    }

    render() {
        let room = [];
        Object.keys(this.state.rooms).map((key, index) => {
            room.push(
                <Room
                    service={this.props.service}
                    onJoinRoom={this.props.onJoinRoom}
                    roomName={key}
                    key={'room' + index}
                />)

        });

        // Return a new list of all of the messages
        return (
            
            <div className='roomlist-newroom'>
                <div className="h3">Active Rooms</div>
                <div className='roomlist-element' >
                    <ul className="list-group pb-2 room__list">
                        {room}
                    </ul>
                </div>
                <div className="input-group">
                    <input type="text" className="form-control" ref={'newroomname'} placeholder="New Room" aria-label="newroom" aria-describedby="basic-addon1" onChange={(e) => this.setState({ newRoomName: e.value })}
                    />
                    <input type="submit" className="btn btn-primary" value="NewRoom" onClick={this.newRoom.bind(this)} />
                </div>
            </div>
        );
    };

    newRoom() {
        this.props.service.joinRoom(this.refs.newroomname.value, this.props.onJoinRoom, () => { console.log('error') })
    }

    updateRoomlist(newRoomlist) {
        let newState = this.state;
        newState.rooms = newRoomlist;
        this.setState(newState);
    };
};

export default Roomlist;