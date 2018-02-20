import React from 'react';

class User extends React.Component {

    constructor(props) {
        super(props);
        props.service.register('recv_privatemsg', this.onReceivePrivateMessage.bind(this));
        props.service.register('send_privatemsg', this.onSendPrivateMessage.bind(this));
        this.state = {
            privateMessages : [],
            unreadMessages : 0
        }
    }

    render() {
        let username = this.props.username;
        return (
    
            <div className='list-group-item user' onClick={this.onClick.bind(this)}>
                {username} <div className="unread-msg">{this.state.unreadMessages}</div>
            </div>
        );
    }

    onReceivePrivateMessage(sender, receiver, message) {
        if(this.props.name === sender || this.props.name === receiver) {
            var newState = this.state;
            if(this.props.username === sender)
                newState.unreadMessages += 1;
            newState.privateMessages.push({
                message: message,
                nick: sender
            });
            if(this.props.userImChattingWith === this.props.username) {
                this.props.updateMessages(this.state.privateMessages);
                newState.unreadMessages = 0;
            }
            this.setState(newState);
        }
    }

    onSendPrivateMessage(sender, receiver, message) {
        var newState = this.state;
        newState.privateMessages.push({
            message: message,
            nick: sender
        });
        this.setState(newState);
        if(this.props.userImChattingWith === this.props.username) {
            this.props.updateMessages(this.state.privateMessages);
        }
    }

    onClick() {
        if(this.props.name === this.props.username) {
            alert('Cannot chat with yourself');
        } else {
            this.props.onClick(this.props.username, this.state.privateMessages);
            var newState = this.state;
            newState.unreadMessages = 0;
            this.setState(newState);
        }

    }
}

export default User;