import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Typography } from '@material-ui/core';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

import Link from 'next/link';
import Head from 'next/head';
import { Footer } from './Footer';
import styles from './Layout.module.css';
import { SearchBar } from './AutoSelectField';
import ScrollToTop from 'react-scroll-to-top';
import { Auth } from 'aws-amplify';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { UserContext } from 'src/userContext';
import { SignOut } from './SignOut';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    button: {
      backgroundColor: 'white',
      marginLeft: 20,
    },
  })
);

interface Props {
  children?: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }: Props) => {
  const classes = useStyles();
  // const user = useContext(UserContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log('User: ', user);
        setUser(user);
      })
      .catch(() => setUser(null));
  }, []);
  return (
    <div className={classes.root}>
      <ScrollToTop smooth />
      <AppBar position='static'>
        <Toolbar className={styles.appbar}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='primary'
            aria-label='menu'
            onClick={() => {}}
          >
            <MenuIcon />
          </IconButton>
          <Link href='/'>
            <a>
              <Typography>
                <h2>ANNONCE 45</h2>
              </Typography>
            </a>
          </Link>

          <Link href='/create-ad'>
            <Button
              className={classes.button}
              variant='outlined'
              startIcon={<AddBoxOutlinedIcon />}
            >
              Déposer Une Annonce
            </Button>
          </Link>
          <SearchBar />
          {!user ? (
            <Link href='/profile'>
              <Button className={classes.button} variant='outlined'>
                Se Connecter
              </Button>
            </Link>
          ) : (
            <SignOut />
          )}
        </Toolbar>
      </AppBar>
      <div style={{ minHeight: '85vh' }}>{children}</div>
      <Footer />
    </div>
  );
};
