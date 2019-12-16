import React from 'react';
import {connect} from 'react-redux';
import {getCities} from '../Redux/Actions/getCities';
import IndividualCity from './IndividualCity';
import Title from '../Components/Title';
import PropTypes from 'prop-types';
import Paragraph from '../Components/Paragraph';

class ListCities extends React.Component {
    constructor(){
        super()
        this.state = {
            search: ""
        }
    }
    updateSearch(event){
        this.setState({search: event.target.value.substr(0, 30)})
    }

    componentWillMount(){
         this.props.getCities()
    }
    
    render(){
        let filteredCities = this.props.cities.filter((city) => {
            return city.name.indexOf(this.state.search) !==-1
        })
        let completedList = filteredCities.map(city => <IndividualCity city={city} key={city._id}/>);
        return (
            <div>
                <section>
                    <div>       
                        <Title mytitle="Search City"/>
                        <Paragraph mytext="Find the city you want to visit: " className="color"/>
                    </div>
            
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <form className="form-inline" action="">
                            <input className="form-control mr-sm-2 search" type="text" 
                                placeholder="Search city" 
                                value={this.state.search} 
                                onChange={this.updateSearch.bind(this)}/>
                        </form>
                    </nav>
                </section>
                <section>
                    <ul>
                        {completedList}
                    </ul>
                </section>
            </div>
        )           
    }     
}

ListCities.propTypes = {
    getCities: PropTypes.func.isRequired,
    city: PropTypes.object.isRequired
} 

const mapStateToProps = (state) => ({
    cities: state.city.list
})

export default connect(mapStateToProps, {getCities})(ListCities);
