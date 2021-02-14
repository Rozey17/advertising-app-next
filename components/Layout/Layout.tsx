import React, { FC, ReactNode } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import Head from 'next/head';
import { Footer } from './Footer';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    search: {
      marginLeft: 20,
      // backgroundColor: 'white',
      paddingLeft: 10,
    },
    searchIcon: {
      // backgroundColor: 'white',
    },
  })
);

interface Props {
  children?: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: '#eceff1' }}>
      <Head>
        <title>{title ? { title } : 'Advertising App'}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href='browser-web-icon.png' />
      </Head>
      <AppBar position='static'>
        <Toolbar>
          <Link href='/'>
            <Button variant='contained' color='primary'>
              {' '}
              HOME
            </Button>
          </Link>
          <InputBase
            className={classes.search}
            placeholder='Chercher'
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type='submit' className={classes.searchIcon}>
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ minHeight: '85vh' }}>{children}</div>
      <Footer />
    </div>
  );
};
