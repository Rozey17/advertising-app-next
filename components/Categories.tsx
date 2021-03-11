import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { SubCategories } from './SubCategories';
import { Link } from '@material-ui/core';

interface Props {
  name: string;
  adCategoryID: string;
}

export default function Categories({ name, adCategoryID }: Props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Link href='#' onClick={handleClick}>
        <a>{name}</a>
      </Link>

      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <SubCategories adCategoryID={adCategoryID} />
      </Menu>
    </div>
  );
}
