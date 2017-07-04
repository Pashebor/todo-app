import * as React from 'react';
import  {render} from 'react-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import {BrowserRouter, Route, RouteComponentProps, Switch} from 'react-router-dom';
import Login from "./components/main/login/Login";
import Registration from "./components/main/registration/Registration";

export interface Logo {
    name: string;
}

export interface MainProps extends RouteComponentProps<any>{}

const TodoApp = () => {

    return(
        <div className="todo-app">
            <BrowserRouter>
               <div>
                 <Route path='/' component={Header}/>
                 <Route exact path='/' component={Main}/>
                 <Route path='/login' component={Login}/>
                 <Route path='/register' component={Registration}/>
               </div>
            </BrowserRouter>
            <Footer name="Pashebor's laba"/>
        </div>
    )

};

render(<TodoApp/>, document.getElementById('todo-app'));