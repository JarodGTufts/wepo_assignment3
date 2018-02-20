import React from 'react';
import Messenger from '../components/messenger/messenger.component';
import Userlist from '../components/user-list/user-list.component';
import Roomlist from '../components/room-list/room-list.component';

class Chat extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.activeRoom);
        console.log(this.props.userImChattingWith);
        return (
            <div className="container-fluid p-3">
                <div className="row p-3">
                    <div className="col-3">
                        <div className="row">
                            <Userlist
                                service={this.props.service}
                                onPrivateChat={this.props.onPrivateChat}
                                userImChattingWith={this.props.userImChattingWith}
                                username={this.props.username}
                                updateMessages={this.props.updateMessages}
                            />
                        </div>
                        <div className="row">
                            <Roomlist
                                service={this.props.service}
                                activeRoom={this.props.activeRoom}
                                onJoinRoom={this.props.onJoinRoom}
                                username={this.props.username}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <Messenger
                            service={this.props.service}
                            activeRoom={this.props.activeRoom}
                            userImChattingWith={this.props.userImChattingWith}
                            onJoinRoom={this.props.onJoinRoom}
                            username={this.props.username}
                            messages={this.props.messages}
                            mode={(this.props.userImChattingWith === undefined ? 'roomchat': 'privatechat')}
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
            </div>
        );
    }

};

export default Chat;