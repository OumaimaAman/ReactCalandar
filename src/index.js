import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  reduxThunk from 'redux-thunk';

import Home from './components/Home';
import Login from './components/Login';
import Calandar from './components/Calandar';
import reduces from './reduces';
import authGruard from '../src/components/HOC/authGuard';




ReactDOM.render(
            <Provider store= { createStore(reduces, {}, applyMiddleware(reduxThunk))}>
                <BrowserRouter>
                    <App>
                        <Route exact path="/" component= {Home}/>
                        <Route exact path="/login" component = {Login}/>
                        <Route exact path="/calandar" component={authGruard(Calandar)} />
                    </App>
                </BrowserRouter>
                </Provider>
                ,
            document.querySelector('#root'));


serviceWorker.register();
