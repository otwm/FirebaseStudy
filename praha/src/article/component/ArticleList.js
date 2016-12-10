import React, {Component} from "react";
import Header from "./Header";

import {
    Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
}
    from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

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

const articles = [
    {
        no: 3,
        title: 'test',
        date: '2016-03-01',
        hit: 1,
        author: 'kdo'
    },
    {
        no: 2,
        title: 'test',
        date: '2016-03-01',
        hit: 5,
        author: 'kdo'
    },
    {
        no: 1,
        title: 'test',
        date: '2016-03-01',
        hit: 2,
        author: 'kdo'
    }
];

class List extends Component {
    render() {
        return (
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>
                                No
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                title
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                date
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                hit
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                author
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            articles.map((row, index)=>(
                                <TableRow>
                                    <TableRowColumn>{row.no}</TableRowColumn>
                                    <TableRowColumn>{row.title}</TableRowColumn>
                                    <TableRowColumn>{row.date}</TableRowColumn>
                                    <TableRowColumn>{row.hit}</TableRowColumn>
                                    <TableRowColumn>{row.author}</TableRowColumn>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                    <TableFooter/>
                </Table>
            </div>
        );
    }
}

class Pagination extends Component {
    render() {
        return (<div></div>);
    }
}

export default ArticleList;