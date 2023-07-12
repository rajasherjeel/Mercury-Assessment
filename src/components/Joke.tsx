import React, { ReactElement } from 'react';
import useStyles from '../styles/JokeStyle';
import Button from '@material-ui/core/Button';

interface JokeProps {
  joke: {
    setup: string;
    punchline: string;
  };
  loading: boolean;
  error: boolean;
  handlePunchLineClick: () => void;
  punchLineButtonState: boolean;
}

function Joke({
  joke,
  loading,
  error,
  handlePunchLineClick,
  punchLineButtonState,
}: JokeProps): ReactElement {
  const classes = useStyles();

  function BlueRoundedButton(): ReactElement {
    const classes = useStyles();

    return (
      <Button className={classes.button} onClick={handlePunchLineClick}>
        {punchLineButtonState ? 'Hide Punchline' : 'Show Punchline'}
      </Button>
    );
  }

  return (
    <div>
      {loading && <p className={classes.loadingPara}>Loading your Joke...</p>}
      {!loading && error && <p className={classes.errorPara}>THERE WAS AN ERROR LOADING YOUR JOKE</p>}
      {!loading && !error && (
        <div className={classes.jokeContent}>
          <p className={classes.setupPara}>{joke.setup}</p>
          <BlueRoundedButton />
          {punchLineButtonState && <p className={classes.punchPara}>{joke.punchline}</p>}
        </div>
      )}
    </div>
  );
}

export default Joke;
