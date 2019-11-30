import React from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

class IndividualCity extends React.Component {
    render(){
        return(
            <div className="card bg-light text-dark">
                <div className="card-body">
                
                    <li>
                        <h2 className="title-city">{this.props.city.name}</h2> - 
                        <small><i>{this.props.city.country}</i></small> 
                        <Link to={`/itineraries/${this.props.city._id}`}>
                            <img src={require(`./img/Countries/${this.props.city.country}.jpg`)} className="img-thumbnail mx-auto d-block flag"/>
                        </Link>
                    </li>
            
                </div>
            </div>
            
        )
    }
}

export default IndividualCity;