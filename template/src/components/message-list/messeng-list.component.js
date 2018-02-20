import React from 'react';
import Message from '../message/message.component';

class MessageList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }

    render() {
        let messages = [];
        this.props.messages.forEach((msg, index) => {
            messages.push(
                <Message
                    message={msg.message}
                    author={msg.nick}
                    sender = {this.props.sender}
                    key = {'message' + index}
                />)

        });
        return (
            <div className = 'messenger' >
                <ul className="list-group messenger__list">
                    {messages}
                </ul>
            </div>
        );
    }
};

export default MessageList;