import React from 'react';
import User from '../user/user.component';

class Userlist extends React.Component {

    constructor(props) {
        super(props);
        props.service.register('userlist', this.updateUserlist.bind(this));
        this.state = {
            users: []
        };
    }

    render() {
        let user = [];
        this.state.users.forEach((username, index) => {
            user.push(
                <User
                    username={username}
                    key={'user' + index}
                />)

        });
        // Return a new list of all of the messages
        return (
            <div className='userlist-element' >
                <ul className="list-group user__list">
                    {user}
                </ul>
            </div>
        );
    };

    updateUserlist(newUserlist) {
        console.log('Userupdate');
        let newState = this.state;
        newState.users = newUserlist;
        this.setState(newState);
    };
};

export default Userlist;