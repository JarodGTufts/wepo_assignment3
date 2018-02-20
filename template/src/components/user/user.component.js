import React from 'react';

function Message(props) {
    let username = props.username;
    return (
        <div className='User'>
            {username}
        </div>
    );

}

export default Message;