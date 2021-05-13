import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import NavigationBar from './NavigationBar';
import Header from './Header';
import Different from './Different';
import HowWeWork from './HowWeWork';
import Contacts from './Contacts';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  different: {
    marginTop: -200,
    marginBottom: 100,
    [theme.breakpoints.up('md')]: {
      marginTop: 300,
    },
  },
  footer: {
    textAlign: 'center',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Box>
      <NavigationBar />
      <Header />
      <Box className={classes.different}>
        <Different />
      </Box>
      <HowWeWork />
      <Contacts />
      <Container className={classes.footer}>
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
