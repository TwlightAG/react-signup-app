import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './css/main.css';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer'

import App from './App';
import Greet from './Greetings';
import SignupPage from './signup/signup';
import Dashboard from './dashboard/dashboard';
import Logout from "./signup/logout";

const stores = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render((
    <BrowserRouter >
    <Provider store={stores}>
        <div>
            <Route component={App}>
            </Route>
            <div className='container'>
                <Route exact path='/' component={Greet}/>
                <Route path='/signin' component={SignupPage}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/logout' component={Logout}/>
            </div>
        </div>
    </Provider>
    </BrowserRouter>
), document.getElementById('app'));
registerServiceWorker();

