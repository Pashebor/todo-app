import * as React from 'react';
import {StartScreenProps} from "../Main";
import { Link } from 'react-router-dom';

class DefaultScreen extends React.Component<StartScreenProps>{
    render() {
        return(
            <main className="start-screen">
               <div className="wrapper">
                   <div className="container">
                      <div className="start-screen__content">
                          <h2 className="start-screen__title">Добро пожаловать в заметки онлайн!</h2>
                          <h5 className="start-screen__subtitle">Вы не зарегестрировались, либо не авторизовались <br/>для продолжения нажмите</h5>
                          <p className="start-screen__variants"><span>СЮДА</span> или <span>СЮДА</span></p>
                          <Link to={'login'}>login</Link>
                      </div>
                   </div>
               </div>
            </main>
        )
    }
}

export default DefaultScreen;