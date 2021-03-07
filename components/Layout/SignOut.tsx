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
    },
  })
);
const SignOut = () => {
  const classes = useStyles();
  const signOut = () => {
    Auth.signOut();
  };

  return (
    <Button className={classes.button} onClick={signOut} variant='outlined'>
      Déconnexion
    </Button>
  );
};

export { SignOut };
