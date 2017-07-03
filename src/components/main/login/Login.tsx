import * as React from 'react';
import  { Link } from 'react-router-dom';
import {LoginProps} from "../Main";

class Login extends React.Component<any, LoginProps>{
    render() {
        return(
            <main className="login">
               <div className="container">
                   <h2 className="login__title">Войти</h2>
                   
                   <Link to={'/'}>back</Link>
               </div>
            </main>
        )
    }
}

export default Login;