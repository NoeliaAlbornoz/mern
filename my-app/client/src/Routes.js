import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Screen/Home';
import Cities from './Screen/Cities';
import Log from './Screen/Log';
import CreateAccount from './Screen/CreateAccount';
import Itineraries from './Screen/Itineraries';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/cities' component={Cities}/>
            <Route exact path='/login' component={Log}/>
            <Route exact path='/createAccount' component={CreateAccount}/>
            <Route exact path='/itineraries/:cityId' component={Itineraries}/>
        </Switch>
    );
}

export default Routes;