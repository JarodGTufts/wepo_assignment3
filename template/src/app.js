import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/site';
import Api from './api';
import Login from './pages/login';
import Chat from './pages/chat';
import Popup from 'react-popup';
import Prompt from './components/popup/popup-prompt.component';

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
        this.textPopup();
    }

    textPopup() {
        Popup.registerPlugin('prompt', function (defaultValue, placeholder, callback) {
            let promptValue = null;
            let promptChange = function (value) {
                promptValue = value;
            };
            Popup.create({
                title: 'What\'s your rooms name?',
                content: <Prompt onChange={promptChange} placeholder={placeholder} value={defaultValue} />,
                buttons: {
                    left: ['cancel'],
                    right: [{
                        text: 'Save',
                        key: 'enter',
                        className: 'success',
                        action: function () {
                            callback(promptValue);
                            Popup.close();
                        }
                    }]
                }
            });
        });
    }

    componentWillUnmount() {
        api.userlist();
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
                    onJoinRoom={this.onJoinRoom.bind(this)}
                    username={this.state.username}
                />
            );
        }
    }

    login(username) {
        let newState = this.state;
        newState.loggedIn = true;
        newState.username = username;
        this.onJoinRoom('lobby');
        this.setState(newState);
    }

    getThemAll() {
        console.log(this.api.all());
    }

    onJoinRoom(roomName) {
        console.log('WoW');
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
