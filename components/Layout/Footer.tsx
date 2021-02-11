import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

/**
 * The react functional component for the footer
 *
 * @returns The footer component
 */
const Footer: FC = () => {
  const useStyles = makeStyles(() => ({
    footerStyle: {
      textAlign: 'center',
      color: '#fff',
      backgroundColor: '#3f51b5',
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.footerStyle}>
        <b>Advertising App</b>, &copy; 2021 &nbsp; RoséCorps, Inc.
      </Typography>
    </div>
  );
};

export { Footer };
