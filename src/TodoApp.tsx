import * as React from 'react';
import  {render} from 'react-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import {BrowserRouter, Route} from 'react-router-dom';

export interface Logo {
    name: string;
}

const TodoApp = () => {

    return(
        <div className="todo-app">
           <BrowserRouter>
               <Route component={Header}/>
           </BrowserRouter>
            <Main />
            <Footer name="Pashebor's laba"/>
        </div>
    )

};

render(<TodoApp/>, document.getElementById('todo-app'));