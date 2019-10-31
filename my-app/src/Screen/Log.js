import React from 'react';
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Title from '../Components/Title';
import Paragraph from '../Components/Paragraph';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Footer from '../Components/Footer';

class Log extends React.Component {
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
            <Title mytitle="Log In"/>
          <Paragraph mytext= "Login with your username and password."/>
        </div>
      </section>
      <section>
      <div className="jumbotron">
                <form>
                    <fieldset>
                        <Input title="User"/>
                        <Input title="Password"/>
                        <Button button="Log in"/>
                    </fieldset>
                </form>
            </div>
          
        
      </section>
      <footer><Footer/></footer>
    </div> 
            
        )          
    }
}

export default Log;