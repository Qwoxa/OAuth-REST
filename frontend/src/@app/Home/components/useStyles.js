import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>({
    heading: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2)
    },
    post: {
        display: 'flex',
        alignItems: 'center',
        margin: '15px 0'
    },
    avatar: {
        height: 100,
        width: 100,
        margin: 10,
        padding: 10
    },
    postContent: {
        paddingLeft: 10
    }
}));