import * as React from 'react';
import {regUser} from  '../../../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class RegForm extends React.Component<any>{
    public refs: {
        regForm: any;
        fileInput: HTMLInputElement;
        image: HTMLElement;
        name: HTMLInputElement
        password: HTMLInputElement;
        passwordConfirm: HTMLInputElement;
    };

    public formData: FormData;

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
        let formData = this.formData(e.target);
        let password: string = this.refs['password'].value,
            passwordConfirm: string = this.refs['passwordConfirm'].value,
            name: string = this.refs['name'].value,
            image: any = this.refs['fileInput'];

        if (password !== passwordConfirm) {
            console.log('not equal');
        } else {
            this.formData.append('image', image.files[0]);
            this.formData.append('password', password);
            this.formData.append('name', name);
            console.log(this.formData.getAll)
        }

    }

    render() {
        console.log(this);
        return(
            <form className="form" encType="multipart/form-data" ref="regForm" onSubmit={this.onSumitHandler.bind(this)}>
                <div className="form__item">
                    <img src="images/question.png" ref="image" className="form__image" alt="Фото" title="Фото" onClick={this.uploadImageHandler.bind(this)}/>
                    <input className="form__file" ref="fileInput" id="photo" type="file" name="photo" onChange={this.imagePreview.bind(this)} />
                </div>
                <div className="form__item">
                    <label target="name">Ваше имя <span>*</span></label>
                    <input className="form__input" id="name" type="text" ref="name" name="name" required/>
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

export function mapStateToProps(store:any) {
    return {
        regData: store.regFormStore.regData
    }
}

export const mapDispatchToProps = (dispatch:any) => {
    //noinspection TypeScriptValidateTypes
    return bindActionCreators({regUser}, dispatch)
};

//noinspection TypeScriptValidateTypes
export default connect(mapStateToProps, mapDispatchToProps)(RegForm);