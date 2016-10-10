import React, {Component} from "react";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import User from "../auth";
import {browserHistory} from "react-router";

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    login() {
        try {
            User.login(
                this.refs.email.getValue()
                , this.refs.password.getValue());
            alert('로그인 되었습니다.');
            browserHistory.push('/init');
        } catch (e) {
            alert(e);
        }
    }

    signUp() {
        browserHistory.push('/signUp');
    }

    resetPassword() {

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
                    hintText="your_mail@mail.com"
                    floatingLabelText="email"
                    errorStyle={{"text-align": "left"}}
                />
                <br/>
                <TextField
                    id="password"
                    ref="password"
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