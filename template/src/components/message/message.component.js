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
                    <p className='font-weight-bold'><sub>{author}:</sub></p> &nbsp; {message}
                </li>
            </div>
        );
    } else {
        return (
            <div className='Message'>
                <li className='list-group-item list-group-item-secondary other-message'>
                    <p className='font-weight-bold'><sub>{author}:</sub></p> &nbsp; {message}
                </li>
            </div>
        );
    }
}

export default Message;