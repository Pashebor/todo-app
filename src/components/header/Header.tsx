import * as React from 'react';
import { Logo } from "../../TodoApp";
import { Link } from 'react-router-dom';
import { match, BrowserRouter} from "react-router-dom";

interface HeaderProps extends match<any>{}

class Header extends React.Component<any, HeaderProps> {
    registerHandler() {
        this.props.history.push('login');
    }

    render() {
        console.log(this);
        return (
            <header className="header">
                <div className="header__title">Записная книжка
                <div className="user-block">
                    <p className="user-block__register" title="Регистрация" onClick={this.registerHandler.bind(this)}></p>
                </div>
                </div>
            </header>
        );
    }
}

export default Header;