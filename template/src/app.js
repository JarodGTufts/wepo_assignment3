import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import '../styles/site';
import Service from './service';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.service = new Service('http://localhost:8080');
        console.log(this.service);

        this.state = {
            loggedIn: false,
            username: undefined,
            activeRoom: undefined,
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.login.bind(this, 'fuck')}>I am the App</button>
                <button onClick={this.getThemAll.bind(this)}>I am the App also</button>
            </div>
        );
    }

    login(username) {
        this.service.login(username);
    }

    getThemAll() {
        console.log(this.service.all());
    }
}


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
