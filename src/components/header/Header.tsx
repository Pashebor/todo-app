import * as React from 'react';
import {Logo} from "../../TodoApp";
import { Link } from 'react-router-dom';

class Header extends React.Component<Logo> {
    render() {
        const {name} = this.props;
        return (
            <header className="header">
                <div className="header__title">{name}
                <div className="user-block">
                    {/*<Link to={login"} className="user-block__register" title="Регистрация"></Link>*/}
                </div>
                </div>
            </header>
        );
    }
}

export default Header;