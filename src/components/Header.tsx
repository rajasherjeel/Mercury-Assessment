import React, { ReactElement } from 'react';
import useStyles from '../styles/HeaderStyle';
import Button from '@material-ui/core/Button';

interface HeaderProps {
  getNewJoke: () => void;
}

function Header({ getNewJoke }: HeaderProps): ReactElement {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
        <Button className={classes.button} onClick={getNewJoke}>
          Get A New Random Joke
        </Button>
        <a
          href="https://github.com/15Dkatz/official_joke_api"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.anchor}
        >
          View API Docs
        </a>
      </div>
      <hr className={classes.hr} />
    </>
  );
}

export default Header;
