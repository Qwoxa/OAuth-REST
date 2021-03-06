import { connect } from 'react-redux';
import { signUp } from '../../../redux/actions';
import SignUpComponent from '../components';


export default connect(
  state => ({
    errorMessage: state.auth.errorMessage,
    error: state.auth.error
  }),
  { signUp }
)(SignUpComponent);