import React from 'react';

function Message(props) {
// Initialize local variables for props
    let username = props.username;
    let author = props.author;
    let message = props.message;
    // If the message was sent by the current user,
    // return a message with the corerct class
    if (author === username) {
        return (
            <div className='Message'>
                <li className='list-group-item list-group-item-secondary my-message'>
                    {message} &nbsp;<sub> {author} </sub>
                </li>
            </div>
        );
    } else {
        return (
            <div className='Message'>
                <li className='list-group-item list-group-item-secondary other-message'>
                    {message} &nbsp;<sub> {author} </sub>
                </li>
            </div>
        );
    }
}

export default Message;