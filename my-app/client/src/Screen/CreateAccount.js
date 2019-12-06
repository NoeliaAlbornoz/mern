import React from 'react';
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Title from '../Components/Title';
import Paragraph from '../Components/Paragraph';
import Footer from '../Components/Footer';
import AccountForm from '../Components/AccountForm';

class CreateAccount extends React.Component {
    render(){
        return (
            <div>
      <header>
        <Nav/>
        <Header/>
        <Paragraph mytext= "Find your perfect trip, designed by insiders who know and love their cities."/>
      </header>
      <section>
        <div>       
          <Title mytitle="Create Account"/> 
          <Paragraph mytext= "Register with your username and password."/>
        </div>
      </section>
      <section>
        <div className="jumbotron">
                
          <AccountForm/>   
                
        </div>
      </section>
      <footer><Footer/></footer>
    </div>
            
        )          
    }
}

export default CreateAccount;

