import React from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Avatar from './Avatar';

class Navigation extends React.Component {
    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-light justify-content-center">
                    <ul className="navbar-nav">
                    
                        <Avatar/>
                        
                        <li className="nav-item"><Link to="/" className="nav-link color-link" >Home</Link></li>
                        <li className="nav-item"><Link to="/login" className="nav-link color-link" >Log in</Link></li>
                        <li clasclassNames="nav-item"><Link to="/createAccount" className="nav-link color-link" >Create Account</Link></li>
                        <li className="nav-item"><Link to="/cities" className="nav-link color-link" >Cities</Link></li>
                    </ul>
                </nav>
                <br></br>
            </div>
        )          
    }
}

export default Navigation;
