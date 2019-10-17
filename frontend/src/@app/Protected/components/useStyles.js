import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>({
    heading: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2)
    },
    cardContainer: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'
    },
    card: {
        width: '40%',
        margin: 5
    },
    cardContent: {
        display: 'flex',
        flexFlox: 'row wrap',
        alignItems: 'center'
    },
    cardAvatar: {
        width: 50,
        height: 50,
        margin: 10
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));