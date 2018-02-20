import React from 'react';

function Message(props) {
  let sender = props.sender;
  let myName = props.myName;
  let message = props.message;
  if (sender === myName) {
    return (
      <div className='Message'>
        <li className='list-group-item list-group-item-secondary my-message'>
          {message} <sub> {sender} </sub>
        </li>
      </div>
    );
  } else {
    return (
      <div className='Message'>
        <li className='list-group-item list-group-item-secondary other-message'>
          {message} <sub> {sender} </sub>
        </li>
      </div>
    );
  }
}

export default Message;