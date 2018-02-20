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
                    mode={'normal'}
                    service={this.props.service}
                    username={username}
                    name={this.props.username}
                    key={'user' + index}
                    onClick={this.props.onPrivateChat}
                    updateMessages={this.props.updateMessages}
                    userImChattingWith={this.props.userImChattingWith}
                />)

        });
        // Return a new list of all of the messages
        return (
            <div className='userlist-element p-0' >
                <p className='h3'>Active Users</p>
                <ul className="list-group list-group-flush user__list">
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