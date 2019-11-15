import React from 'react';
import arrow from './img/arrow.png';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

class Browsing extends React.Component {
    render(){
        return (
            <div>
                <Link to="/cities"><img src= {arrow} id= "arrow" className="rounded mx-auto d-block" alt= "start browsing"/></Link>
            </div>
        )          
    }
}

export default Browsing;