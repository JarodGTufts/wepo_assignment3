import React from 'react';

function User(props) {
    let username = props.username;
    return (

        <div className='list-group-item user'>
            {username}
        </div>
    );

}

export default User;