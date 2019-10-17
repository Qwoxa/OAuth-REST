import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography } from '@material-ui/core';
import { useStyles } from './useStyles';

const Post = ({ title, text, avatar }) => {
    const classes = useStyles();

    return (
        <div className={classes.post}>
            <Avatar src={avatar} alt={title} className={classes.avatar}/>
            <div className={classes.postContent}>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="body1">{text}</Typography>
            </div>
        </div>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
};


export default Post;