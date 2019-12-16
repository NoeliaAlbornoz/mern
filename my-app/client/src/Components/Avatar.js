import React from 'react';
import avatar from './img/avatar.png';

class Avatar extends React.Component {
    render(){
        return (
            <div className="navbar-brand" className="align-avatar">
                <img src={avatar} className="mr-3 mt-3 rounded-circle float-left" data-toggle="tooltip" title="Insert avatar!" className="avatar" alt="Avatar"/>
                <small><i>User</i></small>
            </div>
        )
    }
}

export default Avatar;