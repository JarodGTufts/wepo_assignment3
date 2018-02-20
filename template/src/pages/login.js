import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }

    render() {
        return(<div className="container-fluid p-3">
            <h1>Welcome to this dope chat!</h1>
            <h3>Choose your Username</h3>
            <div className="input-group">
                <input type="text" className="form-control" ref={'username'} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>this.setState({username: e.value})}
                />
                <input type="submit" className="btn btn-primary" value="Login" onClick={this.handleSubmit.bind(this)} />
            </div>
        </div>);
    }

    handleSubmit(e) {
        e.preventDefault();
        let userName = this.refs.username.value
        if(userName.length === 0) {
            alert('Write something dude.');
        } else {
            this.props.api.login(userName, this.props.loginCallback, this.errorUsernameTaken);
        }
    }

    errorUsernameTaken() {
        alert('This username is already taken. Sorry mate.')
    }
};

Login.propTypes = {
    loginCallback: PropTypes.func.isRequired
};

export default Login;