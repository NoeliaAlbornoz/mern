import React from 'react';
import logo from './img/logo.png';

class Header extends React.Component {
    render(){
        return (
            <div>
                <img src= {logo} id= "logo" className="rounded mx-auto d-block" alt= "Logo"/>
            </div>
        )
    }
}

export default Header;