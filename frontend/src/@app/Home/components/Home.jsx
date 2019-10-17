import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Typography } from '@material-ui/core';
import Post from './Post';
import { useStyles } from './useStyles';

const Home = ({ data, fetched, getContent }) => {
    const classes = useStyles();

    useEffect(() => {
        if (!fetched) {
            getContent('public');
        }
    }, [getContent])

    return (
        <Container>
            <Typography variant="h2" className={classes.heading}>Home</Typography>
            <Typography variant="subtitle1">Here's some vacancies you might be interested in</Typography>

            {!data && (
                <Typography variant="body1">No records...</Typography>
            )}

            {data && data.map(article => (
                <Post key={article.title} {...article} />
            ))}
        </Container>
    );
};

Home.propTypes = {
    getContent: PropTypes.func.isRequired,
    fetched: PropTypes.bool,
    data: PropTypes.arrayOf(
       PropTypes.object
    )
};

export default Home;