import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>({
    heading: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2)
    },
    cardContainer: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    card: {
        width: '49%',
        margin: 5
    },
    cardContent: {
        display: 'flex',
        flexFlox: 'row wrap'
    },
    cartTextContent: {
        paddingLeft: 20
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