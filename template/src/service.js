import openSocket from 'socket.io-client';

class Service {
    constructor(url) {
        console.log(url);
        this.socket = openSocket(url);
        console.log(this.socket);
    }

    login(username, cbSuccess, cbError) {
        this.socket.emit('adduser', username, function(available) {
            if (available)
                cbSuccess(username);
            else
                cbError(username);
        });
    }

    all() {
        this.socket.emit('users', function(userlist) {
            if(userlist) {
                console.log(userlist);
            }
        });
        this.socket.on('userlist', function(userlist) {
            console.log(userlist);
        });
    }
}
export default Service;