import openSocket from 'socket.io-client';

class Api {
    constructor(url) {
        this.socket = openSocket(url);
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

    roomuserlist(roomName) {
        this.socket.emit('roomusers', { roomName: roomName });
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
        this.roomuserlist(roomName);
    }

    partRoom(roomName, cbSuccess, cbError) {
        this.socket.emit('partroom', roomName,
            function (successful, error) {
                if (successful)
                    cbSuccess(roomName);
                else
                    cbError(roomName, error);
            });
        this.roomuserlist(roomName);
    }

    all() {
        this.socket.emit('users');
        this.socket.on('userlist');
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
            }, function(success) {
                console.log(success);
            })
    }


    kick(userName, roomName, cbSuccess, cbError) {
        this.socket.emit('kick',
            {
                user: userName,
                room: roomName
            }, function (success) {
                if(success)
                    cbSuccess();
                else
                    cbError();
            });

    }
    ban(userName, roomName, cbSuccess, cbError) {
        this.socket.emit('ban',
            {
                user: userName,
                room: roomName
            }, function (success) {
                if(success)
                    cbSuccess();
                else
                    cbError();
            });
    }
    unban(userName, roomName, cbSuccess, cbError) {
        this.socket.emit('unban',
            {
                user: userName,
                room: roomName
            }, function (success) {
                if(success)
                    cbSuccess();
                else
                    cbError();
            });
    }
    op(userName, roomName, cbSuccess, cbError) {
        this.socket.emit('op',
            {
                user: userName,
                room: roomName
            }, function (success) {
                if(success)
                    cbSuccess();
                else
                    cbError();
            });
    }
    deop(userName, roomName, cbSuccess, cbError) {
        this.socket.emit('deop',
            {
                user: userName,
                room: roomName
            }, function (success) {
                if(success)
                    cbSuccess();
                else
                    cbError();
            });
    }
}
export default Api;