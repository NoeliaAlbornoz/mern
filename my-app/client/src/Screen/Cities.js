import React from 'react';
import '../App.css';
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Browsing from '../Components/Browsing';
import Paragraph from '../Components/Paragraph';
import Carousel from '../Components/Carousel';
import ListCities from '../Components/ListCities';
import Footer from '../Components/Footer';

function Cities() {
  return (
    <div>
      <header>
        <Nav/>
        <Header/>
        <Paragraph mytext= "Find your perfect trip, designed by insiders who know and love their cities."/>
      </header>
      <section>
        <div>       
          <Browsing/>
          <Paragraph mytext= "Popular MYtineraries"/>
        </div>
      </section>
      <section>
        <div>
          <Carousel/>
        </div>
      </section>
      <section>
        <div>
          <ListCities/>
        </div>
      </section>
      <footer><Footer/></footer>
    </div>     
  )
}

export default Cities;