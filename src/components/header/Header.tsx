import * as React from 'react';
import {Logo} from "../../TodoApp";

class Header extends React.Component<Logo> {
    render() {
        const {name} = this.props;
        return (
            <header className="header">
                <div className="header__title">{name}</div>
                <div className="user-block">
                    <a href="#" className="user-block__register" title="Регистрация"></a>
                </div>
            </header>
        );
    }
}

export default Header;