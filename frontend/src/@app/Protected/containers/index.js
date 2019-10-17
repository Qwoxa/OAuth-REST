import { connect } from 'react-redux';
import { getContent } from '../../../redux/actions';
import Home from '../components';

export default connect(
    state => ({
        data: state.content.secret && state.content.secret.data,
        fetched: state.content.secret && state.content.secret.fetched
    }),
    {
        getContent
    }
)(Home);