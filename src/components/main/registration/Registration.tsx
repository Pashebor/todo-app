import * as React from 'react';
import {RegisterProps} from "../Main";
import {Link} from 'react-router-dom';



class Registration extends React.Component<RegisterProps> {

    render() {
        return(
            <main className="registration">
                <div className="container">

                </div>
                <Link to={'/'}>Back</Link>
            </main>
        )
    }
}

export default Registration;