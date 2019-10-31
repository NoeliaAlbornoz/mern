import React from 'react';
import home from './img/home.png';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

class Footer extends React.Component {
    render(){
        return (
            <div>
                <Link to="/"><img src= {home} id= "home" className="rounded mx-auto d-block" alt= "Home"/></Link>    
            </div>
        )          
    }
}

export default Footer;