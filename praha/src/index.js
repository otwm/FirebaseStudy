import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import ArticleList from './article/component/ArticleList';
import App from "./App";
import "./index.css";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ArticleList}/>
                <Route path="articles" components={ArticleList}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
