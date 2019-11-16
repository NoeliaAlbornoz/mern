import React from 'react';
import '../App.css';
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Itinerary from '../Components/Itinerary';

function Itineraries(props) {
    return (
      <div>
        <header>
          <Nav/>
          <Header/>
        </header>
        <section>
          <div>
            <Itinerary cityId={props.match.params.cityId}/>
          </div>
        </section>
        <footer><Footer/></footer>
      </div>     
    )
  }
  
  export default Itineraries;