import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Typography } from '@material-ui/core';
import { useStyles } from './useStyles';
import Card from './Card';


const Protected = ({ data, fetched, getContent }) => {
    const classes = useStyles();

    useEffect(() => {
        if (!fetched) {
            getContent('secret');
        }
    }, [getContent])

    return (
        <Container>
            <Typography variant="h2" className={classes.heading}>Secret</Typography>
            <Typography variant="subtitle1">Here's the page that only logged in users can view. Let it be the list of applicants..</Typography>

            {!data && (
                <Typography variant="body1">No records...</Typography>
            )}

            {data && (
                <div className={classes.cardContainer}>
                    {data.map(person => (
                        <Card key={person.title} {...person} />
                    ))}
                </div>
            )}

        </Container>
    );
};

Protected.propTypes = {
    getContent: PropTypes.func.isRequired,
    fetched: PropTypes.bool,
    data: PropTypes.arrayOf(
       PropTypes.object
    )
};

export default Protected;