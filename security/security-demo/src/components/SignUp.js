import React, {Component} from "react";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import User from "../auth";
import * as way from "../constants";
import messageUtils from "../error/messageUtil";
import * as error from "../error/errorCode";
import {browserHistory} from 'react-router';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authWay: null
            , email: null
            , password: null
            , passwordCheck: null
        };
    }

    handleChange = (id, event, index, value) => {
        if (!value) {
            event.target.errorText = messageUtils.message(error.required);
        }
        this.setState({[id]: value});
    }

    handleInputChange = (event) => {
        if (!event.target.value) {
            event.target.errorText = messageUtils.message(error.required);
        }
        this.setState({[event.target.id]: event.target.value});
    }

    createUser() {
        const {email, password, passwordCheck} = this.refs;
        if (passwordCheck.input.value !== password.input.value) {
            console.error(messageUtils.message(error.diffPass));
            alert(messageUtils.message(error.diffPass));
            throw error;
        }

        let isError = false;
        let state = this.state;
        Object.keys(state).map(function (key) {
            if (!state[key]) {
                isError = true;
                return false;
            }
        });

        if (isError) {
            throw messageUtils.message(error.required);
        }

        try {
            new User(this.state.email, this.state.password, function (error) {
                console.error(error.code, error.message);
                console.log(messageUtils.message(error.code));
                alert(messageUtils.message(error.code));
            });
            alert('저장 되었습니다. 다시 로그인 하여 주십시오.');
            //Todo : login
            browserHistory.push('/login');
        } catch (e) {
            console.log('test : ' + e);
            alert(e);
        }
    }

    render() {
        const items = [
            <MenuItem key={1} value={way.Google} primaryText={way.Google}/>,
            <MenuItem key={2} value={way.Facebook} primaryText={way.Facebook}/>,
            <MenuItem key={3} value={way.Twitter} primaryText={way.Twitter}/>,
            <MenuItem key={4} value={way.Email} primaryText={way.Email}/>,
        ];

        return (
            <div className="App">
                <AppBar
                    title="sign up | SecurityApp Demo"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <SelectField
                    id={"authWay"}
                    value={this.state.authWay}
                    ref="authWay"
                    onChange={this.handleChange.bind(null, "authWay")}
                    floatingLabelText="auth way"
                    floatingLabelFixed={true}
                    hintText="인증 방법을 선택해라! 닝겐."
                    errorStyle={{"text-align": "left"}}
                    style={{"text-align": "left"}}
                >
                    {items}
                </SelectField>
                <br/>
                <TextField
                    id="email"
                    ref="email"
                    value={this.state.email}
                    hintText="your_mail@mail.com"
                    floatingLabelText="email"
                    onChange={this.handleInputChange.bind(this)}
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
                    onChange={this.handleInputChange.bind(this)}
                    errorStyle={{"text-align": "left"}}
                />
                <br/>
                <TextField
                    id="passwordCheck"
                    ref="passwordCheck"
                    value={this.state.passwordCheck}
                    hintText="your pass"
                    floatingLabelText="Password 확인"
                    type="password"
                    onChange={this.handleInputChange.bind(this)}
                    errorStyle={{"text-align": "left"}}
                />
                <br/>
                <RaisedButton label="save" primary={true}
                              onClick={this.createUser.bind(this)}/>
            </div>
        );
    }
}