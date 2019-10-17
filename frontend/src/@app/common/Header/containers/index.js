import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signOut } from '../../../../redux/actions';
import Header from '../components';

export default withRouter(connect(
    state => ({
        isAuthenticated: state.auth.isAuthenticated
    }),
    {
        signOut
    }
)(Header));