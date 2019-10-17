import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    copyrightLink: {
      color: 'inherit'
    },
    signInLink: {
      textDecoration: 'none',
      color: theme.palette.primary,
      float: 'right'
    },
    errorMessage: {
      textAlign: 'center',
      color: 'red'
    }
}));