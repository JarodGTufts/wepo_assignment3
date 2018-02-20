import React from 'react';

function User(props) {
    let username = props.username;
    return (
        <div className='user'>
            {username}
        </div>
    );

}

export default User;