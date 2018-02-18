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
        }
    }

    render() {
        if(this.state.loggedIn !== true) {
            return (
                <Login
                    api={this.api}
                    loginCallback={this.login.bind(this)}
                />
            );
        } else {
            return (
                <Chat 

                />
            );
        }
    }

    login(username) {
        let newState = this.state;
        newState.loggedIn = true;
        newState.username = username;
        this.setState(newState);
    }

    getThemAll() {
        console.log(this.service.all());
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
