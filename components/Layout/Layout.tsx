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
import { Footer } from './Footer';
import styles from './Layout.module.css';
import { SearchBar } from './AutoSelectField';
import ScrollToTop from 'react-scroll-to-top';
import { Auth } from 'aws-amplify';
import { UserContext } from 'src/userContext';
import { SignOut } from './SignOut';
import { useAuth } from 'components/auth/useAuth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: 'white',
      marginLeft: 20,

      '&:hover': {
        backgroundColor: '#DCDCDC',
      },
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

  const { logout, authenticated } = useAuth();
  return (
    <div className={classes.root}>
      <ScrollToTop smooth />
      <AppBar className={classes.appbar} position='static'>
        <Toolbar className={styles.appbar}>
          <Link href='/'>
            <a>
              <Typography>
                <h2>ANNONCE 45</h2>
              </Typography>
            </a>
          </Link>

          <Link href='/ad/create'>
            <Button
              className={classes.button}
              variant='outlined'
              startIcon={<AddBoxOutlinedIcon />}
            >
              Déposer Une Annonce
            </Button>
          </Link>
          <SearchBar />
          {authenticated ? (
            <Button
              className={classes.button}
              onClick={logout}
              variant='outlined'
            >
              Déconnexion
            </Button>
          ) : (
            // <SignOut />
            <Link href='/auth'>
              <Button className={classes.button} variant='outlined'>
                Se Connecter
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <div style={{ minHeight: '85vh' }}>{children}</div>
      <Footer />
    </div>
  );
};
