import React, {Component} from "react";
import AppBar from "material-ui/AppBar";

export default class Init extends Component {
    leave(){

    }

    render() {
        return (
            <div className="App">
                <AppBar
                    title="loged in | SecurityApp Demo"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <p>{'로그인 되었습니다.'}</p>
                <RaisedButton label="탈퇴" primary={true}
                              onClick={this.leave.bind(this)}/>
            </div>
        );
    }
}