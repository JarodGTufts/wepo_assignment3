import React from 'react';
import User from '../user/user.component';

class RoomUserlist extends React.Component {

    constructor(props) {
        super(props);
        props.service.register('updateusers', this.updateUsers.bind(this));
        this.state = {
            activeUsers: [],
            bannedUsers: [],
            isClientAdmin: false
        };
    }

    render() {
        let users = [];
        let banned = [];
        this.state.activeUsers.forEach((user, index) => {
            users.push(
                <User
                    mode={this.state.isClientAdmin ? 'admin' : 'roomview'}
                    service={this.props.service}
                    username={user.name}
                    activeRoom={this.props.activeRoom}
                    isAdmin={user.isAdmin}
                    key={'roomuser' + index}
                />)

        });

        this.state.bannedUsers.forEach((user, index) => {
            banned.push(
                <User
                    mode={'banned'}
                    isClientAdmin={this.state.isClientAdmin}
                    service={this.props.service}
                    username={user}
                    activeRoom={this.props.activeRoom}
                    key={'banned' + index}
                />)

        });
        // Return a new list of all of the messages

        return (
            <div className='userlist-element p-0' >
                <p className='h3'>Active Users in this Room</p>
                <ul className="list-group list-group-flush activeuser__list">
                    {users}
                </ul>
                <p className='h3'>Banned Users in this Room</p>
                <ul className="list-group list-group-flush bannedeuser__list">
                    {banned}
                </ul>
            </div>
        );
    };

    updateUsers(roomName, users, ops, banned) {

        if (roomName === this.props.activeRoom) {
            let allOpNames = [];
            var newState = this.state;
            newState.activeUsers = [];
            newState.bannedUsers = [];
            newState.isClientAdmin = false;

            for (var user in ops) {

                newState.activeUsers.push(
                    {
                        name: user,
                        isAdmin: true
                    });
                allOpNames.push(user);
                if (user === this.props.username)
                    newState.isClientAdmin = true;
            }

            for (var user in users) {
                if (allOpNames.indexOf(user) === -1) {
                    newState.activeUsers.push(
                        {
                            name: user,
                            isAdmin: false
                        })
                }
            }

            for (var user in banned) {

                newState.bannedUsers.push(user);
            }
            this.setState(newState);


        }

    }
};

export default RoomUserlist;