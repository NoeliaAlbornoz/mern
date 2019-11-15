import React from 'react';

class IndividualCity extends React.Component {
    render(){
        return(
            <div>
                <li>{this.props.city.name} - {this.props.city.country}</li>
            </div>
        )
    }
}

export default IndividualCity;