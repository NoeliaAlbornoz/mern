import React from 'react';
import Routes from './Routes';
import {Provider} from 'react-redux';
import store from './Redux/store.js';

class App extends React.Component {
    render(){
        return(
            <Provider store={store}>
            <Routes/>
            </Provider>
        )
    }
}

export default App;