import React from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

class IndividualCity extends React.Component {
    render(){
        return(
            <div>
                
                <li><Link to={`/itineraries/${this.props.city._id}`}>{this.props.city.name} - {this.props.city.country}</Link></li>
            </div>
        )
    }
}

export default IndividualCity;