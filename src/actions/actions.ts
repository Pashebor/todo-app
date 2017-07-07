import * as constants from './constants';

export interface LoginUser{
    type: constants.LOGIN_USER;
    payload: constants.LOGIN_USER;
}

export type AuthenticationAction = LoginUser;

export const loginUser = (formData: any) => {
    return {
        type: constants.LOGIN_USER,
        payload: formData
    }
};
