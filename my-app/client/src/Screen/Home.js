import React from 'react';
import '../App.css';
import Header from '../Components/Header';
import Title from '../Components/Title';
import Browsing from '../Components/Browsing';
import Paragraph from '../Components/Paragraph';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div>
      <header>
        <Header/>
        <Paragraph mytext= "Find your perfect trip, designed by insiders who know and love their cities."/>
      </header>
      <section>
        <div>
        <Title mytitle="Start browsing"/>
          <Browsing/>
          <Paragraph mytext="Want to build your own MYtinerary?"/>
        </div>
      </section>
      <section>
        <div>
          <ul class="link-home"> 
            <li><Link to="/login" className="color-link" >Log in</Link></li>
            <li><Link to="/createAccount" className="color-link" >Create Account</Link></li>
          </ul>
        </div>
      </section>
      <footer><Footer/></footer>
      </div>
  )
}

export default Home;
