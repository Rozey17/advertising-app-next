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
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import Link from 'next/link';
import Head from 'next/head';
import { Footer } from './Footer';
import { CreateAdForm } from 'components/ads/CreateAdForm';
import styles from './Layout.module.css';
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
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

  return (
    <div className={classes.root} style={{ backgroundColor: '#eceff1' }}>
      <Head>
        <title>{title ? { title } : 'Annonce 45'}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href='browser-web-icon.png' />
      </Head>
      <AppBar position='static' color='transparent'>
        <Toolbar className={styles.appbar}>
          <Link href='/'>
            <a>
              <h2>ANNONCE 45</h2>
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
        </Toolbar>
      </AppBar>
      <div style={{ minHeight: '85vh' }}>{children}</div>
      <Footer />
    </div>
  );
};

// <header class="site-header">
//   <div class="wrapper site-header__wrapper">
//     <a href="#" class="brand">Brand</a>
//     <nav class="nav">
//       <button class="nav__toggle" aria-expanded="false" type="button">
//         menu
//       </button>
//       <ul class="nav__wrapper">
//         <li class="nav__item"><a href="#">Home</a></li>
//         <li class="nav__item"><a href="#">About</a></li>
//         <li class="nav__item"><a href="#">Services</a></li>
//         <li class="nav__item"><a href="#">Hire us</a></li>
//         <li class="nav__item"><a href="#">Contact</a></li>
//       </ul>
//     </nav>
//   </div>
// </header>
