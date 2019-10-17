import { connect } from 'react-redux';
import { signOut } from '../../../../redux/actions';
import Header from '../components';

export default connect(
    state => ({
        isAuthenticated: state.auth.isAuthenticated
    }),
    {
        signOut
    }
)(Header);