import * as React from 'react';
import DefaultScreen from "./start-screen/StartScreen";
import Login from "./login/Login";
import {BrowserRouter, Route, RouteComponentProps, Switch} from 'react-router-dom';

export interface StartScreenProps extends RouteComponentProps<any> {}
export interface LoginProps extends RouteComponentProps<any> {}

class Main extends React.Component {
    render() {
        return(
            <section>
                <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={DefaultScreen} />
                    <Route path="/login/" component={Login} />
                </Switch>
              </BrowserRouter>
            </section>
        )
    }
}
export default Main;