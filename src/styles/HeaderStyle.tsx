import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5% 10vw 2%',
  },
  button: {
    backgroundColor: '#38ac38 !important',
    borderRadius: '80px !important',
    height: '60px',
    color: 'white !important',
    '&:hover': {
      backgroundColor: 'green !important',
    },
  },
  anchor: {
    color: 'blue',
    textDecoration: 'underline',
    fontSize: '1.3vw',
  },
  hr: {
    margin: '0 10vw',
    height: '0.5vh',
    backgroundColor: '#b7b6b5',
  },
  '@media only screen and (max-width: 600px) and (min-width: 320px)': {
    header: {
      flexDirection: 'column',
    },
    button: {
    padding: '5% !important',
      margin: '5% 0',
      fontSize: '4vw !important',
      width: 'fit-content',
    },
    anchor: {
      fontSize: '4vw',
      marginBottom: '3%',
    },
  },
  '@media only screen and (max-width: 768px ) and (min-width:601px)': {
    button: {
      padding: '5% !important',
      margin: '2% 0',
      fontSize: '2vw !important',
      width: 'fit-content',
    },
    anchor: {
      fontSize: '2.5vw ',
    },
    hr: {
      marginTop: '2%',
    },
  },
  '@media only screen and (max-width: 992px) and (min-width:769px)': {
    button: {
      padding: '5% !important',
      margin: '2% 0',
      fontSize: '2vw !important',
      width: 'fit-content',
    },
    anchor: {
      fontSize: '2.2vw ',
    },
    hr: {
      marginTop: '1.8%',
    },
  },
  '@media only screen and (max-width: 1200px) and (min-width:993px)': {
    button: {
      padding: '5% !important',
      margin: '2% 0',
      fontSize: '1.5vw !important',
      width: 'fit-content',
    },
    anchor: {
      fontSize: '2vw',
    },
    hr: {
      marginTop: '1.5%',
    },
  },
  '@media only screen and (min-width: 1200px)': {
    button: {
      padding: '4% 3% !important',
      margin: '2% 0',
      fontSize: '1.2vw !important',
      width: 'fit-content',
    },
    anchor: {
      fontSize: '1.6vw',
    },
    hr: {
      marginTop: '1%',
    },
  },
}));

export default useStyles;
