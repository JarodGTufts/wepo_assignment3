import React from 'react';

function Message(props) {
  let username = props.username;
  let author = props.author;
  let message = props.message;
  if (author === username) {
    return (
      <div className='Message'>
        <li className='list-group-item list-group-item-secondary my-message'>
          {message} <sub> {author} </sub>
        </li>
      </div>
    );
  } else {
    return (
      <div className='Message'>
        <li className='list-group-item list-group-item-secondary other-message'>
          {message} <sub> {author} </sub>
        </li>
      </div>
    );
  }
}

export default Message;