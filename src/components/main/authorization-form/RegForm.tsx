import * as React from 'react';


class RegForm extends React.Component{
    public refs: {
        fileInput: HTMLInputElement;
        image: HTMLElement;
        password: HTMLInputElement;
        passwordConfirm: HTMLInputElement;
    };

    private imagePreview(e: any) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = (e: any) => {
                this.refs['image'].setAttribute('src', e.target.result);
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }

    private uploadImageHandler() {
        this.refs['fileInput'].click();
    }

    private onSumitHandler(e: any) {
        e.preventDefault();
        let password: string = this.refs['password'].value, passwordConfirm: string = this.refs['passwordConfirm'].value;
        password !== passwordConfirm ? console.log('not') : console.log('ok');
    }

    render() {
        return(
            <form className="form" encType="multipart/form-data" onSubmit={this.onSumitHandler.bind(this)}>
                <div className="form__item">
                    <img src="images/question.png" ref="image" className="form__image" alt="Фото" title="Фото" onClick={this.uploadImageHandler.bind(this)}/>
                    <input className="form__file" ref="fileInput" id="photo" type="file" name="photo" onChange={this.imagePreview.bind(this)} />
                </div>
                <div className="form__item">
                    <label target="name">Ваше имя <span>*</span></label>
                    <input className="form__input" id="name" type="text" name="name" required/>
                </div>
                <div className="form__item">
                    <label target="password">Пароль <span>*</span></label>
                    <input className="form__input" ref="password" type="password" id="password" name="password" required/>
                </div>
                <div className="form__item">
                    <label target="password-confirm">Подтверждение пароля <span>*</span></label>
                    <input className="form__input" ref="passwordConfirm" type="password" id="password-confirm" name="password" required/>
                </div>
                <div className="form__item">
                    <input className="submit-btn" type="submit"  value="Отправить"/>
                </div>
            </form>
        )
    }
}

export default RegForm;