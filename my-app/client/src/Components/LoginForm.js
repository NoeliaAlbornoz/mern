import React from 'react';
import Avatar from '../Components/Avatar'; 
import Paragraph from '../Components/Paragraph';
import axios from 'axios';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

class AccountForm extends React.Component {
    state = {
        username: '',
        password: '',
        email: ''
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

      this.setState({
        [name]: value
      });


    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post(`/api/user/login`, {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        })
        .then(res => {
            console.log(res.data);
        })
    }
        
    render(){
        return(
            <div className='row'>
                <div className='col-md-4 mx-auto'>
                    <div className='card'>
                        <div className='card-header'>
                            <legend><Avatar/></legend>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-group'> 
                                    <input type='name' className='form-control' name='username' placeholder='User Name' value={this.state.username} onChange={this.handleChange}/>
                                </div>
                                <div className='form-group'> 
                                    <input type='password' className='form-control' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
                                </div>
                                <div className='form-group'> 
                                    <input type='email' className='form-control' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                    <button type='submit'>Log In</button>
                                    <Paragraph mytext="Before log in: "/>
                                    <li><Link to="/createAccount" className="color-link" >Create Account</Link></li>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
            
    }

}
    
export default AccountForm;