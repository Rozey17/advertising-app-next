import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import styles from './Layout.module.css';
import { useState, useEffect } from 'react';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: 'white',
      marginLeft: 20,
      '&:hover': {
        backgroundColor: '#DCDCDC',
      },
      position: 'relative',
      right: 0,
    },
  })
);
const SignOut = () => {
  const classes = useStyles();
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log('User: ', user);
        setUser(user);
      })
      .catch(() => setUser(null));
  }, []);
  const signOut = () => {
    Auth.signOut().then(() => {
      setUser(null);
    });
  };

  return (
    <Button className={classes.button} onClick={signOut} variant='outlined'>
      Déconnexion
    </Button>
  );
};

export { SignOut };
