import React from 'react';
import {connect} from 'react-redux';
import {getItineraries} from '../Redux/Actions/getItineraries';
import IndividualItinerary from './IndividualItinerary';
import PropTypes from 'prop-types';
import Paragraph from '../Components/Paragraph';

class Itinerary extends React.Component {

    componentWillMount(){
         this.props.getItineraries(this.props.cityId)
    }
    
    render(){
        let presentation = this.props.itineraries.map(itinerary => 
            <div className="container">
                <h1 className="center">{itinerary.city.name}</h1>
                <img src={require(`./img/Cities/${itinerary.city.img}`)} className="city-image"/>
            </div>
            );
        let completedList = this.props.itineraries.map(itinerary => 
                <IndividualItinerary itinerary={itinerary} key={itinerary._id}/>);
        return (
            <div>
                <h1>{presentation[0]}</h1>
                <Paragraph mytext="Available MYtineraries:"/>
                <section>
                    <ul>
                        {completedList}
                    </ul>
                </section>
            </div>
        )           
    }     
}

Itinerary.propTypes = {
    getItineraries: PropTypes.func.isRequired,
    itinerary: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    itineraries: state.itinerary.list,
    itinerary: state.itinerary.list
})

export default connect(mapStateToProps, {getItineraries})(Itinerary);
