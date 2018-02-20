import openSocket from 'socket.io-client';

class Api {
    constructor(url) {
        console.log(url);
        this.socket = openSocket(url);
        console.log(this.socket);
    }

    register(eventName, callback) {
        this.socket.on(eventName, callback);
    }

    login(username, cbSuccess, cbError) {
        this.socket.emit('adduser', username, function (available) {
            if (available)
                cbSuccess(username);
            else
                cbError(username);
        });
        this.userlist();
        this.roomlist();
    }

    userlist() {
        this.socket.emit('users');
    }

    roomlist() {
        this.socket.emit('rooms');
    }

    joinRoom(roomName, cbSuccess, cbError) {
        this.socket.emit('joinroom', { room: roomName, pass: undefined },
            function (successful, error) {
                if (successful)
                    cbSuccess(roomName);
                else
                    cbError(roomName, error);
            });
        this.roomlist();
    }

    partRoom(roomName, cbSuccess, cbError) {
        this.socket.emit('partroom', roomName,
            function (successful, error) {
                if (successful)
                    cbSuccess(roomName);
                else
                    cbError(roomName, error);
            });
    }

    all() {
        this.socket.emit('users', function (userlist) {
            if (userlist) {
                console.log(userlist);
            }
        });
        this.socket.on('userlist', function (userlist) {
            console.log(userlist);
        });
    }

    sendMsg(roomName, msg) {
        this.socket.emit('sendmsg',
            {
                roomName: roomName,
                msg: msg
            })
    }

    sendPrivateMsg(userName, message) {
        this.socket.emit('privatemsg',
            {
                nick: userName,
                message: message
            }, function (successful) {
                console.log(successful)
            })
    }
}
export default Api;