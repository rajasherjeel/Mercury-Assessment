import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  jokeContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#00c3fa',
    borderRadius: '80px',
    height: '60px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#005f9c',
    },
  },
  setupPara: {
    margin: '5% 5% 3% 10vw',
  },
  punchPara: {
    textAlign: 'end',
    margin: '3% 10vw 5% 5%',
  },
  loadingPara: {
    fontSize: '2vw',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    color: 'gray',
  },
  errorPara: {
    fontSize: '2vw',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    color: 'red',
  },
  '@media only screen and (max-width: 600px) and  (min-width: 320px)': {
    setupPara: {
      fontSize: '4vw',
    },
    punchPara: {
      fontSize: '4vw',
    },
    loadingPara: {
      fontSize: '4vw',
    },
    errorPara: {
      fontSize: '4vw',
    },
    button: {
      padding: '5%',
      margin: '5% auto',
      fontSize: '3vw',
      width: 'fit-content',
    },
  },
  '@media only screen and (max-width: 768px) and (min-width:601px)': {
    setupPara: {
      fontSize: '3.3vw',
    },
    punchPara: {
      fontSize: '3.3vw',
    },
    loadingPara: {
      fontSize: '3.3vw',
    },
    errorPara: {
      fontSize: '3.3vw',
    },
    button: {
      padding: '5%',
      margin: '5% auto',
      fontSize: '2.5vw',
      width: 'fit-content',
    },
  },
  '@media only screen and (max-width: 992px) and (min-width:769px)': {
    setupPara: {
      fontSize: '2.8vw',
    },
    punchPara: {
      fontSize: '2.8vw',
    },
    loadingPara: {
      fontSize: '2.8vw',
    },
    errorPara: {
      fontSize: '2.8vw',
    },
    button: {
      padding: '4%',
      margin: '3% auto',
      fontSize: '2vw',
      width: 'fit-content',
    },
  },
  '@media only screen and (max-width: 1200px) and (min-width:993px)': {
    setupPara: {
      fontSize: '2.2vw',
    },
    punchPara: {
      fontSize: '2.2vw',
    },
    loadingPara: {
      fontSize: '2.2vw',
    },
    errorPara: {
      fontSize: '2.2vw',
    },
    button: {
      padding: '2.5%',
      margin: '2% auto',
      fontSize: '1.5vw',
      width: 'fit-content',
    },
  },
  '@media only screen and (min-width: 1200px)': {
    setupPara: {
      fontSize: '2vw',
    },
    punchPara: {
      fontSize: '2vw',
    },
    loadingPara: {
      fontSize: '2vw',
    },
    errorPara: {
      fontSize: '2vw',
    },
    button: {
      padding: '2.5%',
      margin: '2% auto',
      fontSize: '1vw',
      width: 'fit-content',
    },
  },
}));

export default useStyles;
