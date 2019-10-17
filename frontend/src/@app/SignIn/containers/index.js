import { connect } from 'react-redux';
import { signIn } from '../../../redux/actions';
import SignIn from '../components';


export default connect(
    state => ({
        errorMessage: state.auth.errorMessage,
        error: state.auth.error
    }),
    {
        oauthGoogle: signIn('google'),
        oauthFacebook: signIn('facebook'),
        signIn: signIn('jwt')
    }
)(SignIn);