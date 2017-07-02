import * as React from 'react';
import  {render} from 'react-dom';
import { Router, Route } from 'react-router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

export interface Logo {
    name: string;
}

const TodoApp = () => {
    console.log(this.props);
    return(
        <div className="todo-app">
            <Header name="Записная книжка"/>
            <Main />
            <Footer name="Pashebor's laba"/>
        </div>
    )

};

render(

        <Router>
            <Route path="/" component="Main"/>
        </Router>,
    document.getElementById('todo-app')
);