import React from 'react';
import {connect} from 'react-redux';
import {getItineraries} from '../Redux/Actions/getItineraries';
import IndividualItinerary from './IndividualItinerary';
import PropTypes from 'prop-types';

class Itinerary extends React.Component {

    componentWillMount(){
         this.props.getItineraries()
    }
    
    render(){
        let completedList = this.props.itineraries.map(itinerary => <IndividualItinerary itinerary={itinerary} key={itinerary._id}/>);
        return (
            <div>
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
    itineraries: state.itinerary.list
})

export default connect(mapStateToProps, {getItineraries})(Itinerary);
