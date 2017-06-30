import * as React from 'react';

export interface Props {
    name: string;
    secondName: string;
}

class Header extends React.Component<Props> {
    render() {
        const {name, secondName} = this.props;
        return (
            <header>{name + secondName}</header>
        );
    }
}

export default Header;