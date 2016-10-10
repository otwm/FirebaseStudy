import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import App from './App';
import './index.css';
import Init from './components/Init';
import Login from './components/Login'
import PasswordReset from './components/PasswordReset'
import SignUp from './components/SignUp'


ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Login}/>
                <Route path="login" components={Login}/>
                <Route path="signUp" components={SignUp}/>
                <Route path="passwordReset" components={PasswordReset}/>
                <Route path="init" components={Init}/>
            </Route>
        </Router>
    ),
    document.getElementById('root')
);

