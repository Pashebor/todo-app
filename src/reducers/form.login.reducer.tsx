import {AuthenticationAction} from '../actions/actions'
import {LOGIN_USER} from '../actions/constants';

interface Form{
    formData: any
}
const initialState = {
    formData: 'ass'
};

export const loginReducer = (state = initialState, action: any) => {
    console.log(state);
    switch (action.type) {
        case LOGIN_USER:
            return {...state, formData: action.payload};
    }
    return state;
};


