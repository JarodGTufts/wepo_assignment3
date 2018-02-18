import React from 'react';

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col-3">
                    <div className="row">
                        //Userlist
                    </div>
                    <div className="row">
                        //Roomlist
                    </div>
                </div>
                <div className="col-6">
                    //Messenger
                </div>
                <div className="col-3">
                    <div className="row">
                        //UserlistInRoom
                    </div>
                    <div className="row">
                        //BannedUserlistInRoom
                    </div>
                </div>
            </div>
        );
    }
};

export default Chat;