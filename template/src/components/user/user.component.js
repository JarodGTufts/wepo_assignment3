import React from 'react';

class User extends React.Component {

    constructor(props) {
        super(props);
        if (props.mode === 'normal') {
            props.service.register('recv_privatemsg', this.onReceivePrivateMessage.bind(this));
            props.service.register('send_privatemsg', this.onSendPrivateMessage.bind(this));
            this.state = {
                privateMessages: [],
                unreadMessages: 0
            }
        }
    }

    render() {
        let username = this.props.username;
        let mode = this.props.mode;
        if (mode === 'normal') {
            return (
                <div className='list-group-item-info list-group-item-action p-1 text-center user' onClick={this.onClick.bind(this)}>
                    {username}  &nbsp; <span className="badge badge-primary badge-pill">{this.state.unreadMessages}</span>
                </div>
            );
        } else if (mode === 'admin') {
            if (this.props.isAdmin) {
                return (
                    <div className='list-group-item-info list-group-item-action p-1 text-center user'>
                        {username}
                        <button onClick={this.onMakeUser.bind(this)}>UnOp</button>
                    </div>);
            } else {
                return (
                    <div className='list-group-item-info list-group-item-action p-1 text-center user'>
                        {username}
                        <button onClick={this.onBan.bind(this)}>Ban</button>
                        <button onClick={this.onKick.bind(this)}>Kick</button>
                        <button onClick={this.onMakeAdmin.bind(this)}>Op</button>
                    </div>);
            }
        } else if (mode === 'roomview') {
            return (
                <div className='list-group-item-info list-group-item-action p-1 text-center user'>
                    {username}
                </div>);
        } else if (mode === 'banned') {
            if (!this.props.isClientAdmin) {
                return (
                    <div className='list-group-item-info list-group-item-action p-1 text-center banneduser'>
                        {username}
                    </div>);
            } else {
                return (
                    <div className='list-group-item-info list-group-item-action p-1 text-center banneduser'>
                        {username}
                        <button onClick={this.onUnban.bind(this)}>Unbann</button>
                    </div>);
            }
        }
    }

    onReceivePrivateMessage(sender, receiver, message) {
        if (this.props.name === sender || this.props.name === receiver) {
            var newState = this.state;
            if (this.props.username === sender)
                newState.unreadMessages += 1;
            newState.privateMessages.push({
                message: message,
                nick: sender
            });
            if (this.props.userImChattingWith === this.props.username) {
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
        if (this.props.userImChattingWith === this.props.username) {
            this.props.updateMessages(this.state.privateMessages);
        }
    }

    onClick() {
        if (this.props.name === this.props.username) {
            alert('Cannot chat with yourself');
        } else {
            this.props.onClick(this.props.username, this.state.privateMessages);
            var newState = this.state;
            newState.unreadMessages = 0;
            this.setState(newState);
        }

    }

    onKick() {
        this.props.service.kick(this.props.username, this.props.activeRoom, this.onSuccessfulKick, this.onUnsuccessfulKick);
    }
    onBan() {
        this.props.service.ban(this.props.username, this.props.activeRoom, this.onSuccessfulBan, this.onUnsuccessfulBan);
    }

    onSuccessfulKick(name) {
        alert('Kick of ' + name + ' was successful!');
    }
    onUnSuccessfulKick(name) {
        alert('Kick of ' + name + ' was not successful!');
    }
    onSuccessfulBan(name) {
        alert('Ban of ' + name + ' was successful!');
    }
    onUnSuccessfulBan(name) {
        alert('Ban of ' + name + ' was unsuccessful!');
    }

    onUnban() {
        this.props.service.unban(this.props.username, this.props.activeRoom, this.onSuccessfulUnban.bind(this), this.onUnsuccessfulUnban);

    }
    onSuccessfulUnban(name) {
        alert('User ' + name + ' successfully unbanned.');
        this.props.service.userlist();
        this.props.service.roomuserlist();
    }
    onUnsuccessfulUnban(name) {
        alert('User ' + name + ' could not be unbanned.');
    }

    onMakeAdmin() {
        this.props.service.op(this.props.username, this.props.activeRoom, this.onSuccessfulOp, this.onUnSuccessfulOp)
    }
    onMakeUser() {
        this.props.service.deop(this.props.username, this.props.activeRoom, this.onSuccessfulDeop, this.onUnSuccessfulDeop);
    }

    onSuccessfulOp(name) {
        alert('User ' + name + ' is now admin of this room too!');
    }
    onUnSuccessfulOp(name) {
        alert('User ' + name + ' could not be made admin.');
    }

    onSuccessfulDeop(name) {
        alert('User ' + name + ' is now a normal user.');
    }
    onUnSuccessfulDeop(name) {
        alert('Admin ' + name + ' could not be made normal user.');
    }
}

export default User;