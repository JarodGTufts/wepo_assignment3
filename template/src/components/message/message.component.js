import React from 'react';

function Message(props) {
// Initialize local variables for props
  let username = props.username;
  let author = props.author;
  let message = props.message;
  // If the message was sent by the current user,
    // return a message with the corerct class
<<<<<<< HEAD
  if (author === username) {
    return (
      <div className='Message'>
        <li className='list-group-item list-group-item-secondary my-message'>
          {message} <sub> {author} </sub>
        </li>
      </div>
    );
  } 
  // If the message was sent by another user, return a message
  else {
    return (
      <div className='Message'>
        <li className='list-group-item list-group-item-secondary other-message'>
          {message} <sub> {author} </sub>
        </li>
      </div>
    );
  }
=======
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
>>>>>>> 502026e1e618b0ae3f5ba2ed73678726dae4b83f
}

export default Message;