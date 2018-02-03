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
import SignupPage from './signup/signup';
import Dashboard from './dashboard/dashboard';
import Logout from "./signup/logout";
import Settings from "./user/settings";
import ViewSite from "./dashboard/view_site";
import Modal from "./dashboard/modal";
import ChangePassword from "./user/change_pass";

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
                <Route exact path='/' component={SignupPage}/>
                <Route path='/logout' component={Logout}/>
            </div>
            {/*<Route path='/404' component={NotFound404} />*/}
            {/*<Redirect exact from='*' to='/404' />*/}
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path={"/profile"} component={Settings}/>
            <Route path={"/dashboard/view_site"} component={ViewSite}/>
            <Route path={"/dashboard/add-project"} component={Modal}/>
            <Route path={"/profile/change_pass"} component={ChangePassword}/>
        </div>
    </Provider>
    </BrowserRouter>
), document.getElementById('app'));
registerServiceWorker();

