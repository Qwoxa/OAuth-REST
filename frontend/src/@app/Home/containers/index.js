import { connect } from 'react-redux';
import { getContent } from '../../../redux/actions';
import Home from '../components';

export default connect(
    state => ({
        data: state.content.public && state.content.public.data,
        fetched: state.content.public && state.content.public.fetched
    }),
    {
        getContent
    }
)(Home);