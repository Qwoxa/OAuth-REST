import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardActions, Button, Avatar, Typography } from '@material-ui/core';
import { useStyles } from './useStyles';

const CustomCard = ({ firstName, title, avatar }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Avatar src={avatar} alt={firstName} className={classes.cardAvatar}/>
                <div className={classes.cardTextContent}>
                    <Typography color="textSecondary" gutterBottom>
                        {firstName}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                </div>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button size="small">View applicant</Button>
            </CardActions>
        </Card>
    );
};

CustomCard.propTypes = {
    firstName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
};

export default CustomCard;
