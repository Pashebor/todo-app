import * as React from 'react';

class LoginForm extends React.Component{
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