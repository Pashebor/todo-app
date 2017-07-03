import * as React from 'react';
import {StartScreenProps} from "../Main";
import { Link } from 'react-router-dom';

class DefaultScreen extends React.Component<StartScreenProps>{
    render() {
        return(
            <main>
                <p>hi</p>
                <Link to={'login'}>login</Link>
            </main>
        )
    }
}

export default DefaultScreen;