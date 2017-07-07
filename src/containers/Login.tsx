import Login from '../components/main/login/Login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loginUser} from '../actions/actions';

export function mapStateToProps(store:any) {
    return {
        fromData: store
    }
}

export const mapDispatchToProps = (dispatch:any) => {
    //noinspection TypeScriptValidateTypes
    return bindActionCreators({loginUser}, dispatch)
};

//noinspection TypeScriptValidateTypes
export default connect(mapStateToProps, mapDispatchToProps)(Login);