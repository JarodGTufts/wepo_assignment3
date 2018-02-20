import React from 'react';
import Messenger from '../components/messenger/messenger.component';

class Chat extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <div className="row">
                    //Userlist
                    </div>
                    <div className="row">
                    //Roomlist
                    </div>
                </div>
                <div className="col-6">
                    <Messenger
                        service = {this.props.service}
                        activeRoom = {this.props.activeRoom}
                        onJoinRoom = {this.props.onJoinRoom}
                        username = {this.props.username}
                    />
                </div>
                <div className="col-3">
                    <div className="row">
                    //UserlistInRoom
                    </div>
                    <div className="row">
                    //BannedUserlistInRoom
                    </div>
                </div>
            </div>
        );
    }
};

export default Chat;