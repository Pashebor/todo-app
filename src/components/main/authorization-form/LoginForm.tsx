import * as React from 'react';
import {loginUser} from '../../../actions/actions';
import {Props} from "../Main";

class LoginForm extends React.Component<Props>{

    render() {
        return(
            <form className="form" encType="multipart/form-data">
                <div className="form__item">
                    <label target="name">Ваше имя <span>*</span></label>
                    <input className="form__input" id="name" type="text" name="name" required/>
                </div>
                <div className="form__item">
                    <label target="password">Пароль <span>*</span></label>
                    <input className="form__input" type="password" id="password" name="password" required/>
                </div>
                <div className="form__item">
                    <input className="submit-btn" type="submit"  value="Вход"/>
                </div>
            </form>
        )
    }
}

export default LoginForm