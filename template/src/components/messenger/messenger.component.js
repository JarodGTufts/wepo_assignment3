import React from 'react';
import MessageList from '../message-list/messeng-list.component';

class Messenger extends React.Component {

    constructor(props) {
        super(props);
        props.service.register('updatechat', this.onUpdateChat.bind(this));
        this.state = {
            messages: []
        }
    }

    render() {
        return (
            <div className='messenger'>
                <div className='messenger__header'>
                    <h3>{this.props.activeRoom}</h3>
                </div>
                <MessageList
                    username={this.props.username}
                    messages={this.state.messages}
                />
                <div className="input-group">
                    <input type="text" className="form-control" ref={'message'} placeholder="Message" aria-label="Message"/>
                    <div className="input-group-append">
                        <input type="submit" className="btn btn-primary" value="Send" onClick={this.handleSubmit.bind(this)} />
                    </div>
                </div>
            </div>
        );
    };

    onUpdateChat(roomName, messageHistory) {
        if (this.props.activeRoom === roomName) {
            let newState = this.state;
            newState.messages = messageHistory;
            this.setState(newState);
        }
    }

    handleSubmit() {
        let message = this.refs.message.value;
        if (message.length !== 0) {
            this.props.service.sendMsg(this.props.activeRoom, message);
            this.refs.message.value = '';
        }
        console.log('Sent ' + message);
    }


};

export default Messenger;