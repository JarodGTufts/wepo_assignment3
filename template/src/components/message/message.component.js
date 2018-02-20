import React from 'react';

function Message(props) {

    // Initialize local variables for props
    let sender = props.sender;
    let myName = props.myName;
    let message = props.message;

    // If the message was sent by the current user, 
    // return a message with the corerct class
    if (sender === myName) {
        return (
            <div className='Message'>
                <li className='list-group-item list-group-item-secondary bg-info my-message'>
                    {message} <sub> {sender} </sub>
                </li>
            </div>
        );
    } else {
        return (
            <div className='Message'>
                <li className='list-group-item list-group-item-secondary bg-success other-message'>
                    {message} <sub> {sender} </sub>
                </li>
            </div>
        );
    }
}

export default Message;