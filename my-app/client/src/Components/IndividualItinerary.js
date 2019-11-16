import React from 'react';

class IndividualItinerary extends React.Component {
    render(){
        return(
            <div>
                <li>
                    {this.props.itinerary.title} /
                    {this.props.itinerary.profilePic} /
                    {this.props.itinerary.description} /
                    {this.props.itinerary.price} /
                    {this.props.itinerary.duration} 
                </li>
            </div>
        )
    }
}

export default IndividualItinerary;