import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(8)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: 10
  },
  googleBtn: {
    "&:hover": {
      backgroundColor: "#dd4b39"
    },
    margin: 5,
    backgroundColor: '#dd4b39',
    color: '#fff'
  },
  facebookBtn: {
    "&:hover": {
      backgroundColor: "#3b5998"
    },
    margin: 5,
    backgroundColor: '#3b5998',
    color: '#fff'
  },
  buttonAvatar: {
    width: 30,
    height: 30
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  errorMessage: {
    textAlign: 'center',
    color: 'red'
  }
}));
