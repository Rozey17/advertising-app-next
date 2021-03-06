import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import styles from './Layout.module.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: 'white',
      marginLeft: 20,
    },
  })
);
const SignOut = () => {
  const router = useRouter();
  const classes = useStyles();
  const signOut = () => {
    Auth.signOut();
    window.location.href = `/`;
  };

  return (
    <Button className={classes.button} onClick={signOut} variant='outlined'>
      Déconnexion
    </Button>
  );
};

export { SignOut };
