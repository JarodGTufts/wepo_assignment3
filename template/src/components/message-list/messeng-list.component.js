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

        // Fill the messages array with the messages passed as props
        this.props.messages.forEach((msg, index) => {

            // Create new Message components for each member of the array
            messages.push(
                <Message
                    message={msg.message}
                    author={msg.nick}
                    sender = {this.props.sender}
                    key = {'message' + index}
                />)

        });

        // Return a new list of all of the messages
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