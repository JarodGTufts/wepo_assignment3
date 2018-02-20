import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/site';
import Api from './api';
import Login from './pages/login';
import Chat from './pages/chat';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.api = new Api('http://localhost:8080');
        this.state = {
            loggedIn: undefined,
            username: undefined,
            activeRoom: undefined,
            privateMessages: undefined,
            messages: []
        }
    }

    render() {
        if (this.state.loggedIn !== true) {
            return (
                <Login
                    api={this.api}
                    loginCallback={this.login.bind(this)}
                />
            );
        } else {
            return (
                <Chat
                    service={this.api}
                    activeRoom={this.state.activeRoom}
                    joinRoom={this.joinRoom.bind(this)}
                    username={this.state.username}
                />
            );
        }
    }

    login(username) {
        let newState = this.state;
        newState.loggedIn = true;
        newState.username = username;
        this.joinRoom('lobby');
        this.setState(newState);
    }

    getThemAll() {
        console.log(this.api.all());
    }

    joinRoom(roomName) {
        if (this.state.activeRoom !== roomName)
            this.api.joinRoom(roomName, this.joinSuccessful.bind(this), this.joinUnsuccessful);
    }

    joinSuccessful(roomName) {
        if (this.state.activeRoom !== undefined)
            this.api.partRoom(this.state.activeRoom, () => { console.log('done') }, (error, roomName) => { console.log('Part ' + roomName + ' unsuccessful: ' + error); });

        let newState = this.state;
        if (newState.activeRoom !== undefined)
            newState.previousRoom = newState.activeRoom.slice(0);
        newState.activeRoom = roomName;
        this.setState(newState);

    }
    joinUnsuccessful(error, roomName) {
        console.log('Error joining: ' + roomName + ' Errormsg: ' + error);
    }

    updateMessages(messages) {
        let newState = this.state;
        newState.messages = messages;
        this.setState(newState);
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
