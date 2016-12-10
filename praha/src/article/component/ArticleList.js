import React, {Component} from "react";
import Header from "./Header";

class ArticleList extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Search/>
                <List/>
                <Pagination/>
            </div>
        );
    }
}

class Search extends Component {
    render() {
        return (<div></div>);
    }
}

class List extends Component {
    render() {
        return (<div></div>);
    }
}

class Pagination extends Component {
    render() {
        return (<div></div>);
    }
}

export default ArticleList;