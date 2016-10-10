import React, {Component} from "react";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import User from "../auth";

import * as way from "../constants";
import messageUtils from "../error/messageUtil";
import * as error from "../error/errorCode";

import {browserHistory} from 'react-router';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null
            , password: null
        };
    }

    login() {

    }

    signUp(){

    }

    resetPassword(){

    }

    render() {
        return (
            <div className="App">
                <AppBar
                    title="Log in | SecurityApp Demo"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <TextField
                    id="email"
                    ref="email"
                    value={this.state.email}
                    hintText="your_mail@mail.com"
                    floatingLabelText="email"
                    errorStyle={{"text-align": "left"}}
                />
                <br/>
                <TextField
                    id="password"
                    ref="password"
                    value={this.state.password}
                    hintText="your pass"
                    floatingLabelText="Password"
                    type="password"
                    errorStyle={{"text-align": "left"}}
                />
                <br/>
                <RaisedButton label="login" primary={true}
                              onClick={this.login.bind(this)}/>
                {' '}
                <RaisedButton label="Sign up" primary={true}
                              onClick={this.signUp.bind(this)}/>
                {' '}
                <RaisedButton label="password reset" primary={true}
                              onClick={this.resetPassword.bind(this)}/>
            </div>
        );
    }
}